import { computed } from 'vue';
import { parseEventMinutes } from '../utils/weekViewMath.js';

const MIN_EVENT_HEIGHT = 20;
const OVERLAP_STACK_OFFSET = 18;

/**
 * Resolves the rendered width for stacked overlapping events. The goal is to
 * keep cards readable and visually stepped, rather than shrinking every event
 * into equal narrow columns.
 *
 * @param {number} totalCols
 * @returns {number}
 */
function getOverlapStackWidth(totalCols) {
    if (totalCols <= 1) {
        return 100;
    }

    return Math.max(42, 78 - ((totalCols - 2) * 10));
}

/**
 * Encapsulates event-card positioning, sizing, and display helpers so the
 * event component stays focused on rendering.
 *
 * @param {object} options
 * @param {import('vue').Ref<object>} options.event
 * @param {import('vue').Ref<object>} options.calendar
 * @param {import('vue').Ref<number>} options.hourHeight
 * @param {import('vue').Ref<number>} options.col
 * @param {import('vue').Ref<number>} options.totalCols
 * @param {import('vue').Ref<number>} options.offsetMinutes
 * @returns {{
 *   colors: import('vue').ComputedRef<{ main: string, container: string, onContainer: string }>,
 *   startMinutes: import('vue').ComputedRef<number>,
 *   endMinutes: import('vue').ComputedRef<number>,
 *   eventHeight: import('vue').ComputedRef<number>,
 *   visibleContentOffset: import('vue').ComputedRef<number>,
 *   eventStyle: import('vue').ComputedRef<Record<string, string | number>>,
 *   formatTime: (dateTime: string | null | undefined) => string
 * }}
 */
export const useCalendarEvent = ({
    event,
    calendar,
    hourHeight,
    eventWidth,
    col,
    totalCols,
    offsetMinutes,
}) => {
    /**
     * Final fallback colors used when the event calendar definition is missing.
     */
    const colors = computed(() => (
        calendar.value?.lightColors ?? {
            main: '#9ca3af',
            container: '#f3f4f6',
            onContainer: '#374151',
        }
    ));

    /**
     * Event start time in minutes since midnight.
     */
    const startMinutes = computed(() => parseEventMinutes(event.value.start));

    /**
     * Event end time in minutes since midnight.
     */
    const endMinutes = computed(() => parseEventMinutes(event.value.end));

    /**
     * Rendered card height in pixels. Very short events still receive a minimum
     * visible height so they remain draggable.
     */
    const eventHeight = computed(() => (
        Math.max(((endMinutes.value - startMinutes.value) / 60) * hourHeight.value, MIN_EVENT_HEIGHT)
    ));

    /**
     * Pushes the visible event content down when the real event starts above
     * the current visible boundary. This keeps the title readable in clipped
     * views such as `12:00-18:00`.
     */
    const visibleContentOffset = computed(() => (
        Math.min(
            Math.max(0, ((offsetMinutes.value - startMinutes.value) / 60) * hourHeight.value),
            Math.max(eventHeight.value - MIN_EVENT_HEIGHT, 0),
        )
    ));

    /**
     * Final inline style for the event card, including overlap-column
     * positioning and clipped-boundary content offset.
     */
    const eventStyle = computed(() => {
        const hasOverlap = totalCols.value > 1;
        const overlapOffset = hasOverlap ? OVERLAP_STACK_OFFSET : 0;
        const widthScale = Math.max(1, Math.min(Number(eventWidth.value) || 100, 100)) / 100;
        const columnWidth = (hasOverlap ? getOverlapStackWidth(totalCols.value) : 100) * widthScale;
        const leftOffset = hasOverlap ? col.value * overlapOffset : 0;

        return {
            top: `${((startMinutes.value - offsetMinutes.value) / 60) * hourHeight.value}px`,
            height: `${eventHeight.value}px`,
            paddingTop: `${visibleContentOffset.value}px`,
            left: `calc(${leftOffset}% + 2px)`,
            width: `calc(${columnWidth}% - 4px)`,
            right: 'auto',
            background: colors.value.container,
            borderLeft: `4px solid ${colors.value.main}`,
            color: colors.value.onContainer,
            zIndex: col.value + 1,
        };
    });

    /**
     * Formats an event date-time string into `HH:mm`.
     *
     * @param {string | null | undefined} dateTime
     * @returns {string}
     */
    const formatTime = (dateTime) => dateTime ? dateTime.slice(11, 16) : '';

    return {
        colors,
        startMinutes,
        endMinutes,
        eventHeight,
        visibleContentOffset,
        eventStyle,
        formatTime,
    };
};
