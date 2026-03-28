import { definePlugin } from '@vuecalendar/core';

const TIME_AXIS_WIDTH = 48;
const STYLE_ID = 'ht-current-time-styles';

//  CSS injected once into <head> 

function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
        .ht-week__now-line {
            position: absolute;
            left: 0; right: 0;
            display: flex;
            align-items: center;
            pointer-events: none;
            z-index: 20;
        }
        .ht-week__now-label {
            font-size: 10px;
            color: #ef4444;
            font-weight: 600;
            text-align: right;
            padding-right: 6px;
            flex-shrink: 0;
            line-height: 1;
        }
        .ht-week__now-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ef4444;
            flex-shrink: 0;
            margin-left: -4px;
            animation: ht-now-pulse 2s ease-in-out infinite;
        }
        .ht-week__now-bar {
            flex: 1;
            height: 2px;
            background: #ef4444;
            opacity: 0.75;
        }
        @keyframes ht-now-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
            50%       { box-shadow: 0 0 0 5px rgba(239,68,68,0); }
        }
    `;
    document.head.appendChild(style);
}

//  Helpers 

const pad = (value) => String(value).padStart(2, '0');

function getCurrentMinutes() {
    const date = new Date();
    return date.getHours() * 60 + date.getMinutes();
}

function getCurrentLabel() {
    const date = new Date();
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

//  Plugin factory 

/**
 * Current Time Plugin
 *
 * Renders a live "now" indicator line inside the week/day grid.
 * The line updates every minute and is automatically shown/hidden
 * when switching between week and month views.
 *
 * @example
 * import { createCurrentTimePlugin } from '@vuecalendar/current-time'
 *
 * const currentTime = createCurrentTimePlugin()
 * <VueCalendar :plugins="[currentTime]" />
 */
export function createCurrentTimePlugin() {
    let $cal     = null;
    let lineEl   = null;
    let interval = null;
    let enabled  = true;

    const getGrid = () => {
        const el = $cal?.getElement();
        if (!el) return null;
		const grid = el.querySelector('.vuecalendar-week__grid, .ht-week__grid');
        if (!grid) return null;
        // Ignore a grid that is currently animating *out* - it will be removed from
        // the DOM once the leave-transition ends and we need to wait for the entering grid.
        if (grid.closest('.ht-slide-next-leave-active, .ht-slide-prev-leave-active')) return null;
        return grid;
    };

    /**
     * Reads the live week-view layout values from the rendered grid.
     *
     * The bounded view uses a responsive hour height, so the plugin must avoid
     * hardcoded positioning math and instead mirror the values that the week
     * view already resolved.
     *
     * @returns {{ boundaryStartMin: number, boundaryEndMin: number, hourHeight: number } | null}
     */
    function getGridMetrics() {
        const grid = getGrid();

        if (!grid) {
            return null;
        }

        const boundaryStartMin = Number(grid.dataset.boundaryStartMin);
        const boundaryEndMin = Number(grid.dataset.boundaryEndMin);
        const hourHeight = Number(grid.dataset.hourHeight);

        if (
            !Number.isFinite(boundaryStartMin) ||
            !Number.isFinite(boundaryEndMin) ||
            !Number.isFinite(hourHeight) ||
            hourHeight <= 0
        ) {
            return null;
        }

        return {
            boundaryStartMin,
            boundaryEndMin,
            hourHeight,
        };
    }

    /**
     * Converts the current time into a pixel offset inside the visible
     * boundary range. Returns `null` when "now" is outside the visible window.
     *
     * @returns {number | null}
     */
    function getNowTopOffset() {
        const metrics = getGridMetrics();

        if (!metrics) {
            return null;
        }

        const nowMinutes = getCurrentMinutes();

        if (nowMinutes < metrics.boundaryStartMin || nowMinutes > metrics.boundaryEndMin) {
            return null;
        }

        return ((nowMinutes - metrics.boundaryStartMin) / 60) * metrics.hourHeight;
    }

    function removeLine() {
        lineEl?.remove();
        lineEl = null;
    }

    /** Returns true only when the currently visible range includes today. */
    function rangeIncludesToday() {
        const range = $cal?.getRange();
        if (!range) return false;
        const today   = new Date();
        const todayMs = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
        const startMs = new Date(range.start).setHours(0, 0, 0, 0);
        const endMs   = new Date(range.end  ).setHours(23, 59, 59, 999);
        return todayMs >= startMs && todayMs <= endMs;
    }

    function render() {
        const grid = getGrid();
        const topOffset = getNowTopOffset();

        if (!grid || topOffset === null) {
            removeLine();
            return;
        }

        if (!lineEl) {
            lineEl = document.createElement('div');
            lineEl.className = 'ht-week__now-line';
            lineEl.innerHTML = [
                `<div class="ht-week__now-label" style="width:${TIME_AXIS_WIDTH}px">${getCurrentLabel()}</div>`,
                `<div class="ht-week__now-dot"></div>`,
                `<div class="ht-week__now-bar"></div>`,
            ].join('');
            grid.appendChild(lineEl);
        } else {
            const lbl = lineEl.querySelector('.ht-week__now-label');
            if (lbl) {
                lbl.textContent = getCurrentLabel();
            }
        }

        lineEl.style.top = `${topOffset}px`;
    }

    // Re-render after Vue has updated the DOM.
    // Uses a retry loop because mode="out-in" CSS transitions temporarily
    // remove the old grid before inserting the new one - the first RAF can
		// fire in that gap when no week grid exists yet.
    function refresh() {
        if (!enabled) {
            removeLine();
            return;
        }

        removeLine();
        if (!rangeIncludesToday()) return;

        const attempt = (retriesLeft) => {
            const grid = getGrid();
            if (grid) {
                render();
            } else if (retriesLeft > 0) {
                setTimeout(() => attempt(retriesLeft - 1), 80);
            }
        };

        requestAnimationFrame(() => attempt(6)); // up to ~480 ms - covers any CSS transition
    }

    return definePlugin('currentTime', {
        /** @internal */
        install($c) {
            $cal = $c;
            injectStyles();
            $cal.on('range-update', refresh);
            $cal.on('zoom-update', refresh);
            refresh();
            interval = setInterval(() => {
                removeLine();
                if (enabled && rangeIncludesToday()) {
                    render();
                }
            }, 60_000);
        },

        /** @internal */
        destroy() {
            clearInterval(interval);
            interval = null;
            enabled = true;
            removeLine();
            $cal = null;
        },

        /**
         * Show the now-line (re-enables after `disable()`).
         */
        enable() {
            if (!$cal) return;
            enabled = true;
            clearInterval(interval);
            refresh();
            interval = setInterval(() => {
                removeLine();
                if (enabled && rangeIncludesToday()) {
                    render();
                }
            }, 60_000);
        },

        /**
         * Hide the now-line without uninstalling the plugin.
         */
        disable() {
            enabled = false;
            clearInterval(interval);
            interval = null;
            removeLine();
        },
    });
}


