import { computed } from 'vue';
import { Temporal, endOfIsoWeek, startOfIsoWeek, today } from '../utils/temporal.js';
import { resolveCalendarColors } from '../utils/calendarColors.js';
import { fmt_weekdayNarrow } from '../utils/intlDate.js';

/**
 * Groups events by YYYY-MM-DD so day-cell lookups stay fast and readable.
 *
 * @param {import('vue').Ref<object[]>} events
 * @returns {import('vue').ComputedRef<Map<string, object[]>>}
 */
const useEventsByDay = (events) => computed(() => {
    const groupedEvents = new Map();

    for (const event of events.value ?? []) {
        const dayKey = event.start?.slice(0, 10);
        if (!dayKey) {
            continue;
        }

        if (!groupedEvents.has(dayKey)) {
            groupedEvents.set(dayKey, []);
        }

        groupedEvents.get(dayKey).push(event);
    }

    return groupedEvents;
});

/**
 * Shared month-grid model used by both the month view and the date picker.
 *
 * @param {object} options
 * @param {import('vue').Ref<number>} options.year
 * @param {import('vue').Ref<number>} options.month
 * @param {import('vue').Ref<string>} options.locale
 * @param {import('vue').Ref<object[] | undefined>} [options.events]
 * @param {import('vue').Ref<Record<string, object> | undefined>} [options.calendars]
 * @param {import('vue').Ref<number | undefined>} [options.maxVisible]
 * @returns {{
 *   dayLabels: import('vue').ComputedRef<string[]>,
 *   calendarDays: import('vue').ComputedRef<Temporal.PlainDate[]>,
 *   getEventsForDay: (day: Temporal.PlainDate) => object[],
 *   getVisibleEvents: (day: Temporal.PlainDate) => object[],
 *   isCurrentMonth: (day: Temporal.PlainDate) => boolean,
 *   eventBadgeStyle: (event: object) => Record<string, string>
 * }}
 */
export const useMonthGrid = ({ year, month, locale, events, calendars, maxVisible }) => {
    const eventsByDay = useEventsByDay(events ?? computed(() => []));

    /**
     * Localized weekday headers for the month grid.
     */
    const dayLabels = computed(() => {
        const monday = startOfIsoWeek(today());

        return Array.from({ length: 7 }, (_, index) => (
            fmt_weekdayNarrow(monday.add({ days: index }), locale.value)
        ));
    });

    /**
     * Inclusive list of dates rendered in the month grid, padded to full weeks
     * at the beginning and end of the month.
     */
    const calendarDays = computed(() => {
        const firstOfMonth = Temporal.PlainDate.from({
            year: year.value,
            month: month.value,
            day: 1,
        });
        const start = startOfIsoWeek(firstOfMonth);
        const end = endOfIsoWeek(firstOfMonth.with({ day: firstOfMonth.daysInMonth }));
        const days = [];

        for (let cursor = start; Temporal.PlainDate.compare(cursor, end) <= 0; cursor = cursor.add({ days: 1 })) {
            days.push(cursor);
        }

        return days;
    });

    /**
     * Returns whether a day belongs to the visible month.
     *
     * @param {Temporal.PlainDate} day
     * @returns {boolean}
     */
    const isCurrentMonth = (day) => day.month === month.value;

    /**
     * Returns every event that starts on the given day.
     *
     * @param {Temporal.PlainDate} day
     * @returns {object[]}
     */
    const getEventsForDay = (day) => eventsByDay.value.get(day.toString()) ?? [];

    /**
     * Returns only the visible subset of events for the day cell.
     *
     * @param {Temporal.PlainDate} day
     * @returns {object[]}
     */
    const getVisibleEvents = (day) => getEventsForDay(day).slice(0, maxVisible?.value ?? Number.MAX_SAFE_INTEGER);

    /**
     * Resolves badge colors for a month event.
     *
     * @param {{ calendarId: string }} event
     * @returns {Record<string, string>}
     */
    const eventBadgeStyle = (event) => {
        const colors = resolveCalendarColors(event.calendarId, calendars?.value ?? {});

        return {
            background: colors.container,
            borderLeft: `3px solid ${colors.main}`,
            color: colors.onContainer,
        };
    };

    return {
        dayLabels,
        calendarDays,
        getEventsForDay,
        getVisibleEvents,
        isCurrentMonth,
        eventBadgeStyle,
    };
};
