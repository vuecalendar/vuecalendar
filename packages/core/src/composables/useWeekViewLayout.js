import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import {
    buildColumnLayout,
    buildGridLineTicks,
    buildHourTicks,
    buildMultiDayEventLayout,
    buildTimedEventsByDay,
    clamp,
    normalizeGridStep,
    resolveBoundaryRange,
} from '../utils/weekViewMath.js';

const BASE_HOUR_HEIGHT = 64;

/**
 * Encapsulates boundary math, measured sizing, event bucketing, and overlap
 * layout for the week/day grid.
 *
 * @param {object} options
 * @param {import('vue').Ref<object>} options.dayBoundaries
 * @param {import('vue').Ref<number>} options.zoomLevel
 * @param {import('vue').Ref<number>} options.savedScrollTop
 * @param {import('vue').Ref<boolean>} options.fitFullDayHeight
 * @param {import('vue').Ref<number | null>} options.gridHeight
 * @param {import('vue').Ref<number>} options.workdayStart
 * @param {import('vue').Ref<object[]>} options.events
 * @param {import('vue').Ref<object[]>} options.days
 * @param {(scrollTop: number) => void} options.onSaveScrollTop
 * @returns {{
 *   gridContainer: import('vue').Ref<HTMLElement | null>,
 *   boundaryRange: import('vue').ComputedRef<{ start: number, end: number, duration: number, isFullDay: boolean }>,
 *   boundaryStartMin: import('vue').ComputedRef<number>,
 *   boundaryEndMin: import('vue').ComputedRef<number>,
 *   boundaryDurationMin: import('vue').ComputedRef<number>,
 *   isFullDayBoundary: import('vue').ComputedRef<boolean>,
 *   hourHeight: import('vue').ComputedRef<number>,
 *   totalHeight: import('vue').ComputedRef<number>,
 *   showsVerticalScroll: import('vue').ComputedRef<boolean>,
 *   multiDayEvents: import('vue').ComputedRef<Array<{
 *     event: object,
 *     row: number,
 *     startIndex: number,
 *     endIndex: number,
 *     startsBeforeRange: boolean,
 *     endsAfterRange: boolean
 *   }>>,
 *   multiDayRowCount: import('vue').ComputedRef<number>,
 *   hourTicks: import('vue').ComputedRef<Array<{ label: string, topPx: number }>>,
 *   gridLineTicks: import('vue').ComputedRef<Array<{ topPx: number, isHalf: boolean }>>,
 *   timedEventsByDay: import('vue').ComputedRef<Map<string, object[]>>,
 *   colLayout: import('vue').ComputedRef<Map<string | number, { col: number, total: number }>>,
 *   getEventsForDay: (day: { toString(): string }) => object[],
 *   minutesToPx: (minutes: number) => number,
 *   durationToPx: (minutes: number) => number,
 *   pxToMinutes: (pixels: number) => number,
 *   clampToGrid: (value: number, min: number, max: number) => number,
 *   resetScrollPosition: () => void
 * }}
 */
export const useWeekViewLayout = ({
    dayBoundaries,
    zoomLevel,
    savedScrollTop,
    fitFullDayHeight,
    gridHeight,
    workdayStart,
    gridStep,
    timeAxisFormatOptions,
    locale,
    events,
    days,
    onSaveScrollTop,
}) => {
    /**
     * Scroll container for the time grid.
     */
    const gridContainer = ref(null);

    /**
     * Measured inner height of the visible grid viewport.
     */
    const gridViewportHeight = ref(0);
    let gridResizeObserver = null;

    /**
     * Normalized visible boundary range, including wrapped hybrid ranges.
     */
    const boundaryRange = computed(() => resolveBoundaryRange(dayBoundaries.value));

    /**
     * Minute offset where the visible grid starts.
     */
    const boundaryStartMin = computed(() => boundaryRange.value.start);

    /**
     * Minute offset where the visible grid ends.
     */
    const boundaryEndMin = computed(() => boundaryRange.value.end);

    /**
     * Total visible duration expressed in minutes.
     */
    const boundaryDurationMin = computed(() => boundaryRange.value.duration);

    /**
     * `true` when the grid shows a classic full-day scrollable view.
     */
    const isFullDayBoundary = computed(() => boundaryRange.value.isFullDay);

    /**
     * Clamped zoom multiplier applied to the default full-day hour height.
     */
    const normalizedZoomLevel = computed(() => {
        const parsedZoom = Number(zoomLevel.value);

        if (!Number.isFinite(parsedZoom)) {
            return 1;
        }

        return clamp(parsedZoom, 0.5, 2.5);
    });

    const normalizedGridStep = computed(() => normalizeGridStep(gridStep.value));

    const explicitGridHeight = computed(() => {
        const parsedHeight = Number(gridHeight.value);
        return Number.isFinite(parsedHeight) && parsedHeight > 0 ? parsedHeight : null;
    });

    const resolvedTimeAxisFormatOptions = computed(() => {
        const baseOptions = {
            hour: 'numeric',
            ...(timeAxisFormatOptions.value ?? {}),
        };

        if ((normalizedGridStep.value === 15 || normalizedGridStep.value === 30) && !baseOptions.minute) {
            return {
                ...baseOptions,
                minute: '2-digit',
            };
        }

        return baseOptions;
    });

    /**
     * Enables viewport-fitted sizing for classic full-day boundaries when the
     * parent calendar opts into that behavior.
     */
    const shouldFitFullDayHeight = computed(() => {
        if (!fitFullDayHeight.value) {
            return false;
        }

        return boundaryStartMin.value === 0 && boundaryDurationMin.value >= 1439;
    });

    /**
     * Full-day views either use the classic fixed-height scroll behavior or a
     * viewport-fitted baseline that still responds to zoom. Bounded ranges
     * always scale to fill the available viewport.
     */
    const hourHeight = computed(() => {
        if (explicitGridHeight.value) {
            const durationHours = boundaryDurationMin.value / 60;

            if (durationHours <= 0) {
                return BASE_HOUR_HEIGHT;
            }

            return explicitGridHeight.value / durationHours;
        }

        if (isFullDayBoundary.value && !shouldFitFullDayHeight.value) {
            return BASE_HOUR_HEIGHT * normalizedZoomLevel.value;
        }

        const durationHours = boundaryDurationMin.value / 60;
        if (durationHours <= 0 || gridViewportHeight.value <= 0) {
            return BASE_HOUR_HEIGHT;
        }

        const fittedHourHeight = gridViewportHeight.value / durationHours;

        return shouldFitFullDayHeight.value
            ? fittedHourHeight * normalizedZoomLevel.value
            : fittedHourHeight;
    });

    /**
     * Total rendered height of the inner grid content.
     */
    const totalHeight = computed(() => {
        if (explicitGridHeight.value) {
            return explicitGridHeight.value;
        }

        return (boundaryDurationMin.value / 60) * hourHeight.value;
    });

    /**
     * `true` when the full-day view still needs vertical scrolling to expose
     * the entire 24-hour grid. When the full grid fits, the scroll container
     * can safely become static.
     */
    const showsVerticalScroll = computed(() => {
        if (!isFullDayBoundary.value) {
            return false;
        }

        return totalHeight.value > gridViewportHeight.value + 1;
    });

    /**
     * Hour labels shown on the left-hand time axis.
     */
    const hourTicks = computed(() => buildHourTicks({
        start: boundaryStartMin.value,
        end: boundaryEndMin.value,
        hourHeight: hourHeight.value,
        totalHeight: totalHeight.value,
        locale: locale.value,
        formatOptions: resolvedTimeAxisFormatOptions.value,
        step: normalizedGridStep.value,
    }));

    /**
     * Full-hour and half-hour line positions for the day columns.
     */
    const gridLineTicks = computed(() => buildGridLineTicks({
        start: boundaryStartMin.value,
        end: boundaryEndMin.value,
        hourHeight: hourHeight.value,
        step: normalizedGridStep.value,
    }));

    /**
     * Events grouped by start day for fast per-column lookup.
     */
    const timedEventsByDay = computed(() => buildTimedEventsByDay(events.value));

    /**
     * Spanning events rendered in the dedicated lane above the timed grid.
     */
    const multiDayEvents = computed(() => buildMultiDayEventLayout(days.value, events.value));

    /**
     * Number of visible rows required by the spanning-event lane.
     */
    const multiDayRowCount = computed(() => {
        if (multiDayEvents.value.length === 0) {
            return 0;
        }

        return Math.max(...multiDayEvents.value.map((item) => item.row)) + 1;
    });

    /**
     * Overlap layout metadata used to render colliding events side-by-side.
     */
    const colLayout = computed(() => buildColumnLayout(days.value, timedEventsByDay.value));

    /**
     * Converts an absolute minute-of-day into a pixel offset within the
     * currently visible boundary range.
     *
     * @param {number} minutes
     * @returns {number}
     */
    const minutesToPx = (minutes) => ((minutes - boundaryStartMin.value) / 60) * hourHeight.value;

    /**
     * Converts a duration in minutes into a rendered pixel height.
     *
     * @param {number} minutes
     * @returns {number}
     */
    const durationToPx = (minutes) => (minutes / 60) * hourHeight.value;

    /**
     * Converts a pixel offset inside the grid back into an absolute
     * minute-of-day value.
     *
     * @param {number} pixels
     * @returns {number}
     */
    const pxToMinutes = (pixels) => (pixels / hourHeight.value) * 60 + boundaryStartMin.value;

    /**
     * Small wrapper around the shared clamp helper so the component and
     * interaction composable do not depend on the utility module directly.
     *
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    const clampToGrid = (value, min, max) => clamp(value, min, max);

    /**
     * Returns the events that start on the given day.
     *
     * @param {{ toString(): string }} day
     * @returns {object[]}
     */
    const getTimedEventsForDay = (day) => timedEventsByDay.value.get(day.toString()) ?? [];

    /**
     * Measures the rendered height of the scrollable grid area. The bounded
     * layout uses this to derive a responsive hour height.
     */
    const syncGridViewportHeight = () => {
        gridViewportHeight.value = gridContainer.value?.clientHeight ?? 0;
    };

    /**
     * Restores the correct scroll position after boundary changes or mount.
     * Full-day mode restores the saved scroll position or scrolls near the
     * workday start. Bounded mode always resets to the top because the entire
     * range is visible.
     */
    const resetScrollPosition = () => {
        if (!gridContainer.value) {
            return;
        }

        gridContainer.value.scrollTop = !isFullDayBoundary.value
            ? 0
            : Math.max(0, minutesToPx(workdayStart.value * 60 - 15));
    };

    onMounted(() => {
        queueMicrotask(() => {
            syncGridViewportHeight();
            if (!gridContainer.value) {
                return;
            }

            gridContainer.value.scrollTop = !isFullDayBoundary.value
                ? 0
                : savedScrollTop.value >= 0
                    ? savedScrollTop.value
                    : Math.max(0, minutesToPx(workdayStart.value * 60 - 15));
        });

        if (typeof ResizeObserver !== 'undefined') {
            gridResizeObserver = new ResizeObserver(() => syncGridViewportHeight());
            if (gridContainer.value) {
                gridResizeObserver.observe(gridContainer.value);
            }
        }
    });

    onBeforeUnmount(() => {
        onSaveScrollTop(gridContainer.value?.scrollTop ?? -1);
        gridResizeObserver?.disconnect();
    });

    /**
     * Recalculate viewport-driven sizing whenever the visible boundaries
     * change, then restore the appropriate scroll position.
     */
    watch(dayBoundaries, () => {
        queueMicrotask(() => {
            syncGridViewportHeight();
            resetScrollPosition();
        });
    }, { deep: true });

    return {
        gridContainer,
        boundaryRange,
        boundaryStartMin,
        boundaryEndMin,
        boundaryDurationMin,
        isFullDayBoundary,
        hourHeight,
        totalHeight,
        showsVerticalScroll,
        multiDayEvents,
        multiDayRowCount,
        hourTicks,
        gridLineTicks,
        timedEventsByDay,
        colLayout,
        getEventsForDay: getTimedEventsForDay,
        minutesToPx,
        durationToPx,
        pxToMinutes,
        clampToGrid,
        resetScrollPosition,
    };
};
