<template>
    <div ref="rootEl" class="vuecalendar-date-picker">
        <button
            class="vuecalendar-date-picker__input"
            type="button"
            :title="displayValue || placeholder"
            :aria-label="displayValue || placeholder"
            @click="toggle"
        >
            <span class="vuecalendar-date-picker__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            </span>
        </button>

        <div v-if="open" class="vuecalendar-date-picker__panel">
            <div class="vuecalendar-date-picker__header">
                <button class="vuecalendar-date-picker__nav-btn" type="button" @click="prevMonth">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <span class="vuecalendar-date-picker__month-label">{{ panelLabel }}</span>
                <button class="vuecalendar-date-picker__nav-btn" type="button" @click="nextMonth">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            <div class="vuecalendar-date-picker__dow-row">
                <span v-for="label in dowLabels" :key="label" class="vuecalendar-date-picker__dow">{{ label }}</span>
            </div>

            <div class="vuecalendar-date-picker__grid">
                <button
                    v-for="cell in cells"
                    :key="cell.key"
                    type="button"
                    class="vuecalendar-date-picker__day"
                    :class="{
                        'vuecalendar-date-picker__day--other': !cell.current,
                        'vuecalendar-date-picker__day--today': cell.isToday,
                        'vuecalendar-date-picker__day--selected': cell.isSelected,
                    }"
                    @click="selectDay(cell.date)"
                >
                    {{ cell.label }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, toRef } from 'vue';
import { useDatePickerState } from '../composables/useDatePickerState.js';
import { useOutsidePointerDown } from '../composables/useOutsidePointerDown.js';
import '../styles/date-picker.css';

const props = defineProps({
    /** Currently selected date as a JS Date or `null`. */
    modelValue: { type: Date, default: null },
    /** Placeholder shown in the input when no date is selected. */
    placeholder: { type: String, default: 'Select date' },
    /** Locale used for month and weekday labels. */
    locale: { type: String, default: 'en' },
});

const emit = defineEmits(['update:modelValue', 'date-select']);

const rootEl = ref(null);

const {
    open,
    displayValue,
    panelLabel,
    dowLabels,
    cells,
    toggle,
    close,
    prevMonth,
    nextMonth,
    selectDay,
} = useDatePickerState({
    modelValue: toRef(props, 'modelValue'),
    locale: toRef(props, 'locale'),
    emit,
});

useOutsidePointerDown(rootEl, close);
</script>
