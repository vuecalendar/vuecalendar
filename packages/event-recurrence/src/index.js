import { definePlugin } from '@vuecalendar/core';
import moment from 'moment';

//  Recurrence expander 

/**
 * Expand a recurring event template into concrete instances for the given date range.
 *
 * @param {object} template  Event object with a `recurrence` field
 * @param {string} rangeStart  YYYY-MM-DD
 * @param {string} rangeEnd    YYYY-MM-DD
 * @returns {object[]} Expanded event instances (no `recurrence` field, have `_recurrenceId`)
 */
function expandRecurrence(template, rangeStart, rangeEnd) {
    const { freq, interval = 1, until, count, byDay = [], excludeDates = [] } =
        template.recurrence ?? {};

    if (!freq) return [];

    const durationMin = moment(template.end, 'YYYY-MM-DD HH:mm')
        .diff(moment(template.start, 'YYYY-MM-DD HH:mm'), 'minutes');

    const baseStart   = moment(template.start, 'YYYY-MM-DD HH:mm');
    const windowStart = moment(rangeStart, 'YYYY-MM-DD').startOf('day');
    const windowEnd   = moment(rangeEnd,   'YYYY-MM-DD').endOf('day');
    const untilM      = until ? moment(until, 'YYYY-MM-DD').endOf('day') : null;
    const hardStop    = untilM ? moment.min(untilM, windowEnd) : windowEnd;

    const UNIT     = { DAILY: 'day', WEEKLY: 'week', MONTHLY: 'month', YEARLY: 'year' };
    const useByDay = freq === 'WEEKLY' && byDay.length > 0;
    const instances = [];

    let cursor     = baseStart.clone();
    let totalCount = 0;  // occurrences emitted anywhere (for count limit)
    let iters      = 0;

    // Fast-forward to near window when no count limit is involved
    if (!count && cursor.isBefore(windowStart)) {
        if (freq === 'DAILY') {
            const skip = Math.max(0, Math.floor(windowStart.diff(cursor, 'days') / interval) - 1) * interval;
            cursor.add(skip, 'days');
        } else if (freq === 'WEEKLY' && !useByDay) {
            const skip = Math.max(0, Math.floor(windowStart.diff(cursor, 'weeks') / interval) - 1) * interval;
            cursor.add(skip, 'weeks');
        } else if (freq === 'MONTHLY') {
            const skip = Math.max(0, Math.floor(windowStart.diff(cursor, 'months') / interval) - 1) * interval;
            cursor.add(skip, 'months');
        } else if (freq === 'YEARLY') {
            const skip = Math.max(0, Math.floor(windowStart.diff(cursor, 'years') / interval) - 1) * interval;
            cursor.add(skip, 'years');
        }
    }

    while (cursor.isSameOrBefore(hardStop) && iters < 500) {
        iters++;
        const dateStr = cursor.format('YYYY-MM-DD');

        // Determine whether this step is an occurrence
        let isOccurrence = true;
        if (useByDay) {
            const abbr      = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][cursor.day()];
            const weeksDiff = cursor.clone().startOf('isoWeek')
                .diff(baseStart.clone().startOf('isoWeek'), 'weeks');
            isOccurrence = byDay.includes(abbr) && weeksDiff >= 0 && weeksDiff % interval === 0;
        }

        if (isOccurrence && !excludeDates.includes(dateStr)) {
            totalCount++;
            if (count != null && totalCount > count) break;

            if (cursor.isSameOrAfter(windowStart)) {
                const s = cursor.clone();
                const { recurrence: _r, ...rest } = template;
                instances.push({
                    ...rest,
                    id:            `${template.id}_${dateStr}`,
                    start:         s.format('YYYY-MM-DD HH:mm'),
                    end:           s.clone().add(durationMin, 'minutes').format('YYYY-MM-DD HH:mm'),
                    _recurrenceId: template.id,
                });
            }
        }

        // Advance
        cursor.add(useByDay ? 1 : interval, useByDay ? 'day' : (UNIT[freq] ?? 'day'));
    }

    return instances;
}

//  Plugin 

/**
 * Event Recurrence Plugin
 *
 * Automatically expands recurring event templates into concrete calendar events
 * for the currently visible date range.
 *
 * Recurring events use a `recurrence` field:
 * ```js
 * {
 *   id: 'standup',
 *   title: 'Daily Standup',
 *   calendarId: 'office',
 *   start: '2025-06-02 09:00',
 *   end:   '2025-06-02 09:30',
 *   recurrence: {
 *     freq:         'WEEKLY',              // DAILY | WEEKLY | MONTHLY | YEARLY
 *     interval:     1,                     // every N units (default 1)
 *     byDay:        ['MO','TU','WE','TH','FR'], // WEEKLY only: which days
 *     until:        '2025-12-31',          // stop after this date
 *     count:        null,                  // OR max occurrences
 *     excludeDates: ['2025-06-09'],        // skip specific dates
 *   },
 * }
 * ```
 *
 * @example
 * const recurrence = createEventRecurrencePlugin()
 * <VueCalendar :plugins="[recurrence]" />
 *
 * recurrence.add({ id: 'standup', ..., recurrence: { freq: 'DAILY', until: '2025-12-31' } })
 * recurrence.remove('standup')
 * recurrence.getAll()
 */
export function createEventRecurrencePlugin() {
    let $cal = null;
    let currentRange = null;
    const templates = []; // recurring event definitions

    function refresh() {
        if (!$cal || !currentRange) return;
        const { start, end } = currentRange;

        // Expand all templates for current window
        const expanded = templates.flatMap((t) => expandRecurrence(t, start, end));

        // Keep non-recurrence events, replace recurrence instances
        const regular = $cal.getAllEvents().filter((e) => !e._recurrenceId);
        $cal.setEvents([...regular, ...expanded]);
    }

    return definePlugin('eventRecurrence', {
        /** @internal */
        install($c) {
            $cal = $c;
            $cal.on('range-update', (range) => {
                currentRange = range;
                refresh();
            });
            // Seed with the range that may have already fired before install
            currentRange = $cal.getRange();
            refresh();
        },

        /** @internal */
        destroy() {
            $cal = null;
            currentRange = null;
        },

        /**
         * Add a recurring event template.
         * @param {object} event  Must include a `recurrence` field.
         */
        add(event) {
            templates.push(event);
            refresh();
        },

        /**
         * Remove a recurring template by id.
         * @param {string|number} id
         */
        remove(id) {
            const idx = templates.findIndex((t) => t.id === id);
            if (idx !== -1) templates.splice(idx, 1);
            refresh();
        },

        /**
         * Replace all recurring templates at once.
         * @param {object[]} events
         */
        set(events) {
            templates.splice(0, templates.length, ...events);
            refresh();
        },

        /**
         * Return all recurring templates (not expanded instances).
         * @returns {object[]}
         */
        getAll() {
            return [...templates];
        },

        /**
         * Find a template by id.
         * @param {string|number} id
         * @returns {object|undefined}
         */
        getById(id) {
            return templates.find((t) => t.id === id);
        },
    });
}


