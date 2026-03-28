<template>
    <div
        class="vuecalendar-event ht-event"
        :data-event-id="event.id"
        :style="eventStyle"
        @mousedown.stop="onBodyMousedown"
        @click.stop="emit('click', props.event)"
    >
        <slot
            :event="event"
            :calendar="calendar"
            :colors="colors"
            :event-height="eventHeight"
            :format-time="formatTime"
        >
            <div class="vuecalendar-event__header ht-event__header">
                <span class="vuecalendar-event__title ht-event__title">{{ event.title }}</span>
                <svg
                    v-if="event.locked"
                    class="vuecalendar-event__icon ht-event__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            </div>

            <div v-if="eventHeight > 40" class="vuecalendar-event__time ht-event__time">
                <svg class="vuecalendar-event__icon ht-event__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
                {{ formatTime(event.start) }} - {{ formatTime(event.end) }}
            </div>

            <div v-if="eventHeight > 64 && event.description" class="vuecalendar-event__desc ht-event__desc">
                <svg class="vuecalendar-event__icon ht-event__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                {{ event.description }}
            </div>
        </slot>

        <div
            v-if="resizable"
            class="vuecalendar-event__resize-handle ht-event__resize-handle"
            @mousedown.stop="onResizeMousedown"
        />
    </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useCalendarEvent } from '../composables/useCalendarEvent.js';
import '../styles/calendar-event.css';

const props = defineProps({
    /**
     * Event model rendered by this card.
     * Required fields: `id`, `title`, `calendarId`, `start`, `end`.
     */
    event: { type: Object, required: true },

    /**
     * Resolved calendar configuration for the event.
     */
    calendar: { type: Object, default: () => ({}) },

    /**
     * Height of one hour in the active week/day grid.
     */
    hourHeight: { type: Number, default: 64 },

    /**
     * Width percentage of the rendered event inside its column.
     */
    eventWidth: { type: Number, default: 100 },

    /**
     * Zero-based overlap column index for this event.
     */
    col: { type: Number, default: 0 },

    /**
     * Total number of overlap columns in this collision group.
     */
    totalCols: { type: Number, default: 1 },

    /**
     * Minutes from midnight represented by the top of the visible grid.
     */
    offsetMinutes: { type: Number, default: 0 },

    /**
     * Whether the event should expose its resize handle.
     */
    resizable: { type: Boolean, default: true },
});

const emit = defineEmits(['click', 'drag-start', 'resize-start']);

const {
    colors,
    eventHeight,
    eventStyle,
    formatTime,
} = useCalendarEvent({
    event: toRef(props, 'event'),
    calendar: toRef(props, 'calendar'),
    hourHeight: toRef(props, 'hourHeight'),
    eventWidth: toRef(props, 'eventWidth'),
    col: toRef(props, 'col'),
    totalCols: toRef(props, 'totalCols'),
    offsetMinutes: toRef(props, 'offsetMinutes'),
});

/**
 * Starts dragging the event body unless the pointer is already inside the
 * resize handle hit area.
 *
 * @param {MouseEvent} event
 */
const onBodyMousedown = (event) => {
    if (event.button !== 0) {
        return;
    }

    if (event.clientY > event.currentTarget.getBoundingClientRect().bottom - 8) {
        return;
    }

    emit('drag-start', event);
};

/**
 * Starts resizing the event from the bottom handle.
 *
 * @param {MouseEvent} event
 */
const onResizeMousedown = (event) => {
    if (event.button !== 0) {
        return;
    }

    emit('resize-start', event);
};
</script>
