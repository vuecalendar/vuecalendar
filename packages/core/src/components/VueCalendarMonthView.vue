<template>
    <div class="vuecalendar-month ht-month" :class="{ 'vuecalendar-month--mobile': isMobile, 'ht-month--mobile': isMobile }">
        <div class="vuecalendar-month__dow-row ht-month__dow-row">
            <div v-for="label in dayLabels" :key="label" class="vuecalendar-month__dow ht-month__dow">
                {{ label }}
            </div>
        </div>

        <div class="vuecalendar-month__grid ht-month__grid">
            <div
                v-for="(day, index) in calendarDays"
                :key="index"
                class="vuecalendar-month__cell ht-month__cell"
                :class="{
                    'vuecalendar-month__cell--other': !isCurrentMonth(day),
                    'vuecalendar-month__cell--today': isToday(day),
                    'vuecalendar-month__cell--selected': isMobile && selectedDayKey === day.toString(),
                    'ht-month__cell--other': !isCurrentMonth(day),
                    'ht-month__cell--today': isToday(day),
                    'ht-month__cell--selected': isMobile && selectedDayKey === day.toString(),
                }"
                @click="handleDayClick(day)"
            >
                <div
                    class="vuecalendar-month__day-num ht-month__day-num"
                    :class="{
                        'vuecalendar-month__day-num--today': isToday(day),
                        'vuecalendar-month__day-num--other': !isCurrentMonth(day),
                        'ht-month__day-num--today': isToday(day),
                        'ht-month__day-num--other': !isCurrentMonth(day),
                    }"
                >
                    {{ String(day.day) }}
                </div>

                <div class="vuecalendar-month__events ht-month__events" :class="{ 'vuecalendar-month__events--mobile': isMobile }">
                    <template v-if="isMobile">
                        <span
                            v-for="event in getVisibleDots(day)"
                            :key="event.id"
                            class="vuecalendar-month__dot ht-month__dot"
                            :style="eventDotStyle(event)"
                        />
                    </template>

                    <template v-for="event in getVisibleEvents(day)" :key="event.id">
                        <slot
                            v-if="!isMobile"
                            name="month-event"
                            :event="event"
                            :calendar="calendars[event.calendarId]"
                            :colors="calendars[event.calendarId]?.lightColors"
                            :on-event-click="(domEvent) => { domEvent.stopPropagation(); $emit('event-click', event); }"
                        >
                            <div
                                class="vuecalendar-month__badge ht-month__badge"
                                :style="eventBadgeStyle(event)"
                                @click.stop="$emit('event-click', event)"
                            >
                                {{ event.title }}
                            </div>
                        </slot>
                    </template>

                    <div v-if="!isMobile && getEventsForDay(day).length > maxVisible" class="vuecalendar-month__more ht-month__more">
                        +{{ getEventsForDay(day).length - maxVisible }} {{ moreLabel }}
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isMobile" class="vuecalendar-month__agenda ht-month__agenda">
            <template v-if="selectedDayEvents.length > 0">
                <button
                    v-for="event in selectedDayEvents"
                    :key="event.id"
                    type="button"
                    class="vuecalendar-month__agenda-item ht-month__agenda-item"
                    :style="eventBadgeStyle(event)"
                    @click="$emit('event-click', event)"
                >
                    <span class="vuecalendar-month__agenda-title ht-month__agenda-title">{{ event.title }}</span>
                    <span class="vuecalendar-month__agenda-range ht-month__agenda-range">{{ formatAgendaRange(event) }}</span>
                </button>
            </template>
            <div v-else class="vuecalendar-month__agenda-empty ht-month__agenda-empty">
                No events
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, toRef, watch } from 'vue';
import { Temporal, isToday, normalizeToPlainDateTime } from '../utils/temporal.js';
import { useMonthGrid } from '../composables/useMonthGrid.js';
import '../styles/month-view.css';

const props = defineProps({
    /** Full year (for example `2026`). */
    year: { type: Number, required: true },
    /** Month number in Temporal format, where January is `1`. */
    month: { type: Number, required: true },
    /** Events shown inside the month cells. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Locale used for weekday labels. */
    locale: { type: String, default: 'en' },
    /** Compact mode used on small screens. */
    isMobile: { type: Boolean, default: false },
    /** Currently selected anchor date. */
    selectedDate: { type: String, default: null },
    /** Maximum number of visible badges per day cell. */
    maxVisible: { type: Number, default: 3 },
    /** Localized suffix for the overflow indicator. */
    moreLabel: { type: String, default: 'more' },
});

const emit = defineEmits(['event-click', 'day-click']);

const {
    dayLabels,
    calendarDays,
    getEventsForDay,
    getVisibleEvents,
    isCurrentMonth,
    eventBadgeStyle,
} = useMonthGrid({
    year: toRef(props, 'year'),
    month: toRef(props, 'month'),
    locale: toRef(props, 'locale'),
    events: toRef(props, 'events'),
    calendars: toRef(props, 'calendars'),
    maxVisible: toRef(props, 'maxVisible'),
});

const selectedDayKey = ref(props.selectedDate);

watch(
    () => [props.selectedDate, props.year, props.month],
    ([nextSelectedDate]) => {
        const fallbackDate = Temporal.PlainDate.from({
            year: props.year,
            month: props.month,
            day: 1,
        }).toString();

        selectedDayKey.value = nextSelectedDate ?? selectedDayKey.value ?? fallbackDate;
    },
    { immediate: true },
);

const selectedDay = computed(() => {
    try {
        return Temporal.PlainDate.from(selectedDayKey.value);
    } catch {
        return Temporal.PlainDate.from({
            year: props.year,
            month: props.month,
            day: 1,
        });
    }
});

const selectedDayEvents = computed(() => getEventsForDay(selectedDay.value));

const getVisibleDots = (day) => getEventsForDay(day).slice(0, 4);

const eventDotStyle = (event) => {
    const badgeStyle = eventBadgeStyle(event);
    return { background: badgeStyle.borderLeft.replace('3px solid ', '') };
};

const formatAgendaRange = (event) => {
    const start = normalizeToPlainDateTime(event.start);
    const end = normalizeToPlainDateTime(event.end);

    if (!start || !end) {
        return '';
    }

    const hasTime = String(event.start).includes(' ') || String(event.start).includes('T');
    const dateFormatter = new Intl.DateTimeFormat(props.locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    if (!hasTime) {
        return `${dateFormatter.format(new Date(start.year, start.month - 1, start.day))} - ${dateFormatter.format(new Date(end.year, end.month - 1, end.day))}`;
    }

    const timeFormatter = new Intl.DateTimeFormat(props.locale, {
        hour: 'numeric',
        minute: '2-digit',
    });

    return `${timeFormatter.format(new Date(start.year, start.month - 1, start.day, start.hour, start.minute))} - ${timeFormatter.format(new Date(end.year, end.month - 1, end.day, end.hour, end.minute))}`;
};

const handleDayClick = (day) => {
    if (props.isMobile) {
        selectedDayKey.value = day.toString();
        return;
    }

    emit('day-click', day.toString());
};
</script>
