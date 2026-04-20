<template>
	<div ref="calendarRootEl" class="vuecalendar" :class="{ 'vuecalendar--mobile': isMobile }" v-bind="$attrs">
		<aside v-if="showSidebar && !isMobile && !$slots.sidebar" class="vuecalendar__sidebar">
			<div class="vuecalendar__sidebar-list">
				<div v-for="(calendar, id) in sidebarCalendars" :key="id" class="vuecalendar__sidebar-item" :class="{
					'vuecalendar__sidebar-item--active': selectedCalendarId === id,
					'vuecalendar__sidebar-item--draggable': dragEnabled && !isCalendarHidden(id),
					'vuecalendar__sidebar-item--hidden': isCalendarHidden(id),
				}" :style="{
					'--ht-sidebar-accent': calendar.lightColors.main,
					'--ht-sidebar-container': calendar.lightColors.container,
					'--ht-sidebar-on-container': calendar.lightColors.onContainer,
					...(selectedCalendarId === id
						? {
							background: calendar.lightColors.container,
							color: calendar.lightColors.onContainer,
						}
						: {}),
				}" @click="selectedCalendarId = id"
					@mousedown="dragEnabled && !isCalendarHidden(id) ? onSidebarItemMouseDown($event, id) : undefined">
					<slot name="sidebar-item" :id="id" :calendar="calendar" :is-selected="selectedCalendarId === id"
						:is-hidden="isCalendarHidden(id)" :toggle-visibility="() => toggleCalendarVisibility(id)">
						<span class="vuecalendar__sidebar-dot" :style="{ background: calendar.lightColors.main }" />
						<span class="vuecalendar__sidebar-label">{{ calendar.label }}</span>
						<button class="vuecalendar__sidebar-visibility" type="button"
							:title="isCalendarHidden(id) ? 'Show calendar' : 'Hide calendar'"
							:aria-label="isCalendarHidden(id) ? 'Show calendar' : 'Hide calendar'"
							:aria-pressed="!isCalendarHidden(id)" @mousedown.stop
							@click.stop="toggleCalendarVisibility(id)">
							<svg v-if="isCalendarHidden(id)" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path
									d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.89 1 12c.92-2.6 2.62-4.79 4.88-6.32" />
								<path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
								<path
									d="M9.88 5.09A10.94 10.94 0 0 1 12 4c5 0 9.27 3.11 11 8a11.83 11.83 0 0 1-4.09 5.09" />
								<path d="M1 1l22 22" />
							</svg>
							<svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round">
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
								<circle cx="12" cy="12" r="3" />
							</svg>
						</button>
					</slot>
				</div>
			</div>

			<div v-if="hasHiddenCalendars" class="vuecalendar__sidebar-actions">
				<button class="vuecalendar__sidebar-action" type="button" @click="showAllCalendars">
					Show all
				</button>
			</div>

			<p v-if="dragEnabled" class="vuecalendar__sidebar-hint">
				<svg class="vuecalendar__hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
					stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="5 9 2 12 5 15" />
					<polyline points="9 5 12 2 15 5" />
					<polyline points="15 19 12 22 9 19" />
					<polyline points="19 9 22 12 19 15" />
					<line x1="2" y1="12" x2="22" y2="12" />
					<line x1="12" y1="2" x2="12" y2="22" />
				</svg>
				{{ mergedLabels.sidebarDragHint }}
			</p>
		</aside>

		<slot name="sidebar" />

		<div class="vuecalendar__main">
			<div class="vuecalendar__nav">
				<button class="vuecalendar__nav-btn" type="button" title="Previous" @click="navigatePrev">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
						stroke-linejoin="round">
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>

				<button class="vuecalendar__nav-btn vuecalendar__nav-btn--text" type="button" @click="navigateToday">
					{{ mergedLabels.today }}
				</button>

				<button class="vuecalendar__nav-btn" type="button" title="Next" @click="navigateNext">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
						stroke-linejoin="round">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				<VueDatePicker v-model="datePicker" :placeholder="mergedLabels.datePickerPlaceholder" :locale="locale"
					@date-select="onDatePickerSelect" />

				<span class="vuecalendar__header-label">{{ headerLabel }}</span>

				<div class="vuecalendar__nav-right">
					<label v-if="!hasResources" class="vuecalendar__view-select-wrap">
						<select class="vuecalendar__view-select" :value="currentView"
							@change="setView($event.target.value)">
							<option v-for="viewOption in viewOptions" :key="viewOption.key" :value="viewOption.key">
								{{ viewOption.label }}
							</option>
						</select>
					</label>
				</div>
			</div>

			<Transition v-if="currentView === 'week' || currentView === 'day'" :name="navTransition" mode="out-in">
				<VueCalendarWeekView :key="weekKey" ref="weekViewRef" :days="visibleDays" :events="filteredEvents"
					:calendars="calendars" :selected-calendar-id="selectedCalendarId" :sidebar-drag="sidebarDrag"
					:saved-scroll-top="savedScrollTop" :workday-start="workdayStart" :workday-end="workdayEnd"
					:drawing-enabled="drawingEnabled" :event-width="eventWidth" :grid-height="gridHeight"
					:grid-step="gridStep" :draw-grid-step="resolvedDrawGridStep"
					:interaction-grid-step="resolvedInteractionGridStep" :resizing-enabled="resizingEnabled"
					:time-axis-format-options="timeAxisFormatOptions" :day-boundaries="dayBoundaries"
					:fit-full-day-height="fitFullDayHeight" :zoom-level="weekViewZoom"
					:blocked-label="mergedLabels.blocked" :allow-overlap="resolvedAllowOverlap" :locale="locale"
					:before-event-update="beforeEventUpdate" @event-click="forwardEvent('event-click', $event)"
					@event-dblclick="forwardEvent('event-dblclick', $event)"
					@event-update="forwardEvent('event-update', $event)"
					@draw-event="forwardPluginEvent('draw-event', $event)"
					@slot-click="forwardEvent('slot-click', $event)" @update:saved-scroll-top="savedScrollTop = $event">
					<template v-if="$slots.event" #event="slotProps">
						<slot name="event" v-bind="slotProps" />
					</template>
					<template v-if="$slots['day-header']" #day-header="slotProps">
						<slot name="day-header" v-bind="slotProps" />
					</template>
				</VueCalendarWeekView>
			</Transition>

			<Transition v-if="currentView === 'resource'" :name="navTransition" mode="out-in">
				<VueCalendarResourceView :key="`resource-${weekKey}`" :days="visibleDays" :events="filteredEvents"
					:calendars="calendars" :resources="resources" :workday-start="workdayStart"
					:workday-end="workdayEnd" :event-width="eventWidth" :grid-height="gridHeight" :grid-step="gridStep"
					:time-axis-format-options="timeAxisFormatOptions" :day-boundaries="dayBoundaries"
					:fit-full-day-height="fitFullDayHeight" :zoom-level="weekViewZoom" :locale="locale"
					@event-click="forwardEvent('event-click', $event)"
					@event-dblclick="forwardEvent('event-dblclick', $event)">
					<template v-if="$slots.event" #event="slotProps">
						<slot name="event" v-bind="slotProps" />
					</template>
				</VueCalendarResourceView>
			</Transition>

			<VueCalendarMonthView v-if="currentView === 'month'" :year="currentDate.year" :month="currentDate.month"
				:events="filteredEvents" :calendars="calendars" :locale="locale" :more-label="mergedLabels.more"
				:is-mobile="isMobile" :selected-date="currentDate.toString()"
				@event-click="forwardEvent('event-click', $event)" @day-click="onMonthDayClick">
				<template v-if="$slots['month-event']" #month-event="slotProps">
					<slot name="month-event" v-bind="slotProps" />
				</template>
			</VueCalendarMonthView>

			<VueCalendarListView v-if="currentView === 'list'" :date="currentDate" :events="filteredEvents"
				:calendars="calendars" :locale="locale" :empty-label="mergedLabels.noEvents"
				@event-click="forwardEvent('event-click', $event)" />

			<slot v-if="$slots['event-modal']" name="event-modal" v-bind="eventModalSlotProps" />
		</div>
	</div>

	<Teleport to="body">
		<div v-if="dragEnabled && sidebarDrag.active && sidebarDragCalendar" class="vuecalendar__drag-ghost" :style="{
			left: `${mousePos.x + 14}px`,
			top: `${mousePos.y + 14}px`,
			background: sidebarDragCalendar.lightColors.container,
			borderLeft: `4px solid ${sidebarDragCalendar.lightColors.main}`,
			color: sidebarDragCalendar.lightColors.onContainer,
		}">
			<svg class="vuecalendar__drag-ghost-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
				stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
				<line x1="16" y1="2" x2="16" y2="6" />
				<line x1="8" y1="2" x2="8" y2="6" />
				<line x1="3" y1="10" x2="21" y2="10" />
			</svg>
			{{ sidebarDragCalendar.label }}
		</div>
	</Teleport>
</template>


<script setup>
import { computed, nextTick, onBeforeMount, ref, toRef, watch, watchEffect } from 'vue';
import { normalizeEventDate } from '../utils/temporal.js';
import { useNavTransition } from '../composables/useNavTransition.js';
import VueDatePicker from './VueDatePicker.vue';
import VueCalendarWeekView from './VueCalendarWeekView.vue';
import VueCalendarMonthView from './VueCalendarMonthView.vue';
import VueCalendarListView from './VueCalendarListView.vue';
import VueCalendarResourceView from './VueCalendarResourceView.vue';
import { useCalendarLabels } from '../composables/useCalendarLabels.js';
import { useCalendarNavigation } from '../composables/useCalendarNavigation.js';
import { useCalendarResponsive } from '../composables/useCalendarResponsive.js';
import { usePluginBus } from '../composables/usePluginBus.js';
import { useSidebarDrag } from '../composables/useSidebarDrag.js';
import { useCalendarPlugins } from '../composables/useCalendarPlugins.js';
import { useCalendarVisibility } from '../composables/useCalendarVisibility.js';
import { normalizeGridStep } from '../utils/weekViewMath.js';

import '../styles/tokens.css';
import '../styles/nav-transition.css';
import '../styles/calendar.css';

const props = defineProps({
	/**
	 * Calendar type definitions keyed by ID.
	 * Each entry needs `label` and `lightColors: { main, container, onContainer }`.
	 */
	calendars: { type: Object, default: () => ({}) },
	/** Show the left category sidebar. Automatically hidden on mobile. */
	showSidebar: { type: Boolean, default: true },
	/** Subset of calendar IDs to show in the sidebar. */
	sidebarCalendarIds: { type: Array, default: () => [] },
	/** Initial view. Narrow layouts automatically switch to day view. Supports day, week, month, list, and resource. */
	initialView: { type: String, default: 'week' },
	/** Date to navigate to on mount, as `YYYY-MM-DD`. */
	initialDate: { type: String, default: null },
	/** Number of days to display in week view. */
	nDays: { type: Number, default: 7 },
	/** Resource definitions used by the resource time-grid view. */
	resources: { type: Array, default: () => [] },
	/** Locale used throughout the calendar. */
	locale: { type: String, default: 'en' },
	/** Hour at which workday shading starts. */
	workdayStart: { type: Number, default: 7 },
	/** Hour at which workday shading ends. */
	workdayEnd: { type: Number, default: 18 },
	/** Visible time boundaries for day and week views. */
	dayBoundaries: { type: Object, default: () => ({ start: '00:00', end: '24:00' }) },
	/** Explicit height for the calendar shell in px. */
	gridHeight: { type: Number, default: null },
	/** Width percentage of event cards inside the week/day grid. */
	eventWidth: { type: Number, default: 100 },
	/** Intl.DateTimeFormatOptions used for the time axis labels. */
	timeAxisFormatOptions: { type: Object, default: () => ({ hour: 'numeric' }) },
	/** Fits full-day boundaries to the available height instead of using 24-hour scroll. */
	fitFullDayHeight: { type: Boolean, default: true },
	/** Whether overlapping events are allowed. */
	allowOverlap: { type: Boolean, default: false },
	/** Alias for overlap behavior. When provided, it overrides allowOverlap. */
	eventOverlap: { type: Boolean, default: null },
	/** Time-grid interval in minutes for day and week views. */
	gridStep: { type: Number, default: 60 },
	/** UI label overrides for localization/customization. */
	labels: { type: Object, default: () => ({}) },
	/** Calendar plugins. */
	plugins: { type: Array, default: () => [] },
	/** Hook called before event drag/resize updates commit. */
	beforeEventUpdate: { type: Function, default: null },
	/** Async hook for fetching events for the current visible range. */
	fetchEvents: { type: Function, default: null },
	/** Hook called before initial render. */
	beforeRender: { type: Function, default: null },
	/** Hook called after mount. */
	onRender: { type: Function, default: null },
});

const emit = defineEmits(['range-update', 'event-click', 'event-dblclick', 'event-update', 'slot-click']);

const calendarRootEl = ref(null);
const weekViewRef = ref(null);
const selectedCalendarId = ref(null);
const internalEvents = ref([]);
const savedScrollTop = ref(-1);
const pendingScrollTime = ref(null);
const dragEnabled = ref(false);
const drawingEnabled = ref(false);
const resizingEnabled = ref(true);
const weekViewZoom = ref(1);
const drawGridStep = ref(null);
const resizeGridStep = ref(null);
const { navTransition, setNavDirection } = useNavTransition();
const pluginBus = usePluginBus();

const currentView = ref(props.initialView);
const { isMobile } = useCalendarResponsive(calendarRootEl, currentView, props.initialView);
const hasResources = computed(() => props.resources.length > 0);
const resolvedAllowOverlap = computed(() => props.eventOverlap ?? props.allowOverlap);
const resolvedDrawGridStep = computed(() => (
	drawGridStep.value ?? normalizeGridStep(props.gridStep)
));
const resolvedInteractionGridStep = computed(() => (
	resizeGridStep.value ?? normalizeGridStep(props.gridStep)
));
const {
	currentDate,
	datePicker,
	visibleDays,
	headerLabel,
	weekKey,
	navigatePrev,
	navigateNext,
	navigateToday,
	onDatePickerSelect,
	onMonthDayClick,
	setDate,
	setView,
	getRange,
} = useCalendarNavigation({
	initialDate: props.initialDate,
	initialView: props.initialView,
	currentView,
	isMobile,
	nDays: toRef(props, 'nDays'),
	locale: toRef(props, 'locale'),
	onNavigate: setNavDirection,
});

const {
	sidebarDrag,
	mousePos,
	sidebarDragCalendar,
	onSidebarItemMouseDown,
	setSidebarDrag,
	triggerSidebarDrop,
} = useSidebarDrag(toRef(props, 'calendars'), weekViewRef);

const mergedLabels = useCalendarLabels(toRef(props, 'locale'), toRef(props, 'labels'));
const {
	hiddenCalendarIds,
	hasHiddenCalendars,
	filteredEvents,
	isCalendarHidden,
	hideCalendar,
	showCalendar,
	toggleCalendarVisibility,
	showAllCalendars,
} = useCalendarVisibility({
	calendars: toRef(props, 'calendars'),
	events: internalEvents,
});

const sidebarCalendars = computed(() => {
	const ids = props.sidebarCalendarIds.length > 0
		? props.sidebarCalendarIds
		: Object.keys(props.calendars);

	return Object.fromEntries(
		ids
			.map((id) => [id, props.calendars[id]])
			.filter(([, calendar]) => Boolean(calendar))
	);
});

const viewOptions = computed(() => {
	if (hasResources.value) {
		return [{ key: 'resource', label: mergedLabels.value.viewResource }];
	}

	return [
		{ key: 'day', label: mergedLabels.value.viewDay },
		{ key: 'week', label: mergedLabels.value.viewWeek },
		{ key: 'month', label: mergedLabels.value.viewMonth },
		{ key: 'list', label: mergedLabels.value.viewList },
	];
});

watchEffect(() => {
	if (selectedCalendarId.value) {
		return;
	}

	const [firstCalendarId] = Object.keys(sidebarCalendars.value);
	if (firstCalendarId) {
		selectedCalendarId.value = firstCalendarId;
	}
});

watch(sidebarCalendars, (nextCalendars) => {
	if (!selectedCalendarId.value || nextCalendars[selectedCalendarId.value]) {
		return;
	}

	const [fallbackCalendarId] = Object.keys(nextCalendars);
	selectedCalendarId.value = fallbackCalendarId ?? null;
});

watch(hasResources, (nextHasResources) => {
	if (nextHasResources) {
		currentView.value = 'resource';
		return;
	}

	if (currentView.value !== 'resource') {
		return;
	}

	currentView.value = 'week';
}, { immediate: true });

watch(currentView, (nextView) => {
	if (nextView === 'resource' && !hasResources.value) {
		currentView.value = 'week';
	}
});

watch([currentView, weekKey], async () => {
	if (!pendingScrollTime.value || (currentView.value !== 'week' && currentView.value !== 'day')) {
		return;
	}

	await nextTick();

	if (weekViewRef.value?.scrollToTime?.(pendingScrollTime.value)) {
		pendingScrollTime.value = null;
	}
}, { flush: 'post' });

/**
 * Normalizes event date fields into the internal format used by the calendar.
 *
 * @param {object} event
 * @returns {object}
 */
const normalizeEvent = (event) => ({
	...event,
	start: normalizeEventDate(event.start),
	end: normalizeEventDate(event.end),
});

/**
 * Replaces all currently rendered events.
 *
 * @param {object[]} events
 */
const setEvents = (events) => {
	internalEvents.value = (events ?? []).map(normalizeEvent);
};

/**
 * Removes an event by ID.
 *
 * @param {string | number} id
 */
const removeEvent = (id) => {
	internalEvents.value = internalEvents.value.filter((event) => event.id !== id);
};

/**
 * Returns all currently loaded events.
 *
 * @returns {object[]}
 */
const getAllEvents = () => internalEvents.value;

/**
 * Scrolls the active day/week grid to a HH:MM time string.
 *
 * @param {string} timeValue
 * @returns {boolean}
 */
const scrollToTime = (timeValue) => {
	pendingScrollTime.value = timeValue;

	if ((currentView.value !== 'week' && currentView.value !== 'day') || !weekViewRef.value?.scrollToTime) {
		return false;
	}

	const didScroll = weekViewRef.value.scrollToTime(timeValue);

	if (didScroll) {
		pendingScrollTime.value = null;
	}

	return didScroll;
};

/**
 * Returns the current vertical scroll position of the active day/week grid.
 *
 * @returns {number}
 */
const getScrollTop = () => weekViewRef.value?.getScrollTop?.() ?? savedScrollTop.value;

/**
 * Returns the active zoom level used by day and week views.
 *
 * @returns {number}
 */
const getZoom = () => weekViewZoom.value;

/**
 * Applies a clamped zoom level to day and week views and notifies plugins.
 *
 * @param {number} nextZoom
 * @returns {number}
 */
const setZoom = (nextZoom) => {
	const parsedZoom = Number(nextZoom);
	const normalizedZoom = Number.isFinite(parsedZoom)
		? Math.min(2.5, Math.max(0.5, parsedZoom))
		: 1;

	weekViewZoom.value = normalizedZoom;
	pluginBus.emit('zoom-update', normalizedZoom);
	return normalizedZoom;
};

/**
 * Increases the active zoom level by the provided step.
 *
 * @param {number} [step=0.25]
 * @returns {number}
 */
const zoomIn = (step = 0.25) => setZoom(weekViewZoom.value + step);

/**
 * Decreases the active zoom level by the provided step.
 *
 * @param {number} [step=0.25]
 * @returns {number}
 */
const zoomOut = (step = 0.25) => setZoom(weekViewZoom.value - step);

/**
 * Restores the default zoom density.
 *
 * @returns {number}
 */
const resetZoom = () => setZoom(1);

/**
 * Enables mouse-driven draw creation in day and week views.
 */
const enableDrawing = () => {
	drawingEnabled.value = true;
};

/**
 * Disables mouse-driven draw creation in day and week views.
 */
const disableDrawing = () => {
	drawingEnabled.value = false;
};

/**
 * Enables resize handles and resize interactions in day and week views.
 */
const enableResize = () => {
	resizingEnabled.value = true;
};

/**
 * Disables resize handles and resize interactions in day and week views.
 */
const disableResize = () => {
	resizingEnabled.value = false;
};

/**
 * Returns the active snap/grid interval used by drawing interactions.
 *
 * @returns {number}
 */
const getGridStep = () => resolvedDrawGridStep.value;

/**
 * Overrides the active snap/grid interval used by drawing interactions.
 *
 * @param {number} nextGridStep
 * @returns {number}
 */
const setGridStep = (nextGridStep) => {
	drawGridStep.value = normalizeGridStep(nextGridStep);
	return resolvedDrawGridStep.value;
};

/**
 * Clears any plugin-level draw snap override and restores the prop-driven interval.
 *
 * @returns {number}
 */
const resetGridStep = () => {
	drawGridStep.value = null;
	return resolvedDrawGridStep.value;
};

/**
 * Returns the active snap/grid interval used by drag and resize interactions.
 *
 * @returns {number}
 */
const getResizeGridStep = () => resolvedInteractionGridStep.value;

/**
 * Overrides the active snap/grid interval used by drag and resize interactions.
 *
 * @param {number} nextGridStep
 * @returns {number}
 */
const setResizeGridStep = (nextGridStep) => {
	resizeGridStep.value = normalizeGridStep(nextGridStep);
	return resolvedInteractionGridStep.value;
};

/**
 * Clears any plugin-level drag/resize snap override and restores the prop-driven interval.
 *
 * @returns {number}
 */
const resetResizeGridStep = () => {
	resizeGridStep.value = null;
	return resolvedInteractionGridStep.value;
};

/**
 * Emits an interaction both to the component consumer and to plugin listeners.
 *
 * @param {'event-click' | 'event-dblclick' | 'event-update' | 'slot-click'} eventName
 * @param {unknown} payload
 */
const forwardEvent = (eventName, payload) => {
	emit(eventName, payload);
	pluginBus.emit(eventName, payload);
};

/**
 * Emits an internal plugin-only interaction without exposing it as a public component event.
 *
 * @param {string} eventName
 * @param {unknown} payload
 */
const forwardPluginEvent = (eventName, payload) => {
	pluginBus.emit(eventName, payload);
};

/**
 * Fetches events for the current visible range, guarding against stale async
 * responses when the user navigates quickly.
 */
let latestRangeRequestId = 0;
const syncVisibleRange = async ({ emitRangeUpdate = true } = {}) => {
	const range = getRange();

	if (emitRangeUpdate) {
		emit('range-update', range);
		pluginBus.emit('range-update', range);
	}

	if (!props.fetchEvents) {
		return;
	}

	const requestId = ++latestRangeRequestId;
	const events = await props.fetchEvents(range);

	if (requestId !== latestRangeRequestId || !Array.isArray(events)) {
		return;
	}

	setEvents(events);
};

syncVisibleRange({ emitRangeUpdate: false });
watch([currentDate, currentView], () => syncVisibleRange());

const calendarApi = {
	setDate,
	setView,
	getRange,
	setEvents,
	removeEvent,
	getAllEvents,
	scrollToTime,
	getScrollTop,
	getElement: () => calendarRootEl.value,
	on: pluginBus.on,
	off: pluginBus.off,
	getCalendars: () => props.calendars,
	getResources: () => props.resources,
	getSelectedCalendarId: () => selectedCalendarId.value,
	setSelectedCalendarId: (id) => { selectedCalendarId.value = id; },
	getZoom,
	setZoom,
	zoomIn,
	zoomOut,
	resetZoom,
	getGridStep,
	setGridStep,
	resetGridStep,
	getResizeGridStep,
	setResizeGridStep,
	resetResizeGridStep,
	enableDrawing,
	disableDrawing,
	isDrawingEnabled: () => drawingEnabled.value,
	enableResize,
	disableResize,
	isResizeEnabled: () => resizingEnabled.value,
	getHiddenCalendarIds: () => hiddenCalendarIds.value,
	hideCalendar,
	showCalendar,
	toggleCalendarVisibility,
	showAllCalendars,
	setSidebarDrag,
	triggerSidebarDrop,
	getSidebarDrag: () => sidebarDrag,
	enableSidebarDrag: () => { dragEnabled.value = true; },
	disableSidebarDrag: () => { dragEnabled.value = false; },
};

const { eventModalSlotProps } = useCalendarPlugins({
	plugins: toRef(props, 'plugins'),
	calendarApi,
	onRender: props.onRender,
});

onBeforeMount(() => {
	props.beforeRender?.(calendarApi);
});

defineExpose({
	setDate,
	setView,
	getRange,
	setEvents,
	removeEvent,
	getAllEvents,
	scrollToTime,
	getScrollTop,
	getZoom,
	setZoom,
	zoomIn,
	zoomOut,
	resetZoom,
	getGridStep,
	setGridStep,
	resetGridStep,
	getResizeGridStep,
	setResizeGridStep,
	resetResizeGridStep,
	enableDrawing,
	disableDrawing,
	isDrawingEnabled: () => drawingEnabled.value,
	enableResize,
	disableResize,
	isResizeEnabled: () => resizingEnabled.value,
	getHiddenCalendarIds: () => hiddenCalendarIds.value,
	hideCalendar,
	showCalendar,
	toggleCalendarVisibility,
	showAllCalendars,
});
</script>
