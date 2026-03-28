import { definePlugin } from '@vuecalendar/core';

/**
 * Calendar Controls Plugin
 *
 * Gives you imperative control over the calendar's date, view and range
 * without needing a Vue component ref.  Useful in stores, composables or
 * any code outside the component tree.
 *
 * @example
 * const controls = createCalendarControlsPlugin()
 *
 * <VueCalendar :plugins="[controls]" />
 *
 * // Then anywhere:
 * controls.setDate('2025-12-25')
 * controls.setView('month')
 * controls.getRange()  // { start: '2025-12-01', end: '2025-12-31' }
 */
export function createCalendarControlsPlugin() {
    let $cal = null;

    return definePlugin('calendarControls', {
        /** @internal */
        install($c) {
            $cal = $c;
        },

        /** @internal */
        destroy() {
            $cal = null;
        },

        /**
         * Navigate to a specific date.
         * @param {string} dateStr YYYY-MM-DD
         */
        setDate(dateStr) {
            $cal?.setDate(dateStr);
        },

        /**
         * Switch the active view.
         * @param {'day'|'week'|'month'} view
         */
        setView(view) {
            $cal?.setView(view);
        },

        /**
         * Get the currently visible date range.
         * @returns {{ start: string, end: string } | null}
         */
        getRange() {
            return $cal ? $cal.getRange() : null;
        },

        /**
         * Subscribe to a calendar event.
         * Available events: 'range-update', 'event-click', 'event-update', 'draw-event'
         * @param {string} event
         * @param {function} callback
         */
        on(event, callback) {
            $cal?.on(event, callback);
        },

        /**
         * Unsubscribe from a calendar event.
         * @param {string} event
         * @param {function} callback
         */
        off(event, callback) {
            $cal?.off(event, callback);
        },
    });
}


