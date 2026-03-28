import { computed, onBeforeUnmount, ref, watch } from 'vue';

/**
 * Encapsulates the draggable/floating behavior of the reusable event modal so
 * the component stays focused on fields and actions.
 *
 * @param {object} options
 * @param {import('vue').Ref<boolean>} options.open
 * @param {import('vue').Ref<boolean>} options.movable
 * @param {import('vue').Ref<HTMLElement | null>} options.cardEl
 * @returns {{
 *   dragging: import('vue').Ref<boolean>,
 *   isFloating: import('vue').Ref<boolean>,
 *   cardStyle: import('vue').ComputedRef<Record<string, string>>,
 *   onHeaderMouseDown: (event: MouseEvent) => void,
 *   stopDrag: () => void
 * }}
 */
export const useEventModalDrag = ({ open, movable, cardEl }) => {
    const dragging = ref(false);
    const isFloating = ref(false);
    const position = ref({ left: 0, top: 0 });
    const dragOffset = ref({ x: 0, y: 0 });

    /**
     * Inline positioning applied only after the modal has been lifted into its
     * floating drag mode.
     */
    const cardStyle = computed(() => {
        if (!movable.value || !isFloating.value) {
            return {};
        }

        return {
            left: `${position.value.left}px`,
            top: `${position.value.top}px`,
        };
    });

    /**
     * Removes active global listeners and clears the drag-in-progress state.
     */
    const stopDrag = () => {
        dragging.value = false;

        if (typeof window === 'undefined') {
            return;
        }

        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('mouseup', stopDrag);
    };

    /**
     * Updates the floating modal position to follow the pointer.
     *
     * @param {MouseEvent} event
     */
    const onDragMove = (event) => {
        if (!dragging.value) {
            return;
        }

        position.value = {
            left: event.clientX - dragOffset.value.x,
            top: event.clientY - dragOffset.value.y,
        };
    };

    /**
     * Starts dragging from the current modal rectangle, preserving the cursor
     * offset so the card follows naturally instead of jumping.
     *
     * @param {MouseEvent} event
     */
    const onDragStart = (event) => {
        if (!movable.value || !(cardEl.value instanceof HTMLElement)) {
            return;
        }

        const rect = cardEl.value.getBoundingClientRect();
        isFloating.value = true;
        dragging.value = true;
        position.value = {
            left: rect.left,
            top: rect.top,
        };
        dragOffset.value = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };

        if (typeof window === 'undefined') {
            return;
        }

        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', stopDrag);
    };

    /**
     * Treats the full modal header as the drag handle while still allowing the
     * close button to behave like a normal clickable control.
     *
     * @param {MouseEvent} event
     */
    const onHeaderMouseDown = (event) => {
        if (!movable.value) {
            return;
        }

    if (event.target instanceof HTMLElement && event.target.closest('.vuecalendar-event-modal__icon-btn, .ht-event-modal__icon-btn')) {
            return;
        }

        onDragStart(event);
    };

    watch(open, (isOpen) => {
        if (isOpen) {
            return;
        }

        stopDrag();
        isFloating.value = false;
        position.value = { left: 0, top: 0 };
    });

    onBeforeUnmount(() => {
        stopDrag();
    });

    return {
        dragging,
        isFloating,
        cardStyle,
        onHeaderMouseDown,
        stopDrag,
    };
};
