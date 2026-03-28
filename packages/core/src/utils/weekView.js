/**
 * Compatibility re-exports for week-view math helpers.
 *
 * The pure calculation helpers live in `weekViewMath.js`. This file remains so
 * existing imports keep working while composables migrate to the clearer path.
 */
export {
    MINUTES_PER_DAY,
    MINUTES_PER_HOUR,
    clamp,
    parseClockTime,
    parseEventMinutes,
    formatMinutes,
    snapMinutes,
    normalizeGridStep,
    resolveBoundaryRange,
    buildHourTicks,
    buildGridLineTicks,
    buildEventsByDay,
    buildColumnLayout,
    hasEventOverlap,
} from './weekViewMath.js';
