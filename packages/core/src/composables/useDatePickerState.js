import { computed, ref, watch } from 'vue';
import { Temporal, startOfIsoWeek, today, toJSDate } from '../utils/temporal.js';
import { fmt_monthYear, fmt_weekdayNarrow } from '../utils/intlDate.js';

/**
 * Encapsulates the date picker panel state, navigation, and day-cell model.
 *
 * @param {object} options
 * @param {import('vue').Ref<Date | null>} options.modelValue
 * @param {import('vue').Ref<string>} options.locale
 * @param {(event: 'update:modelValue' | 'date-select', payload: Date) => void} options.emit
 * @returns {{
 *   open: import('vue').Ref<boolean>,
 *   cursor: import('vue').Ref<Temporal.PlainDate>,
 *   displayValue: import('vue').ComputedRef<string>,
 *   panelLabel: import('vue').ComputedRef<string>,
 *   dowLabels: import('vue').ComputedRef<string[]>,
 *   cells: import('vue').ComputedRef<object[]>,
 *   toggle: () => void,
 *   close: () => void,
 *   prevMonth: () => void,
 *   nextMonth: () => void,
 *   selectDay: (date: Temporal.PlainDate) => void
 * }}
 */
export const useDatePickerState = ({ modelValue, locale, emit }) => {
    /**
     * Controls whether the calendar panel is currently visible.
     */
    const open = ref(false);

    /**
     * Tracks the month currently shown in the panel. This is independent from
     * the selected value so users can browse before committing a date.
     */
    const cursor = ref(
        modelValue.value
            ? Temporal.PlainDate.from(modelValue.value.toISOString().slice(0, 10))
            : today()
    );

    watch(modelValue, (value) => {
        cursor.value = value
            ? Temporal.PlainDate.from(value.toISOString().slice(0, 10))
            : today();
    });

    /**
     * Formats the selected date for the read-only trigger input.
     */
    const displayValue = computed(() => {
        if (!modelValue.value) {
            return '';
        }

        return new Intl.DateTimeFormat(locale.value, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(modelValue.value);
    });

    /**
     * Human-readable month/year label shown in the panel header.
     */
    const panelLabel = computed(() => fmt_monthYear(cursor.value, locale.value));

    /**
     * Narrow weekday labels used in the panel header row.
     */
    const dowLabels = computed(() => {
        const monday = startOfIsoWeek(today());

        return Array.from({ length: 7 }, (_, index) => (
            fmt_weekdayNarrow(monday.add({ days: index }), locale.value)
        ));
    });

    /**
     * Full day-cell model for the visible month grid, including state flags for
     * "today", "selected", and whether the day belongs to the cursor month.
     */
    const cells = computed(() => {
        const firstOfMonth = cursor.value.with({ day: 1 });
        const start = startOfIsoWeek(firstOfMonth);
        const end = startOfIsoWeek(firstOfMonth.with({ day: firstOfMonth.daysInMonth })).add({ days: 6 });
        const todayDate = today();
        const selectedDate = modelValue.value
            ? Temporal.PlainDate.from(modelValue.value.toISOString().slice(0, 10))
            : null;
        const results = [];

        for (let date = start; Temporal.PlainDate.compare(date, end) <= 0; date = date.add({ days: 1 })) {
            results.push({
                key: date.toString(),
                label: String(date.day),
                date,
                current: date.month === cursor.value.month,
                isToday: Temporal.PlainDate.compare(date, todayDate) === 0,
                isSelected: selectedDate ? Temporal.PlainDate.compare(date, selectedDate) === 0 : false,
            });
        }

        return results;
    });

    /**
     * Toggles the date picker panel.
     */
    const toggle = () => {
        open.value = !open.value;
    };

    /**
     * Closes the date picker panel.
     */
    const close = () => {
        open.value = false;
    };

    /**
     * Navigates the panel to the previous month without changing the selected
     * value.
     */
    const prevMonth = () => {
        cursor.value = cursor.value.subtract({ months: 1 });
    };

    /**
     * Navigates the panel to the next month without changing the selected
     * value.
     */
    const nextMonth = () => {
        cursor.value = cursor.value.add({ months: 1 });
    };

    /**
     * Commits a selected day to the parent component.
     *
     * @param {Temporal.PlainDate} date
     */
    const selectDay = (date) => {
        const jsDate = toJSDate(date);
        emit('update:modelValue', jsDate);
        emit('date-select', jsDate);
        open.value = false;
    };

    return {
        open,
        cursor,
        displayValue,
        panelLabel,
        dowLabels,
        cells,
        toggle,
        close,
        prevMonth,
        nextMonth,
        selectDay,
    };
};
