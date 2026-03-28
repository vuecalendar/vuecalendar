import { definePlugin } from '@vuecalendar/core';

/**
 * Events Service Plugin
 *
 * Lets you add, update, remove and retrieve events without holding a
 * component ref.  The plugin keeps an internal reference to the calendar
 * after it mounts and exposes a clean imperative API.
 *
 * @example
 * const eventsService = createEventsServicePlugin()
 *
 * // Pass to the calendar
 * <VueCalendar :plugins="[eventsService]" />
 *
 * // Then anywhere in your code:
 * eventsService.add({ id: 1, title: 'Meeting', calendarId: 'office', start: '2025-06-01 09:00', end: '2025-06-01 10:00' })
 * eventsService.update({ id: 1, title: 'Updated', ... })
 * eventsService.remove(1)
 * eventsService.getAll()
 */
export function createEventsServicePlugin() {
    let $cal = null;

    return definePlugin('eventsService', {
        /** @internal - called by VueCalendar on mount */
        install($c) {
            $cal = $c;
        },

        /** @internal - called by VueCalendar on unmount */
        destroy() {
            $cal = null;
        },

        /**
         * Add a single event.
         * @param {{ id, title, calendarId, start, end, [description], [locked] }} event
         */
        add(event) {
            if (!$cal) return;
            $cal.setEvents([...$cal.getAllEvents(), event]);
        },

        /**
         * Replace a single event by id (matched by `event.id`).
         * @param {{ id, title, calendarId, start, end }} event
         */
        update(event) {
            if (!$cal) return;
            $cal.setEvents($cal.getAllEvents().map((e) => (e.id === event.id ? event : e)));
        },

        /**
         * Remove an event by id.
         * @param {string|number} id
         */
        remove(id) {
            if (!$cal) return;
            $cal.removeEvent(id);
        },

        /**
         * Replace all events at once.
         * @param {object[]} events
         */
        set(events) {
            if (!$cal) return;
            $cal.setEvents(events);
        },

        /**
         * Return all events currently loaded in the calendar.
         * @returns {object[]}
         */
        getAll() {
            return $cal ? $cal.getAllEvents() : [];
        },

        /**
         * Find a single event by id.
         * @param {string|number} id
         * @returns {object|undefined}
         */
        getById(id) {
            return this.getAll().find((e) => e.id === id);
        },
    });
}


