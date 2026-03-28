import { onBeforeUnmount, onMounted, ref } from 'vue';

/**
 * Tracks whether the calendar should switch into its compact mobile layout.
 * The decision is based on the rendered element width, not only the browser
 * viewport, so embedded layouts behave correctly.
 *
 * @param {import('vue').Ref<HTMLElement | null>} rootRef
 * @param {import('vue').Ref<'day' | 'week' | 'month' | 'list' | 'resource'>} currentView
 * @param {string} defaultView
 * @returns {{ isMobile: import('vue').Ref<boolean> }}
 */
export const useCalendarResponsive = (rootRef, currentView, defaultView) => {
    const hasWindow = typeof window !== 'undefined';
    const hasScreen = typeof screen !== 'undefined';
    const isPhone = hasScreen ? Math.min(screen.width, screen.height) < 500 : false;
    const mobileBreakpoint = isPhone ? 700 : 450;

    /**
     * Exposes whether the calendar should currently render its compact mobile
     * layout.
     */
    const isMobile = ref(
        hasWindow && isPhone
            ? window.matchMedia('(orientation: portrait)').matches
            : false
    );
    let lastDesktopView = defaultView;

    let resizeObserver = null;
    let removeWindowResize = null;

    /**
     * Applies responsive view mode to the current calendar width.
     *
     * @param {number} width
     */
    const applyMobileWidth = (width) => {
        const wasMobile = isMobile.value;
        isMobile.value = width < mobileBreakpoint;

        if (!isMobile.value) {
            if (currentView.value !== 'day') {
                lastDesktopView = currentView.value;
            }
            if (wasMobile && currentView.value === 'day') {
                currentView.value = lastDesktopView;
            }
            return;
        }

        if (currentView.value !== 'day' && currentView.value !== 'month' && currentView.value !== 'list') {
            lastDesktopView = currentView.value;
            currentView.value = 'day';
            return;
        }
    };

    onMounted(() => {
        if (!hasWindow) {
            return;
        }

        if (typeof ResizeObserver !== 'undefined' && rootRef.value) {
            resizeObserver = new ResizeObserver(([entry]) => {
                applyMobileWidth(entry.contentRect.width);
            });
            resizeObserver.observe(rootRef.value);
            return;
        }

        const handleResize = () => {
            applyMobileWidth(rootRef.value?.offsetWidth ?? window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        removeWindowResize = () => window.removeEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        resizeObserver?.disconnect();
        resizeObserver = null;
        removeWindowResize?.();
        removeWindowResize = null;
    });

    return { isMobile };
};
