import { computed } from 'vue';
import { normalizeToPlainDateTime } from '../utils/temporal.js';
import { resolveCalendarColors } from '../utils/calendarColors.js';

/**
 * Shared list-view model used by the calendar list view.
 *
 * @param {object} options
 * @param {import('vue').Ref<object>} options.date
 * @param {import('vue').Ref<object[]>} options.events
 * @param {import('vue').Ref<Record<string, object>>} options.calendars
 * @param {import('vue').Ref<string>} options.locale
 * @returns {{
 *   dayLabel: import('vue').ComputedRef<string>,
 *   items: import('vue').ComputedRef<Array<{
 *     event: object,
 *     timePrimary: string,
 *     timeSecondary: string,
 *     sortGroup: number,
 *     sortMinutes: number
 *   }>>,
 *   itemStyle: (event: { calendarId?: string }) => Record<string, string>
 * }}
 */
export const useListView = ({ date, events, calendars, locale }) => {
    /**
     * Human-readable day heading for the selected list-view date.
     */
    const dayLabel = computed(() => new Intl.DateTimeFormat(locale.value, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(Date.UTC(date.value.year, date.value.month - 1, date.value.day))));

    const timeFormatter = computed(() => new Intl.DateTimeFormat(locale.value, {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'UTC',
    }));

    /**
     * Events that overlap the selected day, sorted for a simple agenda layout.
     */
    const items = computed(() => events.value
        .map((event) => toListItem(event, date.value, timeFormatter.value))
        .filter(Boolean)
        .sort((left, right) => {
            if (left.sortGroup !== right.sortGroup) {
                return left.sortGroup - right.sortGroup;
            }

            if (left.sortMinutes !== right.sortMinutes) {
                return left.sortMinutes - right.sortMinutes;
            }

            return String(left.event.title ?? '').localeCompare(String(right.event.title ?? ''));
        }));

    /**
     * Resolves the accent colors used by one list-view row.
     *
     * @param {{ calendarId?: string }} event
     * @returns {Record<string, string>}
     */
    const itemStyle = (event) => {
        const colors = resolveCalendarColors(event.calendarId, calendars.value ?? {});

        return {
            '--ht-list-accent': colors.main,
            '--ht-list-container': colors.container,
            '--ht-list-on-container': colors.onContainer,
        };
    };

    return {
        dayLabel,
        items,
        itemStyle,
    };
};

/**
 * Normalizes one calendar event into a list-row model for the selected date.
 *
 * @param {object} event
 * @param {import('../utils/temporal.js').Temporal.PlainDate} selectedDate
 * @param {Intl.DateTimeFormat} formatter
 * @returns {object | null}
 */
function toListItem(event, selectedDate, formatter) {
    const start = normalizeToPlainDateTime(event.start);
    const end = normalizeToPlainDateTime(event.end);

    if (!start || !end) {
        return null;
    }

    const startDate = start.toPlainDate();
    let endDate = end.toPlainDate();
    const isDateOnly = String(event.start).length === 10 && String(event.end).length === 10;

    // Treat midnight endings as exclusive for timed cross-day events.
    if (!isDateOnly && end.hour === 0 && end.minute === 0 && startDate.until(endDate).sign > 0) {
        endDate = endDate.subtract({ days: 1 });
    }

    if (
        startDate.until(selectedDate).sign < 0
        || selectedDate.until(endDate).sign < 0
    ) {
        return null;
    }

    const startsBefore = startDate.until(selectedDate).sign > 0;
    const endsAfter = selectedDate.until(endDate).sign > 0;

    if (isDateOnly) {
        return {
            event,
            timePrimary: startsBefore ? '<-' : 'All day',
            timeSecondary: endsAfter ? '->' : '',
            sortGroup: 0,
            sortMinutes: -1,
        };
    }

    return {
        event,
        timePrimary: startsBefore ? '<-' : formatPlainDateTime(start, formatter),
        timeSecondary: endsAfter ? '->' : formatPlainDateTime(end, formatter),
        sortGroup: startsBefore ? 0 : 1,
        sortMinutes: startsBefore ? 0 : (start.hour * 60) + start.minute,
    };
}

/**
 * Formats a Temporal plain date-time using the list-view time formatter.
 *
 * @param {{ year: number, month: number, day: number, hour: number, minute: number }} value
 * @param {Intl.DateTimeFormat} formatter
 * @returns {string}
 */
function formatPlainDateTime(value, formatter) {
    return formatter.format(new Date(Date.UTC(
        value.year,
        value.month - 1,
        value.day,
        value.hour,
        value.minute,
    )));
}
