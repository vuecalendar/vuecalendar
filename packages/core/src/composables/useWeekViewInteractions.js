import { computed, reactive } from 'vue';
import { Temporal, addMinutesToDate } from '../utils/temporal.js';
import { resolveCalendarColors } from '../utils/calendarColors.js';
import { formatMinutes, hasEventOverlap, normalizeGridStep, parseEventMinutes, snapMinutes } from '../utils/weekViewMath.js';
const DROP_DURATION_MINUTES = 60;
const BLOCKED_COLORS = { container: '#fee2e2', main: '#ef4444', onContainer: '#991b1b' };
const DRAG_START_THRESHOLD_PX = 6;
const RESIZE_START_THRESHOLD_PX = 6;
const POST_INTERACTION_CLICK_SUPPRESS_MS = 250;

/**
 * Handles draw, drag, resize, and sidebar-preview behavior for the week/day
 * grid while keeping the component template focused on rendering.
 *
 * @param {object} options
 * @param {import('vue').Ref<object[]>} options.days
 * @param {import('vue').Ref<object[]>} options.events
 * @param {import('vue').Ref<object>} options.calendars
 * @param {import('vue').Ref<string | null>} options.selectedCalendarId
 * @param {import('vue').Ref<object>} options.sidebarDrag
 * @param {import('vue').Ref<boolean>} options.drawingEnabled
 * @param {import('vue').Ref<boolean>} options.resizingEnabled
 * @param {import('vue').Ref<boolean>} options.allowOverlap
 * @param {import('vue').Ref<number>} options.drawGridStep
 * @param {import('vue').Ref<number>} options.interactionGridStep
 * @param {import('vue').Ref<Function | null>} options.beforeEventUpdate
 * @param {import('vue').Ref<number>} options.boundaryStartMin
 * @param {import('vue').Ref<number>} options.boundaryEndMin
 * @param {import('vue').Ref<HTMLElement | null>} options.gridContainer
 * @param {number} options.timeAxisWidth
 * @param {(pixels: number) => number} options.pxToMinutes
 * @param {(minutes: number) => number} options.minutesToPx
 * @param {(minutes: number) => number} options.durationToPx
 * @param {(value: number, min: number, max: number) => number} options.clampToGrid
 * @param {(eventName: string, payload: unknown) => void} options.emit
 * @returns {{
 *   draw: object,
 *   drag: object,
 *   resize: object,
 *   sidebarPreview: object,
 *   drawIsBlocked: import('vue').ComputedRef<boolean>,
 *   dragIsBlocked: import('vue').ComputedRef<boolean>,
 *   resizeIsBlocked: import('vue').ComputedRef<boolean>,
 *   ghostDrawStyle: import('vue').ComputedRef<Record<string, string | number>>,
 *   ghostDragStyle: import('vue').ComputedRef<Record<string, string | number>>,
 *   dragOriginStyle: import('vue').ComputedRef<Record<string, string>>,
 *   ghostResizeStyle: import('vue').ComputedRef<Record<string, string | number>>,
 *   ghostSidebarStyle: import('vue').ComputedRef<Record<string, string | number>>,
 *   getDayIndex: (clientX: number) => number,
 *   getGridY: (clientY: number) => number,
 *   isEventDimmed: (eventId: string | number) => boolean,
 *   onDayMouseDown: (event: MouseEvent, day: { toString(): string }, dayIndex: number) => void,
 *   onEventDragStart: (event: MouseEvent, calendarEvent: object, day: { toString(): string }) => void,
 *   onEventResizeStart: (event: MouseEvent, calendarEvent: object, day: { toString(): string }) => void,
 *   onMouseMove: (event: MouseEvent) => void,
 *   onMouseUp: () => void,
 *   onMouseLeave: () => void,
 *   onSidebarDrop: (event: MouseEvent, calendarId: string | null) => void
 * }}
 */
export const useWeekViewInteractions = ({
    days,
    events,
    calendars,
    selectedCalendarId,
    sidebarDrag,
    drawingEnabled,
    resizingEnabled,
    allowOverlap,
    drawGridStep,
    interactionGridStep,
    beforeEventUpdate,
    boundaryStartMin,
    boundaryEndMin,
    gridContainer,
    timeAxisWidth,
    pxToMinutes,
    minutesToPx,
    durationToPx,
    clampToGrid,
    emit,
}) => {
    /**
     * State for click-and-drag event creation.
     */
    const draw = reactive({ active: false, dayStr: null, startMin: 0, endMin: 0 });

    /**
     * State for dragging an existing event.
     */
    const drag = reactive({
        active: false,
        engaged: false,
        event: null,
        offsetMin: 0,
        durationMin: 0,
        originalDayIndex: 0,
        originalStartMin: 0,
        currentDayIndex: 0,
        currentStartMin: 0,
        startClientX: 0,
        startClientY: 0,
        startPointerMin: 0,
    });

    /**
     * State for resizing an existing event.
     */
    const resize = reactive({
        active: false,
        engaged: false,
        event: null,
        dayStr: null,
        startMin: 0,
        endMin: 0,
        originalEndMin: 0,
        startClientY: 0,
        startPointerMin: 0,
    });

    /**
     * Temporary sidebar-drop preview shown while dragging a calendar into the
     * grid.
     */
    const sidebarPreview = reactive({
        visible: false,
        dayIndex: 0,
        startMin: 0,
        blocked: false,
        label: '',
        timeRange: '',
    });

    const clickSuppression = reactive({
        eventId: null,
        until: 0,
    });

    /**
     * Resolves the display colors for a calendar ID.
     *
     * @param {string | null} calendarId
     * @returns {{ container: string, main: string, onContainer: string }}
     */
    const getCalendarColors = (calendarId) => resolveCalendarColors(calendarId, calendars.value);

    /**
     * Normalizes ghost styling for draw, drag, resize, and sidebar previews so
     * all temporary overlays stay visually consistent.
     *
     * @param {object} options
     * @param {number} options.startMin
     * @param {number} options.durationMin
     * @param {{ container: string, main: string, onContainer: string }} options.colors
     * @param {number} [options.minHeight]
     * @param {number} [options.opacity]
     * @param {number} [options.zIndex]
     * @param {string} [options.transition]
     * @returns {Record<string, string | number>}
     */
    const buildGhostStyle = ({ startMin, durationMin, colors, minHeight = 20, opacity = 0.82, zIndex = 5, transition }) => ({
        top: `${minutesToPx(startMin)}px`,
        height: `${Math.max(durationToPx(durationMin), minHeight)}px`,
        background: colors.container,
        borderLeft: `4px solid ${colors.main}`,
        color: colors.onContainer,
        opacity,
        zIndex,
        ...(transition ? { transition } : {}),
    });

    /**
     * Returns the y-position inside the scrollable grid, including current
     * scroll offset, so pointer math stays correct while scrolling.
     *
     * @param {number} clientY
     * @returns {number}
     */
    const getGridY = (clientY) => {
        if (!gridContainer.value) {
            return 0;
        }

        const rect = gridContainer.value.getBoundingClientRect();
        return clientY - rect.top + gridContainer.value.scrollTop;
    };

    /**
     * Resolves which day column the pointer is currently over.
     *
     * @param {number} clientX
     * @returns {number}
     */
    const getDayIndex = (clientX) => {
        if (!gridContainer.value) {
            return 0;
        }

        const rect = gridContainer.value.getBoundingClientRect();
        const x = clientX - rect.left - timeAxisWidth;
        const columnWidth = (rect.width - timeAxisWidth) / days.value.length;
        return clampToGrid(Math.floor(x / columnWidth), 0, days.value.length - 1);
    };

    /**
     * Central overlap guard used by drawing, dragging, resizing, and sidebar
     * drops. It short-circuits when overlaps are explicitly allowed.
     *
     * @param {string} dayKey
     * @param {number} start
     * @param {number} end
     * @param {string | number | null} [skipId]
     * @returns {boolean}
     */
    const overlapsExistingEvent = (dayKey, start, end, skipId = null) => {
        if (allowOverlap.value) {
            return false;
        }

        return hasEventOverlap({ events: events.value, dayKey, start, end, skipId });
    };

    const drawIsBlocked = computed(() => {
        if (!draw.active || !draw.dayStr) {
            return false;
        }

        const start = Math.min(draw.startMin, draw.endMin);
        const end = Math.max(draw.startMin, draw.endMin);
        return overlapsExistingEvent(draw.dayStr, start, end);
    });

    /**
     * Whether the current drag target collides with an existing event.
     */
    const dragIsBlocked = computed(() => {
        if (!drag.active || !drag.event) {
            return false;
        }

        const targetDay = days.value[drag.currentDayIndex];
        if (!targetDay) {
            return false;
        }

        return overlapsExistingEvent(
            targetDay.toString(),
            drag.currentStartMin,
            drag.currentStartMin + drag.durationMin,
            drag.event.id,
        );
    });

    /**
     * Whether the current resize target collides with an existing event.
     */
    const resizeIsBlocked = computed(() => {
        if (!resize.active || !resize.event || !resize.dayStr) {
            return false;
        }

        return overlapsExistingEvent(resize.dayStr, resize.startMin, resize.endMin, resize.event.id);
    });

    /**
     * Ghost style for event creation.
     */
    const ghostDrawStyle = computed(() => {
        if (!draw.active) {
            return {};
        }

        const start = Math.min(draw.startMin, draw.endMin);
        const end = Math.max(draw.startMin, draw.endMin);
        const colors = drawIsBlocked.value ? BLOCKED_COLORS : getCalendarColors(selectedCalendarId.value);

        return buildGhostStyle({
            startMin: start,
            durationMin: end - start,
            colors,
            minHeight: 16,
            transition: 'height 0.05s ease, background 0.15s ease, border-color 0.15s ease',
        });
    });

    /**
     * Ghost style for dragging an event.
     */
    const ghostDragStyle = computed(() => {
        if (!drag.active || !drag.event) {
            return {};
        }

        const colors = dragIsBlocked.value ? BLOCKED_COLORS : getCalendarColors(drag.event.calendarId);
        return buildGhostStyle({
            startMin: drag.currentStartMin,
            durationMin: drag.durationMin,
            colors,
            transition: 'background 0.15s ease, border-color 0.15s ease',
        });
    });

    /**
     * Placeholder style that marks the original position of a dragged event.
     */
    const dragOriginStyle = computed(() => {
        if (!drag.active || !drag.event) {
            return {};
        }

        return {
            top: `${minutesToPx(drag.originalStartMin)}px`,
            height: `${Math.max(durationToPx(drag.durationMin), 20)}px`,
        };
    });

    /**
     * Ghost style for resizing an event.
     */
    const ghostResizeStyle = computed(() => {
        if (!resize.active || !resize.event) {
            return {};
        }

        const colors = resizeIsBlocked.value ? BLOCKED_COLORS : getCalendarColors(resize.event.calendarId);
        return buildGhostStyle({
            startMin: resize.startMin,
            durationMin: resize.endMin - resize.startMin,
            colors,
            opacity: 0.7,
        });
    });

    /**
     * Ghost style for sidebar-drop preview.
     */
    const ghostSidebarStyle = computed(() => {
        if (!sidebarPreview.visible) {
            return {};
        }

        const colors = sidebarPreview.blocked
            ? BLOCKED_COLORS
            : getCalendarColors(sidebarDrag.value.calendarId);

        return buildGhostStyle({
            startMin: sidebarPreview.startMin,
            durationMin: DROP_DURATION_MINUTES,
            colors,
            opacity: 0.85,
            zIndex: 6,
            transition: 'top 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.15s ease, border-color 0.15s ease',
        });
    });

    /**
     * Fades the original event while drag or resize ghosting is active.
     *
     * @param {string | number} eventId
     * @returns {boolean}
     */
    const isEventDimmed = (eventId) => (
        (drag.active && drag.event?.id === eventId) ||
        (resize.active && resize.event?.id === eventId)
    );

    const drawSnapStepMinutes = computed(() => normalizeGridStep(drawGridStep.value));
    const interactionSnapStepMinutes = computed(() => normalizeGridStep(interactionGridStep.value));

    const suppressNextClick = (eventId) => {
        clickSuppression.eventId = eventId;
        clickSuppression.until = Date.now() + POST_INTERACTION_CLICK_SUPPRESS_MS;
    };

    const shouldEmitEventClick = (eventId) => {
        if (
            clickSuppression.eventId === eventId
            && Date.now() <= clickSuppression.until
        ) {
            clickSuppression.eventId = null;
            clickSuppression.until = 0;
            return false;
        }

        return true;
    };

    /**
     * Rounds a minute value to the week-view snap interval.
     *
     * @param {number} minutes
     * @returns {number}
     */
    const snapToDrawGrid = (minutes) => snapMinutes(minutes, drawSnapStepMinutes.value);
    const snapToInteractionGrid = (minutes) => snapMinutes(minutes, interactionSnapStepMinutes.value);

    /**
     * Updates the temporary drop preview while dragging a sidebar calendar over
     * the grid. The preview disappears as soon as the pointer leaves the grid.
     *
     * @param {MouseEvent} event
     */
    const updateSidebarPreview = (event) => {
        if (!sidebarDrag.value.active || !gridContainer.value) {
            sidebarPreview.visible = false;
            return;
        }

        const rect = gridContainer.value.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            sidebarPreview.visible = false;
            return;
        }

        const dayIndex = getDayIndex(event.clientX);
        const startMin = clampToGrid(
            snapToDrawGrid(pxToMinutes(getGridY(event.clientY))),
            boundaryStartMin.value,
            boundaryEndMin.value - DROP_DURATION_MINUTES,
        );
        const endMin = startMin + DROP_DURATION_MINUTES;
        const dayKey = days.value[dayIndex]?.toString() ?? '';

        Object.assign(sidebarPreview, {
            visible: true,
            dayIndex,
            startMin,
            blocked: overlapsExistingEvent(dayKey, startMin, endMin),
            label: calendars.value[sidebarDrag.value.calendarId]?.label ?? '',
            timeRange: `${formatMinutes(startMin)} - ${formatMinutes(endMin)}`,
        });
    };

    /**
     * Finalizes a draw gesture. Short taps become `slot-click`; larger
     * selections emit `draw-event`.
     */
    const commitDraw = () => {
        const start = Math.min(draw.startMin, draw.endMin);
        const end = Math.max(draw.startMin, draw.endMin);

        if (end - start >= drawSnapStepMinutes.value && draw.dayStr && !drawIsBlocked.value) {
            const base = Temporal.PlainDate.from(draw.dayStr);
            emit('draw-event', {
                calendarId: selectedCalendarId.value,
                start: addMinutesToDate(base, start),
                end: addMinutesToDate(base, end),
            });
        } else if (end - start < drawSnapStepMinutes.value && draw.dayStr) {
            const base = Temporal.PlainDate.from(draw.dayStr);
            emit('slot-click', { date: draw.dayStr, dateTime: addMinutesToDate(base, start) });
        }

        Object.assign(draw, { active: false, dayStr: null });
    };

    /**
     * Finalizes an event drag. If the event did not actually move, this is
     * treated as a click.
     */
    const commitDrag = async () => {
        if (!drag.event) {
            Object.assign(drag, { active: false, event: null });
            return;
        }

        const moved = drag.engaged
            && (drag.currentDayIndex !== drag.originalDayIndex || drag.currentStartMin !== drag.originalStartMin);
        if (moved && !dragIsBlocked.value) {
            const targetDay = days.value[drag.currentDayIndex];
            const newEvent = {
                ...drag.event,
                start: addMinutesToDate(targetDay, drag.currentStartMin),
                end: addMinutesToDate(targetDay, drag.currentStartMin + drag.durationMin),
            };
            const allowed = beforeEventUpdate.value
                ? await Promise.resolve(beforeEventUpdate.value(drag.event, newEvent)) !== false
                : true;

            if (allowed) {
                suppressNextClick(newEvent.id);
                emit('event-update', newEvent);
            }
        }

        Object.assign(drag, { active: false, engaged: false, event: null });
    };

    /**
     * Finalizes an event resize after the optional update guard approves it.
     */
    const commitResize = async () => {
        if (!resize.event || !resize.dayStr || !resize.engaged || resizeIsBlocked.value) {
            Object.assign(resize, { active: false, engaged: false, event: null, dayStr: null });
            return;
        }

        const newEvent = {
            ...resize.event,
            end: `${resize.dayStr} ${formatMinutes(resize.endMin)}`,
        };
        const allowed = beforeEventUpdate.value
            ? await Promise.resolve(beforeEventUpdate.value(resize.event, newEvent)) !== false
            : true;

        if (allowed) {
            suppressNextClick(newEvent.id);
            emit('event-update', newEvent);
        }

        Object.assign(resize, { active: false, engaged: false, event: null, dayStr: null });
    };

    /**
     * Starts drawing a new event range on an empty day column.
     *
     * @param {MouseEvent} event
     * @param {{ toString(): string }} day
     */
    const onDayMouseDown = (event, day) => {
        if (!drawingEnabled.value || event.button !== 0 || drag.active || resize.active) {
            return;
        }

        event.preventDefault();
        const startMin = clampToGrid(
            snapToDrawGrid(pxToMinutes(getGridY(event.clientY))),
            boundaryStartMin.value,
            boundaryEndMin.value - drawSnapStepMinutes.value,
        );

        Object.assign(draw, {
            active: true,
            dayStr: day.toString(),
            startMin,
            endMin: startMin + drawSnapStepMinutes.value,
        });
    };

    /**
     * Starts dragging an existing event.
     *
     * @param {MouseEvent} event
     * @param {object} calendarEvent
     * @param {{ toString(): string }} day
     */
    const onEventDragStart = (event, calendarEvent, day) => {
        if (event.button !== 0 || !resizingEnabled.value) {
            return;
        }

        event.preventDefault();
        const startMin = parseEventMinutes(calendarEvent.start);
        const endMin = parseEventMinutes(calendarEvent.end);
        const dayIndex = days.value.findIndex((entry) => entry.toString() === day.toString());

        Object.assign(drag, {
            active: true,
            engaged: false,
            event: calendarEvent,
            durationMin: endMin - startMin,
            offsetMin: pxToMinutes(getGridY(event.clientY)) - startMin,
            originalDayIndex: dayIndex,
            originalStartMin: startMin,
            currentDayIndex: dayIndex,
            currentStartMin: startMin,
            startClientX: event.clientX,
            startClientY: event.clientY,
            startPointerMin: pxToMinutes(getGridY(event.clientY)),
        });
    };

    /**
     * Starts resizing an existing event.
     *
     * @param {MouseEvent} event
     * @param {object} calendarEvent
     * @param {{ toString(): string }} day
     */
    const onEventResizeStart = (event, calendarEvent, day) => {
        if (event.button !== 0) {
            return;
        }

        event.preventDefault();
        Object.assign(resize, {
            active: true,
            engaged: false,
            event: calendarEvent,
            dayStr: day.toString(),
            startMin: parseEventMinutes(calendarEvent.start),
            endMin: parseEventMinutes(calendarEvent.end),
            originalEndMin: parseEventMinutes(calendarEvent.end),
            startClientY: event.clientY,
            startPointerMin: pxToMinutes(getGridY(event.clientY)),
        });
    };

    /**
     * Shared pointer-move handler for draw, drag, resize, and sidebar preview
     * interactions.
     *
     * @param {MouseEvent} event
     */
    const onMouseMove = (event) => {
        updateSidebarPreview(event);
        const rawMin = pxToMinutes(getGridY(event.clientY));

        if (draw.active) {
            draw.endMin = clampToGrid(snapToDrawGrid(rawMin), boundaryStartMin.value, boundaryEndMin.value);
        }

        if (drag.active) {
            if (!drag.engaged) {
                const deltaX = event.clientX - drag.startClientX;
                const deltaY = event.clientY - drag.startClientY;
                const distance = Math.hypot(deltaX, deltaY);

                if (distance < DRAG_START_THRESHOLD_PX) {
                    return;
                }

                drag.engaged = true;
            }

            const pointerDeltaMin = rawMin - drag.startPointerMin;

            drag.currentStartMin = clampToGrid(
                snapToInteractionGrid(drag.originalStartMin + pointerDeltaMin),
                boundaryStartMin.value,
                boundaryEndMin.value - drag.durationMin,
            );
            drag.currentDayIndex = getDayIndex(event.clientX);
        }

        if (resize.active) {
            if (!resize.engaged) {
                const distance = Math.abs(event.clientY - resize.startClientY);

                if (distance < RESIZE_START_THRESHOLD_PX) {
                    return;
                }

                resize.engaged = true;
            }

            const pointerDeltaMin = rawMin - resize.startPointerMin;
            resize.endMin = clampToGrid(
                snapToInteractionGrid(resize.originalEndMin + pointerDeltaMin),
                resize.startMin + interactionSnapStepMinutes.value,
                boundaryEndMin.value,
            );
        }
    };

    /**
     * Commits whichever interaction is currently active.
     */
    const onMouseUp = () => {
        if (draw.active) {
            commitDraw();
            return;
        }

        if (drag.active) {
            commitDrag();
            return;
        }

        if (resize.active) {
            commitResize();
        }
    };

    /**
     * Treats leaving the grid as the end of the current interaction and hides
     * any sidebar preview.
     */
    const onMouseLeave = () => {
        sidebarPreview.visible = false;
        if (draw.active) {
            commitDraw();
        }
        if (drag.active) {
            commitDrag();
        }
        if (resize.active) {
            commitResize();
        }
    };

    /**
     * Converts a sidebar calendar drop into a normal `draw-event` if the drop
     * lands inside the grid and does not collide with another event.
     *
     * @param {MouseEvent} event
     * @param {string | null} calendarId
     */
    const onSidebarDrop = (event, calendarId) => {
        if (!gridContainer.value) {
            return;
        }

        const rect = gridContainer.value.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            return;
        }

        const startMin = clampToGrid(
            snapToDrawGrid(pxToMinutes(getGridY(event.clientY))),
            boundaryStartMin.value,
            boundaryEndMin.value - DROP_DURATION_MINUTES,
        );
        const endMin = startMin + DROP_DURATION_MINUTES;
        const day = days.value[getDayIndex(event.clientX)];
        const dayKey = day.toString();

        sidebarPreview.visible = false;
        if (overlapsExistingEvent(dayKey, startMin, endMin)) {
            return;
        }

        emit('draw-event', {
            calendarId,
            start: addMinutesToDate(day, startMin),
            end: addMinutesToDate(day, endMin),
        });
    };

    return {
        draw,
        drag,
        resize,
        sidebarPreview,
        drawIsBlocked,
        dragIsBlocked,
        resizeIsBlocked,
        ghostDrawStyle,
        ghostDragStyle,
        dragOriginStyle,
        ghostResizeStyle,
        ghostSidebarStyle,
        getDayIndex,
        getGridY,
        isEventDimmed,
        onDayMouseDown,
        onEventDragStart,
        onEventResizeStart,
        onMouseMove,
        onMouseUp,
        onMouseLeave,
        onSidebarDrop,
        shouldEmitEventClick,
    };
};
