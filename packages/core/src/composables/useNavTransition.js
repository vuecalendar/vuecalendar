import { computed, ref } from 'vue';

/**
 * Tracks the current forward/backward navigation direction so calendar view
 * transitions can stay visually consistent across components.
 *
 * @param {string} [prefix='vuecalendar-nav']
 * @returns {{
 *   navDirection: import('vue').Ref<'next' | 'prev'>,
 *   navTransition: import('vue').ComputedRef<string>,
 *   setNavDirection: (direction: number) => void
 * }}
 */
export function useNavTransition(prefix = 'vuecalendar-nav') {
    const navDirection = ref('next');
    const navTransition = computed(() => `${prefix}-${navDirection.value}`);

    const setNavDirection = (direction) => {
        navDirection.value = direction >= 0 ? 'next' : 'prev';
    };

    return {
        navDirection,
        navTransition,
        setNavDirection,
    };
}
