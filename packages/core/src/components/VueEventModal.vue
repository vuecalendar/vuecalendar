<template>
    <Teleport to="body">
        <div
            v-if="open"
            class="vuecalendar-event-modal__backdrop"
            @mousedown.self="onBackdropMouseDown"
        >
            <div
                ref="cardEl"
                class="vuecalendar-event-modal"
                :class="{
                    'vuecalendar-event-modal--movable': movable,
                    'vuecalendar-event-modal--floating': isFloating,
                    'vuecalendar-event-modal--moving': dragging,
                }"
                :style="cardStyle"
            >
                <div class="vuecalendar-event-modal__header" @mousedown="onHeaderMouseDown">
                    <div>
                        <p class="vuecalendar-event-modal__eyebrow">Event Modal</p>
                        <h3 class="vuecalendar-event-modal__title">
                            {{ mode === 'edit' ? 'Edit event' : 'Create event' }}
                        </h3>
                    </div>
                    <button class="vuecalendar-event-modal__icon-btn" type="button" @click="close?.()">
                        Close
                    </button>
                </div>

                <div class="vuecalendar-event-modal__body">
                    <label v-if="!hideTitle" class="vuecalendar-event-modal__field">
                        <span>Title</span>
                        <input
                            :value="draft?.title ?? ''"
                            type="text"
                            :placeholder="titlePlaceholder"
                            @input="updateDraft?.({ title: $event.target.value })"
                        />
                    </label>

                    <label class="vuecalendar-event-modal__field">
                        <span>Calendar</span>
                        <select
                            :value="draft?.calendarId ?? ''"
                            @change="updateDraft?.({ calendarId: $event.target.value })"
                        >
                            <option
                                v-for="(calendar, calendarId) in calendars"
                                :key="calendarId"
                                :value="calendarId"
                            >
                                {{ calendar.label }}
                            </option>
                        </select>
                    </label>

                    <div class="vuecalendar-event-modal__grid">
                        <label class="vuecalendar-event-modal__field">
                            <span>Start</span>
                            <input
                                :value="toDateTimeLocal(draft?.start)"
                                type="datetime-local"
                                @input="updateDraft?.({ start: fromDateTimeLocal($event.target.value) })"
                            />
                        </label>

                        <label class="vuecalendar-event-modal__field">
                            <span>End</span>
                            <input
                                :value="toDateTimeLocal(draft?.end)"
                                type="datetime-local"
                                @input="updateDraft?.({ end: fromDateTimeLocal($event.target.value) })"
                            />
                        </label>
                    </div>

                    <label class="vuecalendar-event-modal__field">
                        <span>Description</span>
                        <textarea
                            rows="4"
                            :value="draft?.description ?? ''"
                            @input="updateDraft?.({ description: $event.target.value })"
                        />
                    </label>

                    <slot
                        name="fields"
                        :draft="draft"
                        :mode="mode"
                        :editable="editable"
                        :updateDraft="updateDraft"
                        :setDraft="setDraft"
                    />
                </div>

                <div class="vuecalendar-event-modal__footer">
                    <button class="vuecalendar-event-modal__btn" type="button" @click="close?.()">
                        Cancel
                    </button>
                    <button
                        v-if="mode === 'edit'"
                        class="vuecalendar-event-modal__btn vuecalendar-event-modal__btn--danger"
                        type="button"
                        :disabled="!editable || busy"
                        @click="onDeleteClick"
                    >
                        Delete
                    </button>
                    <button
                        class="vuecalendar-event-modal__btn vuecalendar-event-modal__btn--primary"
                        type="button"
                        :disabled="!editable || busy"
                        @click="onSaveClick"
                    >
                        {{ mode === 'edit' ? 'Save event' : 'Create event' }}
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, toRef, watch } from 'vue';
import '../styles/event-modal.css';
import { useEventModalDrag } from '../composables/useEventModalDrag.js';

const props = defineProps({
    /** Whether the modal should be shown. */
    open: { type: Boolean, default: false },
    /** Current modal mode. */
    mode: { type: String, default: 'create' },
    /** Current event draft. */
    draft: { type: Object, default: null },
    /** Existing event when editing. */
    event: { type: Object, default: null },
    /** Whether save and delete actions should be available. */
    editable: { type: Boolean, default: true },
    /** Calendar definitions used by the calendar selector. */
    calendars: { type: Object, default: () => ({}) },
    /** Close callback supplied by the event-modal slot contract. */
    close: { type: Function, default: null },
    /** Save callback supplied by the event-modal slot contract. */
    save: { type: Function, default: null },
    /** Delete callback supplied by the event-modal slot contract. */
    remove: { type: Function, default: null },
    /** Draft patch helper from the event-modal slot contract. */
    updateDraft: { type: Function, default: null },
    /** Draft replacement helper from the event-modal slot contract. */
    setDraft: { type: Function, default: null },
    /** Prevent closing the modal when clicking the backdrop. */
    preventClosingOnClickOutside: { type: Boolean, default: false },
    /** Adds a draggable bar at the top of the modal. */
    movable: { type: Boolean, default: false },
    /** Hides the default title input field. */
    hideTitle: { type: Boolean, default: false },
    /** Placeholder shown for the title input. */
    titlePlaceholder: { type: String, default: 'Event title' },
});

const cardEl = ref(null);
const busy = ref(false);
const { dragging, isFloating, cardStyle, onHeaderMouseDown } = useEventModalDrag({
    open: toRef(props, 'open'),
    movable: toRef(props, 'movable'),
    cardEl,
});

function toDateTimeLocal(value) {
    return value ? String(value).replace(' ', 'T') : '';
}

function fromDateTimeLocal(value) {
    return value ? value.replace('T', ' ') : null;
}

function onBackdropMouseDown() {
    if (!props.preventClosingOnClickOutside) {
        props.close?.();
    }
}

async function onSaveClick() {
    if (!props.save || busy.value || !props.editable) {
        return;
    }

    busy.value = true;

    try {
        await props.save(props.draft);
    } finally {
        busy.value = false;
    }
}

async function onDeleteClick() {
    if (!props.remove || busy.value || !props.editable) {
        return;
    }

    busy.value = true;

    try {
        await props.remove(props.draft?.id);
    } finally {
        busy.value = false;
    }
}

watch(() => props.open, (isOpen) => {
    if (!isOpen) {
        busy.value = false;
    }
});
</script>
