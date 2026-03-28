import { onBeforeUnmount, onMounted } from 'vue';

/**
 * Calls `onOutside` when a pointer interaction starts outside the target
 * element. Used by popovers such as the date picker.
 *
 * @param {import('vue').Ref<HTMLElement | null>} rootRef
 * @param {(event: MouseEvent) => void} onOutside
 */
export const useOutsidePointerDown = (rootRef, onOutside) => {
    /**
     * @param {MouseEvent} event
     */
    const handlePointerDown = (event) => {
        const root = rootRef.value;
        if (!root || root.contains(event.target)) {
            return;
        }

        onOutside(event);
    };

    onMounted(() => {
        document.addEventListener('mousedown', handlePointerDown);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', handlePointerDown);
    });
};

