import { Temporal, normalizeToPlainDateTime } from '../utils/temporal.js';

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DEFAULT_DAY_BOUNDARIES = {
    start: '00:00',
    end: '24:00',
};
const ALLOWED_GRID_STEPS = [15, 30, 60, 120, 180];

/**
 * Restricts a number to the inclusive `[min, max]` range.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export function normalizeGridStep(step) {
    const parsedStep = Number(step);

    if (!Number.isFinite(parsedStep)) {
        return 60;
    }

    return ALLOWED_GRID_STEPS.includes(parsedStep) ? parsedStep : 60;
}

/**
 * Parses a `HH:mm` string into minutes since midnight.
 *
 * Invalid values fall back to `00:00`-like behavior instead of throwing so
 * the week view can degrade safely when it receives partial input.
 *
 * @param {string} [time='00:00']
 * @returns {number}
 */
export function parseClockTime(time = '00:00') {
    const [rawHours = '0', rawMinutes = '0'] = String(time).split(':');
    const hours = Number(rawHours);
    const minutes = Number(rawMinutes);

    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
        return 0;
    }

    return hours * MINUTES_PER_HOUR + minutes;
}

/**
 * Parses the time portion of a calendar datetime string into minutes since
 * midnight.
 *
 * Accepts strings in the internal `YYYY-MM-DD HH:mm` format and safely falls
 * back to `0` when the value is missing or malformed.
 *
 * @param {string | null | undefined} dateTime
 * @returns {number}
 */
export function parseEventMinutes(dateTime) {
    if (!dateTime || dateTime.length < 16) {
        return 0;
    }

    return parseClockTime(dateTime.slice(11, 16));
}

/**
 * Formats a minute-of-day value into `HH:mm`.
 *
 * @param {number} minutes
 * @returns {string}
 */
export function formatMinutes(minutes) {
    const normalizedMinutes = Math.max(0, Math.trunc(minutes));
    const hours = Math.floor(normalizedMinutes / MINUTES_PER_HOUR);
    const remainingMinutes = normalizedMinutes % MINUTES_PER_HOUR;

    return [
        String(hours).padStart(2, '0'),
        String(remainingMinutes).padStart(2, '0'),
    ].join(':');
}

/**
 * Snaps a minute value to the nearest grid interval.
 *
 * @param {number} minutes
 * @param {number} snapSize
 * @returns {number}
 */
export function snapMinutes(minutes, snapSize) {
    if (!snapSize || snapSize <= 0) {
        return minutes;
    }

    return Math.round(minutes / snapSize) * snapSize;
}

/**
 * Normalizes the configured visible day boundaries.
 *
 * Supports wrapped ranges such as `22:00 -> 02:00` by treating the end as the
 * following day.
 *
 * @param {{ start?: string, end?: string } | null | undefined} [dayBoundaries]
 * @returns {{ start: number, end: number, duration: number, isFullDay: boolean }}
 */
export function resolveBoundaryRange(dayBoundaries = DEFAULT_DAY_BOUNDARIES) {
    const start = parseClockTime(dayBoundaries?.start ?? DEFAULT_DAY_BOUNDARIES.start);
    const rawEnd = parseClockTime(dayBoundaries?.end ?? DEFAULT_DAY_BOUNDARIES.end);
    const end = rawEnd <= start ? rawEnd + MINUTES_PER_DAY : rawEnd;
    const duration = end - start;

    return {
        start,
        end,
        duration,
        isFullDay: start === 0 && duration === MINUTES_PER_DAY,
    };
}

/**
 * Builds the hour labels shown on the left time axis.
 *
 * The returned `topPx` values are clamped so the first and last labels stay
 * fully visible inside the measured grid.
 *
 * @param {object} options
 * @param {number} options.start
 * @param {number} options.end
 * @param {number} options.hourHeight
 * @param {number} options.totalHeight
 * @param {number} [options.labelOffset=6]
 * @param {number} [options.labelHeight=12]
 * @returns {Array<{ label: string, topPx: number }>}
 */
export function buildHourTicks({
    start,
    end,
    hourHeight,
    totalHeight,
    locale = 'en',
    formatOptions = { hour: 'numeric' },
    step = 60,
    labelOffset = 6,
    labelHeight = 12,
}) {
    const maxTop = Math.max(0, totalHeight - labelHeight);
    const ticks = [];
    const normalizedStep = normalizeGridStep(step);
    const firstTick = Math.ceil(start / normalizedStep) * normalizedStep;
    const formatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'UTC',
        ...formatOptions,
    });

    for (let minutes = firstTick; minutes <= end; minutes += normalizedStep) {
        const offsetMinutes = minutes - start;
        const top = clamp((offsetMinutes / MINUTES_PER_HOUR) * hourHeight - labelOffset, 0, maxTop);
        const displayMinutes = ((minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
        const date = new Date(Date.UTC(
            2000,
            0,
            1,
            Math.floor(displayMinutes / MINUTES_PER_HOUR),
            displayMinutes % MINUTES_PER_HOUR,
        ));

        ticks.push({
            label: formatter.format(date),
            topPx: top,
        });
    }

    return ticks;
}

/**
 * Builds full-hour and half-hour grid line positions for the visible range.
 *
 * @param {object} options
 * @param {number} options.start
 * @param {number} options.end
 * @param {number} options.hourHeight
 * @param {number} [options.step=30]
 * @returns {Array<{ topPx: number, isHalf: boolean }>}
 */
export function buildGridLineTicks({
    start,
    end,
    hourHeight,
    step = 30,
}) {
    const ticks = [];
    const normalizedStep = normalizeGridStep(step);
    const firstTick = Math.ceil(start / normalizedStep) * normalizedStep;

    for (let minutes = firstTick; minutes <= end; minutes += normalizedStep) {
        ticks.push({
            topPx: ((minutes - start) / MINUTES_PER_HOUR) * hourHeight,
            isHalf: minutes % MINUTES_PER_HOUR !== 0,
        });
    }

    return ticks;
}

/**
 * Groups events by their start day so day-column rendering can do cheap lookups.
 *
 * @param {Array<{ start?: string }>} events
 * @returns {Map<string, object[]>}
 */
export function buildEventsByDay(events) {
    const eventsByDay = new Map();

    for (const event of events) {
        const dayKey = event.start?.slice(0, 10);

        if (!dayKey) {
            continue;
        }

        if (!eventsByDay.has(dayKey)) {
            eventsByDay.set(dayKey, []);
        }

        eventsByDay.get(dayKey).push(event);
    }

    return eventsByDay;
}

/**
 * Returns `true` when an event crosses a calendar-day boundary and should be
 * rendered in the spanning event lane instead of the timed grid.
 *
 * This decision is intentionally isolated here so the week view can switch to
 * a different rule later without changing the component structure.
 *
 * @param {{ start?: string, end?: string }} event
 * @returns {boolean}
 */
export function isMultiDayEvent(event) {
    const startDateTime = normalizeToPlainDateTime(event?.start);
    const endDateTime = normalizeToPlainDateTime(event?.end);

    if (!startDateTime || !endDateTime) {
        return false;
    }

    return Temporal.PlainDate.compare(
        startDateTime.toPlainDate(),
        endDateTime.toPlainDate(),
    ) !== 0;
}

/**
 * Buckets only timed single-day events by their start day so the normal grid
 * does not attempt to render spanning events.
 *
 * @param {Array<{ start?: string, end?: string }>} events
 * @returns {Map<string, object[]>}
 */
export function buildTimedEventsByDay(events) {
    return buildEventsByDay(events.filter((event) => !isMultiDayEvent(event)));
}

/**
 * Stable lookup key for one day/resource column in the resource time grid.
 *
 * @param {string} dayKey
 * @param {string | number} resourceId
 * @returns {string}
 */
export function buildResourceColumnKey(dayKey, resourceId) {
    return `${dayKey}::${String(resourceId)}`;
}

/**
 * Groups timed single-day events by both start day and resource so the
 * resource time-grid view can render one stack per resource column.
 *
 * Events without a matching `resourceId` are ignored in this view.
 *
 * @param {Array<{ start?: string, end?: string, resourceId?: string | number }>} events
 * @param {Array<{ id?: string | number }>} resources
 * @returns {Map<string, object[]>}
 */
export function buildTimedEventsByDayResource(events, resources) {
    const eventsByColumn = new Map();
    const validResourceIds = new Set(
        (resources ?? [])
            .map((resource) => resource?.id)
            .filter((resourceId) => resourceId !== null && resourceId !== undefined)
            .map((resourceId) => String(resourceId)),
    );

    if (validResourceIds.size === 0) {
        return eventsByColumn;
    }

    for (const event of events) {
        if (isMultiDayEvent(event)) {
            continue;
        }

        const dayKey = event.start?.slice(0, 10);
        const resourceId = event.resourceId;

        if (!dayKey || resourceId === null || resourceId === undefined) {
            continue;
        }

        const normalizedResourceId = String(resourceId);
        if (!validResourceIds.has(normalizedResourceId)) {
            continue;
        }

        const columnKey = buildResourceColumnKey(dayKey, normalizedResourceId);

        if (!eventsByColumn.has(columnKey)) {
            eventsByColumn.set(columnKey, []);
        }

        eventsByColumn.get(columnKey).push(event);
    }

    return eventsByColumn;
}

/**
 * Lays out multi-day events into stacked rows for the spanning event lane that
 * sits above the timed grid.
 *
 * Events ending exactly at midnight release the following day so a range like
 * `Mon 10:00 -> Tue 00:00` only occupies Monday in the multi-day lane.
 *
 * @param {Array<{ toString(): string }>} days
 * @param {Array<object>} events
 * @returns {Array<{
 *   event: object,
 *   row: number,
 *   startIndex: number,
 *   endIndex: number,
 *   startsBeforeRange: boolean,
 *   endsAfterRange: boolean
 * }>}
 */
export function buildMultiDayEventLayout(days, events) {
    const dayKeys = days.map((day) => day.toString());

    if (dayKeys.length === 0) {
        return [];
    }

    const rangeStart = Temporal.PlainDate.from(dayKeys[0]);
    const rangeEnd = Temporal.PlainDate.from(dayKeys[dayKeys.length - 1]);

    const visibleSegments = events
        .filter((event) => isMultiDayEvent(event))
        .map((event) => {
            const startDateTime = normalizeToPlainDateTime(event.start);
            const endDateTime = normalizeToPlainDateTime(event.end);

            if (!startDateTime || !endDateTime) {
                return null;
            }

            const eventStartDate = startDateTime.toPlainDate();
            let eventEndDate = endDateTime.toPlainDate();

            if (endDateTime.hour === 0 && endDateTime.minute === 0 && Temporal.PlainDate.compare(eventEndDate, eventStartDate) > 0) {
                eventEndDate = eventEndDate.subtract({ days: 1 });
            }

            if (
                Temporal.PlainDate.compare(eventEndDate, rangeStart) < 0
                || Temporal.PlainDate.compare(eventStartDate, rangeEnd) > 0
            ) {
                return null;
            }

            const visibleStartDate = Temporal.PlainDate.compare(eventStartDate, rangeStart) < 0
                ? rangeStart
                : eventStartDate;
            const visibleEndDate = Temporal.PlainDate.compare(eventEndDate, rangeEnd) > 0
                ? rangeEnd
                : eventEndDate;
            const startIndex = dayKeys.indexOf(visibleStartDate.toString());
            const endIndex = dayKeys.indexOf(visibleEndDate.toString());

            if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
                return null;
            }

            return {
                event,
                startIndex,
                endIndex,
                startsBeforeRange: Temporal.PlainDate.compare(eventStartDate, rangeStart) < 0,
                endsAfterRange: Temporal.PlainDate.compare(eventEndDate, rangeEnd) > 0,
                sortStart: eventStartDate.toString(),
                sortEnd: eventEndDate.toString(),
            };
        })
        .filter(Boolean)
        .sort((left, right) => {
            if (left.startIndex !== right.startIndex) {
                return left.startIndex - right.startIndex;
            }

            const leftSpan = left.endIndex - left.startIndex;
            const rightSpan = right.endIndex - right.startIndex;

            if (leftSpan !== rightSpan) {
                return rightSpan - leftSpan;
            }

            return left.sortStart.localeCompare(right.sortStart) || left.sortEnd.localeCompare(right.sortEnd);
        });

    const rowEndIndexes = [];

    return visibleSegments.map((segment) => {
        let row = rowEndIndexes.findIndex((lastEndIndex) => lastEndIndex < segment.startIndex);

        if (row === -1) {
            row = rowEndIndexes.length;
        }

        rowEndIndexes[row] = segment.endIndex;

        return {
            event: segment.event,
            row,
            startIndex: segment.startIndex,
            endIndex: segment.endIndex,
            startsBeforeRange: segment.startsBeforeRange,
            endsAfterRange: segment.endsAfterRange,
        };
    });
}

/**
 * Creates overlap-column metadata for each event in the visible days.
 *
 * Each overlapping cluster is laid out independently so colliding events can
 * render side-by-side without affecting non-overlapping groups.
 *
 * @param {Array<{ toString(): string }>} days
 * @param {Map<string, object[]>} eventsByDay
 * @returns {Map<string | number, { col: number, total: number }>}
 */
export function buildColumnLayout(days, eventsByDay) {
    const layout = new Map();

    for (const day of days) {
        const dayEvents = eventsByDay.get(day.toString()) ?? [];

        if (dayEvents.length === 0) {
            continue;
        }

        const sortedEvents = [...dayEvents].sort((left, right) => (
            parseEventMinutes(left.start) - parseEventMinutes(right.start)
        ));

        const clusters = [];
        let currentCluster = [];
        let currentClusterEnd = 0;

        for (const event of sortedEvents) {
            const start = parseEventMinutes(event.start);
            const end = parseEventMinutes(event.end);

            if (currentCluster.length === 0 || start < currentClusterEnd) {
                currentCluster.push(event);
                currentClusterEnd = Math.max(currentClusterEnd, end);
                continue;
            }

            clusters.push(currentCluster);
            currentCluster = [event];
            currentClusterEnd = end;
        }

        if (currentCluster.length > 0) {
            clusters.push(currentCluster);
        }

        for (const cluster of clusters) {
            assignClusterColumns(cluster, layout);
        }
    }

    return layout;
}

/**
 * Creates overlap-column metadata for each event inside each day/resource
 * column of the resource time-grid view.
 *
 * @param {Array<{ toString(): string }>} days
 * @param {Array<{ id?: string | number }>} resources
 * @param {Map<string, object[]>} eventsByColumn
 * @returns {Map<string | number, { col: number, total: number }>}
 */
export function buildResourceColumnLayout(days, resources, eventsByColumn) {
    const layout = new Map();

    for (const day of days) {
        const dayKey = day.toString();

        for (const resource of resources ?? []) {
            if (resource?.id === null || resource?.id === undefined) {
                continue;
            }

            const columnKey = buildResourceColumnKey(dayKey, resource.id);
            const columnEvents = eventsByColumn.get(columnKey) ?? [];

            if (columnEvents.length === 0) {
                continue;
            }

            const sortedEvents = [...columnEvents].sort((left, right) => (
                parseEventMinutes(left.start) - parseEventMinutes(right.start)
            ));

            const clusters = [];
            let currentCluster = [];
            let currentClusterEnd = 0;

            for (const event of sortedEvents) {
                const start = parseEventMinutes(event.start);
                const end = parseEventMinutes(event.end);

                if (currentCluster.length === 0 || start < currentClusterEnd) {
                    currentCluster.push(event);
                    currentClusterEnd = Math.max(currentClusterEnd, end);
                    continue;
                }

                clusters.push(currentCluster);
                currentCluster = [event];
                currentClusterEnd = end;
            }

            if (currentCluster.length > 0) {
                clusters.push(currentCluster);
            }

            for (const cluster of clusters) {
                assignClusterColumns(cluster, layout);
            }
        }
    }

    return layout;
}

/**
 * Assigns side-by-side column positions for one overlap cluster.
 *
 * @param {object[]} cluster
 * @param {Map<string | number, { col: number, total: number }>} layout
 */
function assignClusterColumns(cluster, layout) {
    const columnEnds = [];
    const eventColumns = new Map();

    for (const event of cluster) {
        const start = parseEventMinutes(event.start);
        const end = parseEventMinutes(event.end);
        let columnIndex = columnEnds.findIndex((columnEnd) => columnEnd <= start);

        if (columnIndex === -1) {
            columnIndex = columnEnds.length;
        }

        columnEnds[columnIndex] = end;
        eventColumns.set(event.id, columnIndex);
    }

    const totalColumns = columnEnds.length;

    for (const event of cluster) {
        layout.set(event.id, {
            col: eventColumns.get(event.id),
            total: totalColumns,
        });
    }
}

/**
 * Checks whether a proposed event range overlaps an existing event on the same day.
 *
 * @param {object} options
 * @param {Array<{ id: string | number, start?: string, end?: string }>} options.events
 * @param {string} options.dayKey
 * @param {number} options.start
 * @param {number} options.end
 * @param {string | number | null} [options.skipId=null]
 * @returns {boolean}
 */
export function hasEventOverlap({
    events,
    dayKey,
    start,
    end,
    skipId = null,
}) {
    return events.some((event) => {
        if (skipId !== null && event.id === skipId) {
            return false;
        }

        if (!event.start?.startsWith(dayKey)) {
            return false;
        }

        const eventStart = parseEventMinutes(event.start);
        const eventEnd = parseEventMinutes(event.end);

        return start < eventEnd && end > eventStart;
    });
}

export { ALLOWED_GRID_STEPS, MINUTES_PER_DAY, MINUTES_PER_HOUR };
