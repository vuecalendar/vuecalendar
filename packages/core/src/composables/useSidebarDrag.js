import { computed, onBeforeUnmount, reactive } from 'vue';

/**
 * Shared drag state for dragging a sidebar calendar into the week/day grid.
 *
 * @param {import('vue').Ref<object>} calendars
 * @param {import('vue').Ref<{ onSidebarDrop?: (event: MouseEvent, calendarId: string | null) => void } | null>} weekViewRef
 * @returns {{
 *   sidebarDrag: { active: boolean, calendarId: string | null },
 *   mousePos: { x: number, y: number },
 *   sidebarDragCalendar: import('vue').ComputedRef<object | null>,
 *   onSidebarItemMouseDown: (event: MouseEvent, calendarId: string) => void,
 *   setSidebarDrag: (active: boolean, calendarId: string | null) => void,
 *   triggerSidebarDrop: (event: MouseEvent) => void
 * }}
 */
export const useSidebarDrag = (calendars, weekViewRef) => {
    const hasWindow = typeof window !== 'undefined';

    /**
     * Shared sidebar drag state used by both the built-in sidebar and plugins.
     */
    const sidebarDrag = reactive({ active: false, calendarId: null });

    /**
     * Current pointer position for rendering the floating drag ghost.
     */
    const mousePos = reactive({ x: 0, y: 0 });

    /**
     * Resolved calendar definition for the item currently being dragged.
     */
    const sidebarDragCalendar = computed(() => (
        sidebarDrag.calendarId ? calendars.value[sidebarDrag.calendarId] ?? null : null
    ));

    /**
     * Clears active drag listeners and state.
     */
    const stopDrag = () => {
        if (!hasWindow) {
            Object.assign(sidebarDrag, { active: false, calendarId: null });
            return;
        }

        window.removeEventListener('mousemove', onSidebarDragMove);
        window.removeEventListener('mouseup', onSidebarDragUp);
        Object.assign(sidebarDrag, { active: false, calendarId: null });
    };

    /**
     * @param {MouseEvent} event
     */
    const onSidebarDragMove = (event) => {
        Object.assign(mousePos, { x: event.clientX, y: event.clientY });
    };

    /**
     * @param {MouseEvent} event
     */
    const onSidebarDragUp = (event) => {
        if (sidebarDrag.active) {
            weekViewRef.value?.onSidebarDrop?.(event, sidebarDrag.calendarId);
        }

        stopDrag();
    };

    /**
     * Starts dragging a sidebar calendar chip.
     *
     * @param {MouseEvent} event
     * @param {string} calendarId
     */
    const onSidebarItemMouseDown = (event, calendarId) => {
        if (event.button !== 0) {
            return;
        }

        event.preventDefault();
        Object.assign(sidebarDrag, { active: true, calendarId });
        Object.assign(mousePos, { x: event.clientX, y: event.clientY });

        if (!hasWindow) {
            return;
        }

        window.addEventListener('mousemove', onSidebarDragMove);
        window.addEventListener('mouseup', onSidebarDragUp);
    };

    /**
     * Public setter for plugin-driven drag state updates.
     *
     * @param {boolean} active
     * @param {string | null} calendarId
     */
    const setSidebarDrag = (active, calendarId) => {
        Object.assign(sidebarDrag, { active, calendarId });
    };

    /**
     * Public drop hook for plugins.
     *
     * @param {MouseEvent} event
     */
    const triggerSidebarDrop = (event) => {
        if (sidebarDrag.active) {
            weekViewRef.value?.onSidebarDrop?.(event, sidebarDrag.calendarId);
        }

        stopDrag();
    };

    onBeforeUnmount(() => {
        stopDrag();
    });

    return {
        sidebarDrag,
        mousePos,
        sidebarDragCalendar,
        onSidebarItemMouseDown,
        setSidebarDrag,
        triggerSidebarDrop,
    };
};
