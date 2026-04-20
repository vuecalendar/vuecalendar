<template>
    <div class="vuecalendar-resource">
        <div class="vuecalendar-resource__scroll-shell">
            <div class="vuecalendar-resource__content">
                <div class="vuecalendar-resource__headers" :style="{ paddingLeft: `${TIME_AXIS_WIDTH}px` }">
                    <div class="vuecalendar-resource__day-row" :style="headerGridStyle">
                        <div
                            v-for="day in days"
                            :key="`resource-day-${day.toString()}`"
                            class="vuecalendar-resource__day-header"
                            :style="{ gridColumn: `span ${resourceCount}` }"
                        >
                            <div class="vuecalendar-resource__day-name">{{ fmt_weekdayShort(day, locale) }}</div>
                            <div class="vuecalendar-resource__day-num" :class="{ 'vuecalendar-resource__day-num--today': isToday(day) }">
                                {{ String(day.day) }}
                            </div>
                        </div>
                    </div>

                    <div class="vuecalendar-resource__resource-row" :style="headerGridStyle">
                        <div
                            v-for="column in resourceColumns"
                            :key="`resource-header-${column.key}`"
                            class="vuecalendar-resource__resource-header"
                            :style="getResourceHeaderStyle(column.resource)"
                        >
                            {{ column.resource.label ?? column.resource.id }}
                        </div>
                    </div>
                </div>

                <div
                    ref="gridContainer"
                    class="vuecalendar-resource__grid"
                    :class="{
                        'vuecalendar-resource__grid--bounded': !isFullDayBoundary,
                        'vuecalendar-resource__grid--static': isFullDayBoundary && !showsVerticalScroll,
                        'vuecalendar-resource__grid--scrollable-bounded': !isFullDayBoundary && hasExplicitGridHeight,
                    }"
                >
                    <div class="vuecalendar-resource__inner" :style="{ height: `${totalHeight}px` }">
                        <div class="vuecalendar-resource__time-axis" :style="{ width: `${TIME_AXIS_WIDTH}px` }">
                            <div
                                v-for="(tick, index) in hourTicks"
                                :key="`resource-hour-${index}`"
                                class="vuecalendar-resource__hour-label"
                                :style="{ top: `${tick.topPx}px` }"
                            >
                                {{ tick.label }}
                            </div>
                        </div>

                        <div class="vuecalendar-resource__columns" :style="gridColumnStyle">
                            <div
                                v-for="column in resourceColumns"
                                :key="column.key"
                                class="vuecalendar-resource__col"
                                :class="{ 'vuecalendar-resource__col--weekend': isWeekend(column.day) }"
                                :data-day="column.day.toString()"
                                :data-resource-id="column.resource.id"
                            >
                                <div
                                    v-for="(line, index) in gridLineTicks"
                                    :key="`resource-line-${column.key}-${index}`"
                                    class="vuecalendar-resource__grid-line"
                                    :class="{ 'vuecalendar-resource__grid-line--half': line.isHalf }"
                                    :style="{ top: `${line.topPx}px` }"
                                />

                                <div
                                    class="vuecalendar-resource__shade"
                                    :style="{ top: 0, height: `${Math.max(0, minutesToPx(workdayStart * 60))}px` }"
                                />

                                <div
                                    class="vuecalendar-resource__shade"
                                    :style="{ top: `${Math.max(0, minutesToPx(workdayEnd * 60))}px`, bottom: 0, height: 'auto' }"
                                />

                                <div v-if="isWeekend(column.day)" class="vuecalendar-resource__weekend-shade" />

                                <TransitionGroup name="vuecalendar-ev" tag="div" class="vuecalendar-resource__events-layer">
                                    <VueCalendarEvent
                                        v-for="(event, index) in getEventsForColumn(column.day, column.resource.id)"
                                        :key="event.id"
                                        :event="event"
                                        :calendar="resolveCalendar(event)"
                                        :hour-height="hourHeight"
                                        :event-width="eventWidth"
                                        :offset-minutes="boundaryStartMin"
                                        :resizable="false"
                                        :col="colLayout.get(event.id)?.col ?? 0"
                                        :total-cols="colLayout.get(event.id)?.total ?? 1"
                                        :style="{ '--i': index }"
                                        class="vuecalendar-resource__event"
                                        @click="emit('event-click', event)"
                                        @dblclick.stop="emit('event-dblclick', event)"
                                    >
                                        <template v-if="$slots.event" #default="slotProps">
                                            <slot name="event" v-bind="slotProps" />
                                        </template>
                                    </VueCalendarEvent>
                                </TransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, toRef } from 'vue';
import { isToday, isWeekend } from '../utils/temporal.js';
import { fmt_weekdayShort } from '../utils/intlDate.js';
import VueCalendarEvent from './VueCalendarEvent.vue';
import { useResourceViewLayout } from '../composables/useResourceViewLayout.js';
import '../styles/resource-view.css';

const TIME_AXIS_WIDTH = 48;

const props = defineProps({
    /** Visible days for the current resource-week view. */
    days: { type: Array, required: true },
    /** Events rendered in the active range. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Resource definitions shown as sub-columns per day. */
    resources: { type: Array, default: () => [] },
    /** Start hour of the workday shading. */
    workdayStart: { type: Number, default: 7 },
    /** End hour of the workday shading. */
    workdayEnd: { type: Number, default: 18 },
    /** Width percentage of an event card inside its grid column. */
    eventWidth: { type: Number, default: 100 },
    /** Explicit total height for the rendered resource grid in pixels. */
    gridHeight: { type: Number, default: null },
    /** Week/day grid interval in minutes. */
    gridStep: { type: Number, default: 60 },
    /** Locale used for labels. */
    locale: { type: String, default: 'en' },
    /** Intl.DateTimeFormatOptions used to format the time axis. */
    timeAxisFormatOptions: { type: Object, default: () => ({ hour: 'numeric' }) },
    /** Visible boundaries for the grid. */
    dayBoundaries: { type: Object, default: () => ({ start: '00:00', end: '24:00' }) },
    /** Fits full-day boundaries to the available height instead of scrolling the full 24 hours. */
    fitFullDayHeight: { type: Boolean, default: true },
    /** Hour-density multiplier for the resource grid. */
    zoomLevel: { type: Number, default: 1 },
});

const emit = defineEmits(['event-click', 'event-dblclick']);

const hasExplicitGridHeight = computed(() => {
    const height = Number(props.gridHeight);
    return Number.isFinite(height) && height > 0;
});

const {
    gridContainer,
    boundaryStartMin,
    isFullDayBoundary,
    hourHeight,
    totalHeight,
    showsVerticalScroll,
    hourTicks,
    gridLineTicks,
    colLayout,
    resourceColumns,
    resourceCount,
    getEventsForColumn,
    minutesToPx,
} = useResourceViewLayout({
    dayBoundaries: toRef(props, 'dayBoundaries'),
    zoomLevel: toRef(props, 'zoomLevel'),
    savedScrollTop: computed(() => -1),
    fitFullDayHeight: toRef(props, 'fitFullDayHeight'),
    gridHeight: toRef(props, 'gridHeight'),
    workdayStart: toRef(props, 'workdayStart'),
    gridStep: toRef(props, 'gridStep'),
    timeAxisFormatOptions: toRef(props, 'timeAxisFormatOptions'),
    locale: toRef(props, 'locale'),
    events: toRef(props, 'events'),
    days: toRef(props, 'days'),
    resources: toRef(props, 'resources'),
    onSaveScrollTop: () => {},
});

const headerGridStyle = computed(() => ({
    gridTemplateColumns: `repeat(${props.days.length * resourceCount.value}, minmax(0, 1fr))`,
}));

const gridColumnStyle = headerGridStyle;

const resolveCalendar = (event) => props.calendars[event.calendarId] ?? {};

const getResourceHeaderStyle = (resource) => {
    const colors = resource?.lightColors ?? {
        main: '#9ca3af',
        container: '#f8fafc',
        onContainer: '#334155',
    };

    return {
        '--ht-resource-accent': colors.main,
        '--ht-resource-container': colors.container,
        '--ht-resource-on-container': colors.onContainer,
    };
};
</script>
