<template>
	<div class="vuecalendar-week">
		<div class="vuecalendar-week__day-headers" :style="{ paddingLeft: `${TIME_AXIS_WIDTH}px` }">
			<div v-for="day in days" :key="day.toString()" class="vuecalendar-week__day-header">
				<slot name="day-header" :day="day" :is-today="isToday(day)">
					<div class="vuecalendar-week__day-name">{{ fmt_weekdayShort(day, locale) }}</div>
					<div class="vuecalendar-week__day-num" :class="{ 'vuecalendar-week__day-num--today': isToday(day) }">
						{{ String(day.day) }}
					</div>
				</slot>
			</div>
		</div>

		<div
			v-if="multiDayRowCount > 0"
			class="vuecalendar-week__multi-day"
			:style="{
				paddingLeft: `${TIME_AXIS_WIDTH}px`,
				height: `${multiDayLaneHeight}px`,
			}"
		>
			<div class="vuecalendar-week__multi-day-grid">
				<div
					v-for="day in days"
					:key="`multi-${day.toString()}`"
					class="vuecalendar-week__multi-day-col"
				/>

				<button
					v-for="item in multiDayEvents"
					:key="`multi-${item.event.id}`"
					type="button"
					class="vuecalendar-week__multi-day-event"
					:class="{
						'vuecalendar-week__multi-day-event--continues-left': item.startsBeforeRange,
						'vuecalendar-week__multi-day-event--continues-right': item.endsAfterRange,
					}"
					:style="getMultiDayEventStyle(item)"
					@click="emit('event-click', item.event)"
					@dblclick.stop="emit('event-dblclick', item.event)"
				>
					<span
						v-if="item.startsBeforeRange"
						class="vuecalendar-week__multi-day-edge vuecalendar-week__multi-day-edge--left"
						aria-hidden="true"
					/>
					<span class="vuecalendar-week__multi-day-copy">
						<span class="vuecalendar-week__multi-day-title">{{ item.event.title }}</span>
						<span v-if="getMultiDayEventTime(item)" class="vuecalendar-week__multi-day-time">
							{{ getMultiDayEventTime(item) }}
						</span>
					</span>
					<span
						v-if="item.endsAfterRange"
						class="vuecalendar-week__multi-day-edge vuecalendar-week__multi-day-edge--right"
						aria-hidden="true"
					/>
				</button>
			</div>
		</div>

		<div
			ref="gridContainer"
			class="vuecalendar-week__grid"
			:class="{
				'vuecalendar-week__grid--bounded': !isFullDayBoundary,
				'vuecalendar-week__grid--static': isFullDayBoundary && !showsVerticalScroll,
				'vuecalendar-week__grid--scrollable-bounded': !isFullDayBoundary && hasExplicitGridHeight,
			}"
			:data-boundary-start-min="boundaryStartMin"
			:data-boundary-end-min="boundaryEndMin"
			:data-hour-height="hourHeight"
			:data-zoom-level="zoomLevel"
			@mousemove="onMouseMove"
			@mouseleave="onMouseLeave"
			@mouseup="onMouseUp"
		>
			<div class="vuecalendar-week__inner" :style="{ height: `${totalHeight}px` }">
				<div class="vuecalendar-week__time-axis" :style="{ width: `${TIME_AXIS_WIDTH}px` }">
					<div
						v-for="(tick, index) in hourTicks"
						:key="index"
						class="vuecalendar-week__hour-label"
						:style="{ top: `${tick.topPx}px` }"
					>
						{{ tick.label }}
					</div>
				</div>

				<div
					v-for="(day, dayIndex) in days"
					:key="day.toString()"
					class="vuecalendar-week__col"
					:data-day="day.toString()"
					@mousedown="onDayMouseDown($event, day, dayIndex)"
				>
					<div
						v-for="(line, index) in gridLineTicks"
						:key="index"
						class="vuecalendar-week__grid-line"
						:class="{ 'vuecalendar-week__grid-line--half': line.isHalf }"
						:style="{ top: `${line.topPx}px` }"
					/>

					<div
						class="vuecalendar-week__shade"
						:style="{ top: 0, height: `${Math.max(0, minutesToPx(workdayStart * 60))}px` }"
					/>

					<div
						class="vuecalendar-week__shade"
						:style="{ top: `${Math.max(0, minutesToPx(workdayEnd * 60))}px`, bottom: 0, height: 'auto' }"
					/>

					<div v-if="isWeekend(day)" class="vuecalendar-week__weekend-shade" />

					<TransitionGroup name="vuecalendar-ev" tag="div" class="vuecalendar-week__events-layer">
						<VueCalendarEvent
							v-for="(event, index) in getEventsForDay(day)"
							:key="event.id"
							:event="event"
							:calendar="resolveCalendar(event)"
							:hour-height="hourHeight"
							:event-width="eventWidth"
							:offset-minutes="boundaryStartMin"
							:col="colLayout.get(event.id)?.col ?? 0"
							:total-cols="colLayout.get(event.id)?.total ?? 1"
							:resizable="resizingEnabled"
							:style="{ '--i': index, opacity: isEventDimmed(event.id) ? 0.2 : 1 }"
							class="vuecalendar-week__event"
							@click="onWeekEventClick(event)"
							@drag-start="onEventDragStart($event, event, day)"
							@resize-start="onEventResizeStart($event, event, day)"
							@dblclick.stop="emit('event-dblclick', event)"
						>
							<template v-if="$slots.event" #default="slotProps">
								<slot name="event" v-bind="slotProps" />
							</template>
						</VueCalendarEvent>
					</TransitionGroup>

					<div v-if="draw.active && draw.dayStr === day.toString()" class="vuecalendar-week__ghost" :style="ghostDrawStyle">
						<template v-if="drawIsBlocked">
							<svg class="vuecalendar-week__ghost-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10" />
								<line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
							</svg>
							<span>{{ blockedLabel }}</span>
						</template>
					</div>

					<div
						v-if="drag.active && drag.originalDayIndex === dayIndex"
						class="vuecalendar-week__drag-origin"
						:style="dragOriginStyle"
					/>

					<div
						v-if="drag.active && drag.currentDayIndex === dayIndex"
						class="vuecalendar-week__ghost"
						:style="ghostDragStyle"
					>
						<template v-if="dragIsBlocked">
							<svg class="vuecalendar-week__ghost-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10" />
								<line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
							</svg>
							<span>{{ blockedLabel }}</span>
						</template>
					</div>

					<div
						v-if="resize.active && resize.dayStr === day.toString()"
						class="vuecalendar-week__ghost"
						:style="ghostResizeStyle"
					/>

					<div
						v-if="sidebarPreview.visible && sidebarPreview.dayIndex === dayIndex"
						class="vuecalendar-week__ghost vuecalendar-week__ghost--sidebar"
						:style="ghostSidebarStyle"
					>
						<template v-if="sidebarPreview.blocked">
							<svg class="vuecalendar-week__ghost-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10" />
								<line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
							</svg>
							<span class="vuecalendar-week__ghost-label">{{ blockedLabel }}</span>
						</template>
						<template v-else>
							<span class="vuecalendar-week__ghost-label">{{ sidebarPreview.label }}</span>
							<span class="vuecalendar-week__ghost-time">{{ sidebarPreview.timeRange }}</span>
						</template>
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
import '../styles/week-view.css';
import { useWeekViewLayout } from '../composables/useWeekViewLayout.js';
import { useWeekViewInteractions } from '../composables/useWeekViewInteractions.js';

const TIME_AXIS_WIDTH = 48;

const props = defineProps({
	/** Visible days for the current day/week view. */
	days: { type: Array, required: true },
	/** Events rendered in the active range. */
	events: { type: Array, default: () => [] },
	/** Calendar definitions keyed by calendar ID. */
	calendars: { type: Object, default: () => ({}) },
	/** Selected calendar ID used for newly created events. */
	selectedCalendarId: { type: String, default: null },
	/** Shared sidebar drag state from the parent calendar. */
	sidebarDrag: { type: Object, default: () => ({ active: false, calendarId: null }) },
	/** Scroll position restored by the parent calendar. */
	savedScrollTop: { type: Number, default: -1 },
	/** Start hour of the workday shading. */
	workdayStart: { type: Number, default: 7 },
	/** End hour of the workday shading. */
	workdayEnd: { type: Number, default: 18 },
	/** Whether mouse-driven drawing is enabled. */
	drawingEnabled: { type: Boolean, default: false },
	/** Width percentage of an event card inside its grid column. */
	eventWidth: { type: Number, default: 100 },
	/** Explicit total height for the rendered week/day grid in pixels. */
	gridHeight: { type: Number, default: null },
	/** Label shown when an interaction would overlap another event. */
	blockedLabel: { type: String, default: 'Occupied' },
	/** Whether overlapping events are allowed. */
	allowOverlap: { type: Boolean, default: false },
	/** Week/day grid interval in minutes. */
	gridStep: { type: Number, default: 60 },
	/** Runtime interaction snap interval in minutes. */
	interactionGridStep: { type: Number, default: null },
	/** Runtime draw snap interval in minutes. */
	drawGridStep: { type: Number, default: null },
	/** Whether resize handles and resize interactions are enabled. */
	resizingEnabled: { type: Boolean, default: true },
	/** Locale used for labels. */
	locale: { type: String, default: 'en' },
	/** Intl.DateTimeFormatOptions used to format the time axis. */
	timeAxisFormatOptions: { type: Object, default: () => ({ hour: 'numeric' }) },
	/** Optional guard hook before drag/resize updates commit. */
	beforeEventUpdate: { type: Function, default: null },
	/** Visible boundaries for the grid. */
	dayBoundaries: { type: Object, default: () => ({ start: '00:00', end: '24:00' }) },
	/** Fits full-day boundaries to the available height instead of scrolling the full 24 hours. */
	fitFullDayHeight: { type: Boolean, default: true },
	/** Hour-density multiplier for week and day views. */
	zoomLevel: { type: Number, default: 1 },
});

const emit = defineEmits(['event-click', 'event-dblclick', 'event-update', 'draw-event', 'slot-click', 'update:savedScrollTop']);

const hasExplicitGridHeight = computed(() => {
	const height = Number(props.gridHeight);
	return Number.isFinite(height) && height > 0;
});

const {
	gridContainer,
	boundaryStartMin,
	boundaryEndMin,
	isFullDayBoundary,
	hourHeight,
	totalHeight,
	showsVerticalScroll,
	multiDayEvents,
	multiDayRowCount,
	hourTicks,
	gridLineTicks,
	colLayout,
	getEventsForDay,
	minutesToPx,
	durationToPx,
	pxToMinutes,
	clampToGrid,
} = useWeekViewLayout({
	dayBoundaries: toRef(props, 'dayBoundaries'),
	zoomLevel: toRef(props, 'zoomLevel'),
	savedScrollTop: toRef(props, 'savedScrollTop'),
	fitFullDayHeight: toRef(props, 'fitFullDayHeight'),
	gridHeight: toRef(props, 'gridHeight'),
	workdayStart: toRef(props, 'workdayStart'),
	gridStep: toRef(props, 'gridStep'),
	timeAxisFormatOptions: toRef(props, 'timeAxisFormatOptions'),
	locale: toRef(props, 'locale'),
	events: toRef(props, 'events'),
	days: toRef(props, 'days'),
	onSaveScrollTop: (scrollTop) => emit('update:savedScrollTop', scrollTop),
});

const MULTI_DAY_ROW_HEIGHT = 24;
const MULTI_DAY_ROW_GAP = 4;
const MULTI_DAY_LANE_PADDING = 6;

const multiDayLaneHeight = computed(() => (
	multiDayRowCount.value > 0
		? (multiDayRowCount.value * MULTI_DAY_ROW_HEIGHT)
			+ (Math.max(0, multiDayRowCount.value - 1) * MULTI_DAY_ROW_GAP)
			+ (MULTI_DAY_LANE_PADDING * 2)
		: 0
));

const {
	draw,
	drag,
	resize,
	sidebarPreview,
	drawIsBlocked,
	dragIsBlocked,
	ghostDrawStyle,
	ghostDragStyle,
	dragOriginStyle,
	ghostResizeStyle,
	ghostSidebarStyle,
	isEventDimmed,
	onDayMouseDown,
	onEventDragStart,
	onEventResizeStart,
	onMouseMove,
	onMouseUp,
	onMouseLeave,
	onSidebarDrop,
	shouldEmitEventClick,
} = useWeekViewInteractions({
	days: toRef(props, 'days'),
	events: toRef(props, 'events'),
	calendars: toRef(props, 'calendars'),
	selectedCalendarId: toRef(props, 'selectedCalendarId'),
	sidebarDrag: toRef(props, 'sidebarDrag'),
	drawingEnabled: toRef(props, 'drawingEnabled'),
	allowOverlap: toRef(props, 'allowOverlap'),
	interactionGridStep: toRef(props, 'interactionGridStep'),
	drawGridStep: toRef(props, 'drawGridStep'),
	resizingEnabled: toRef(props, 'resizingEnabled'),
	beforeEventUpdate: toRef(props, 'beforeEventUpdate'),
	boundaryStartMin,
	boundaryEndMin,
	gridContainer,
	timeAxisWidth: TIME_AXIS_WIDTH,
	pxToMinutes,
	minutesToPx,
	durationToPx,
	clampToGrid,
	emit: (eventName, payload) => emit(eventName, payload),
});

const onWeekEventClick = (event) => {
	if (!shouldEmitEventClick(event.id)) {
		return;
	}

	emit('event-click', event);
};

const resolveCalendar = (event) => props.calendars[event.calendarId] ?? {};

const formatEventTime = (dateTime) => {
	if (!dateTime || dateTime.length < 16) {
		return '';
	}

	const hours = Number(dateTime.slice(11, 13));
	const minutes = Number(dateTime.slice(14, 16));

	if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
		return '';
	}

	return new Intl.DateTimeFormat(props.locale, {
		hour: 'numeric',
		minute: '2-digit',
		timeZone: 'UTC',
	}).format(new Date(Date.UTC(2000, 0, 1, hours, minutes)));
};

const getMultiDayEventTime = (item) => {
	if (item.startsBeforeRange) {
		return '';
	}

	return formatEventTime(item.event.start);
};

const getMultiDayEventStyle = (item) => {
	const calendar = resolveCalendar(item.event);
	const colors = calendar.lightColors ?? {
		main: '#9ca3af',
		container: '#f3f4f6',
		onContainer: '#374151',
	};
	const dayCount = Math.max(props.days.length, 1);
	const span = item.endIndex - item.startIndex + 1;
	const rowTop = MULTI_DAY_LANE_PADDING + (item.row * (MULTI_DAY_ROW_HEIGHT + MULTI_DAY_ROW_GAP));

	return {
		left: `calc(${(item.startIndex / dayCount) * 100}% + 2px)`,
		width: `calc(${(span / dayCount) * 100}% - 4px)`,
		top: `${rowTop}px`,
		height: `${MULTI_DAY_ROW_HEIGHT}px`,
		background: colors.container,
		borderLeft: `4px solid ${colors.main}`,
		color: colors.onContainer,
	};
};

const parseScrollTime = (timeValue) => {
	if (typeof timeValue !== 'string' || !/^\d{2}:\d{2}$/.test(timeValue)) {
		return null;
	}

	const [hours, minutes] = timeValue.split(':').map(Number);

	if (
		!Number.isFinite(hours)
		|| !Number.isFinite(minutes)
		|| hours < 0
		|| hours > 23
		|| minutes < 0
		|| minutes > 59
	) {
		return null;
	}

	return (hours * 60) + minutes;
};

const scrollToTime = (timeValue) => {
	const minutes = parseScrollTime(timeValue);

	if (!gridContainer.value || minutes === null) {
		return false;
	}

	const clampedMinutes = clampToGrid(minutes, boundaryStartMin.value, boundaryEndMin.value);
	gridContainer.value.scrollTop = Math.max(0, minutesToPx(clampedMinutes));
	return true;
};

const getScrollTop = () => gridContainer.value?.scrollTop ?? 0;

defineExpose({
	onSidebarDrop,
	scrollToTime,
	getScrollTop,
});
</script>

