import { definePlugin } from '@vuecalendar/core';

function isValidTimeString(value) {
    return typeof value === 'string' && /^\d{2}:\d{2}$/.test(value);
}

/**
 * Scroll controller plugin for VueCalendar.
 *
 * Lets you set an initial scroll position for day/week views and scroll
 * imperatively afterward.
 *
 * @param {{ initialScroll?: string | null }} [options]
 * @returns {object}
 */
export function createScrollControllerPlugin(options = {}) {
    let $cal = null;
    const initialScroll = isValidTimeString(options.initialScroll) ? options.initialScroll : null;
    let hasAppliedInitialScroll = false;

    const applyInitialScroll = () => {
        if (!$cal || !initialScroll || hasAppliedInitialScroll) {
            return false;
        }

        const didScroll = $cal.scrollToTime?.(initialScroll) ?? false;

        if (didScroll) {
            hasAppliedInitialScroll = true;
        }

        return didScroll;
    };

    const handleRangeUpdate = () => {
        applyInitialScroll();
    };

    return definePlugin('scrollController', {
        /** @internal */
        install($calendar) {
            $cal = $calendar;
            hasAppliedInitialScroll = false;
            $cal.on?.('range-update', handleRangeUpdate);
            queueMicrotask(() => {
                applyInitialScroll();
            });
        },

        /** @internal */
        destroy() {
            $cal?.off?.('range-update', handleRangeUpdate);
            $cal = null;
            hasAppliedInitialScroll = false;
        },

        /**
         * Scrolls the active day/week grid to a HH:MM position.
         *
         * @param {string} timeValue
         * @returns {boolean}
         */
        scrollTo(timeValue) {
            if (!isValidTimeString(timeValue)) {
                return false;
            }

            return $cal?.scrollToTime?.(timeValue) ?? false;
        },

        /**
         * Returns the current vertical scroll offset of the active day/week grid.
         *
         * @returns {number}
         */
        getScrollTop() {
            return $cal?.getScrollTop?.() ?? 0;
        },
    });
}
