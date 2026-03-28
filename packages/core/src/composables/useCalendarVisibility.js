import { computed, ref, watch } from 'vue';

/**
 * Manages per-calendar visibility without mutating the underlying event data.
 *
 * Hidden calendars remain in the sidebar so users can bring them back quickly,
 * while the rendered event list excludes their events from the active views.
 *
 * @param {object} options
 * @param {import('vue').Ref<object>} options.calendars
 * @param {import('vue').Ref<object[]>} options.events
 * @returns {{
 *   hiddenCalendarIds: import('vue').ComputedRef<string[]>,
 *   hasHiddenCalendars: import('vue').ComputedRef<boolean>,
 *   filteredEvents: import('vue').ComputedRef<object[]>,
 *   isCalendarHidden: (calendarId: string | null | undefined) => boolean,
 *   hideCalendar: (calendarId: string | null | undefined) => void,
 *   showCalendar: (calendarId: string | null | undefined) => void,
 *   toggleCalendarVisibility: (calendarId: string | null | undefined) => void,
 *   showAllCalendars: () => void
 * }}
 */
export const useCalendarVisibility = ({ calendars, events }) => {
    const hiddenIds = ref(new Set());

    /**
     * Serialized hidden calendar IDs for templates and public API consumers.
     */
    const hiddenCalendarIds = computed(() => [...hiddenIds.value]);

    /**
     * `true` when at least one calendar is currently hidden.
     */
    const hasHiddenCalendars = computed(() => hiddenIds.value.size > 0);

    /**
     * Rendered event list after applying the current visibility filter.
     */
    const filteredEvents = computed(() => (
        events.value.filter((event) => !hiddenIds.value.has(event.calendarId))
    ));

    /**
     * @param {string | null | undefined} calendarId
     * @returns {boolean}
     */
    const isCalendarHidden = (calendarId) => (
        typeof calendarId === 'string' && hiddenIds.value.has(calendarId)
    );

    /**
     * @param {string | null | undefined} calendarId
     */
    const hideCalendar = (calendarId) => {
        if (typeof calendarId !== 'string') {
            return;
        }

        hiddenIds.value = new Set(hiddenIds.value).add(calendarId);
    };

    /**
     * @param {string | null | undefined} calendarId
     */
    const showCalendar = (calendarId) => {
        if (typeof calendarId !== 'string' || !hiddenIds.value.has(calendarId)) {
            return;
        }

        const nextHiddenIds = new Set(hiddenIds.value);
        nextHiddenIds.delete(calendarId);
        hiddenIds.value = nextHiddenIds;
    };

    /**
     * @param {string | null | undefined} calendarId
     */
    const toggleCalendarVisibility = (calendarId) => {
        if (isCalendarHidden(calendarId)) {
            showCalendar(calendarId);
            return;
        }

        hideCalendar(calendarId);
    };

    /**
     * Restores visibility for every calendar.
     */
    const showAllCalendars = () => {
        hiddenIds.value = new Set();
    };

    watch(calendars, (nextCalendars) => {
        const validIds = new Set(Object.keys(nextCalendars ?? {}));
        const nextHiddenIds = [...hiddenIds.value].filter((calendarId) => validIds.has(calendarId));

        if (nextHiddenIds.length === hiddenIds.value.size) {
            return;
        }

        hiddenIds.value = new Set(nextHiddenIds);
    });

    return {
        hiddenCalendarIds,
        hasHiddenCalendars,
        filteredEvents,
        isCalendarHidden,
        hideCalendar,
        showCalendar,
        toggleCalendarVisibility,
        showAllCalendars,
    };
};
