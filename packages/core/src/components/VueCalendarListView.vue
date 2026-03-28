<template>
    <div class="vuecalendar-list ht-list">
        <div class="vuecalendar-list__header ht-list__header">
            <span class="vuecalendar-list__day-label ht-list__day-label">{{ dayLabel }}</span>
        </div>

        <div v-if="items.length === 0" class="vuecalendar-list__empty ht-list__empty">
            {{ emptyLabel }}
        </div>

        <template v-else>
            <button
                v-for="item in items"
                :key="item.event.id"
                type="button"
                class="vuecalendar-list__item ht-list__item"
                :style="itemStyle(item.event)"
                @click="$emit('event-click', item.event)"
            >
                <div class="vuecalendar-list__title ht-list__title">
                    {{ item.event.title }}
                </div>

                <div class="vuecalendar-list__meta ht-list__meta">
                    <span v-if="item.timePrimary" class="vuecalendar-list__time-primary ht-list__time-primary">
                        {{ item.timePrimary }}
                    </span>
                    <span v-if="item.timeSecondary" class="vuecalendar-list__time-secondary ht-list__time-secondary">
                        {{ item.timeSecondary }}
                    </span>
                </div>
            </button>
        </template>
    </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useListView } from '../composables/useListView.js';
import '../styles/list-view.css';

const props = defineProps({
    /** Selected day shown by the list view. */
    date: { type: Object, required: true },
    /** Events available in the active calendar range. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Locale used for labels and times. */
    locale: { type: String, default: 'en' },
    /** Message shown when there are no events on the selected day. */
    emptyLabel: { type: String, default: 'No events' },
});

defineEmits(['event-click']);

const {
    dayLabel,
    items,
    itemStyle,
} = useListView({
    date: toRef(props, 'date'),
    events: toRef(props, 'events'),
    calendars: toRef(props, 'calendars'),
    locale: toRef(props, 'locale'),
});
</script>
