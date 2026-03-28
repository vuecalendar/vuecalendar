import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const DEFAULT_EVENT_MODAL_STATE = Object.freeze({
    open: false,
    mode: 'create',
    event: null,
    draft: null,
    source: null,
    editable: true,
});

/**
 * Centralizes plugin lifecycle wiring and the event-modal slot bridge so the
 * main calendar component stays focused on rendering and top-level state.
 *
 * @param {object} options
 * @param {import('vue').Ref<object[]>} options.plugins
 * @param {object} options.calendarApi
 * @param {(api: object) => void | null | undefined} options.onRender
 * @returns {{
 *   eventModalSlotProps: import('vue').ComputedRef<{
 *     open: boolean,
 *     mode: string,
 *     event: object | null,
 *     draft: object | null,
 *     source: object | null,
 *     editable: boolean,
 *     close: () => void,
 *     save: (nextDraft?: object) => unknown,
 *     remove: (eventId?: string | number) => unknown,
 *     updateDraft: (patch: object) => void,
 *     setDraft: (nextDraft: object | null) => void
 *   }>
 * }}
 */
export const useCalendarPlugins = ({ plugins, calendarApi, onRender }) => {
    const eventModalState = ref({ ...DEFAULT_EVENT_MODAL_STATE });
    let unsubscribeEventModal = null;

    /**
     * Active event-modal plugin, when present.
     */
    const eventModalPlugin = computed(() => (
        plugins.value.find((plugin) => plugin?.name === 'eventModal') ?? null
    ));

    /**
     * Slot props exposed to custom modal UIs. The plugin owns state and
     * actions, while the consumer owns the rendered dialog.
     */
    const eventModalSlotProps = computed(() => {
        const plugin = eventModalPlugin.value;

        return {
            open: eventModalState.value.open,
            mode: eventModalState.value.mode,
            event: eventModalState.value.event,
            draft: eventModalState.value.draft,
            source: eventModalState.value.source,
            editable: eventModalState.value.editable,
            close: () => {
                plugin?.close?.();
            },
            save: (nextDraft) => plugin?.save?.(nextDraft),
            remove: (eventId) => plugin?.remove?.(eventId),
            updateDraft: (patch) => {
                plugin?.updateDraft?.(patch);
            },
            setDraft: (nextDraft) => {
                plugin?.setDraft?.(nextDraft);
            },
        };
    });

    onMounted(() => {
        plugins.value.forEach((plugin) => {
            plugin.install?.(calendarApi);
        });

        unsubscribeEventModal = eventModalPlugin.value?.subscribe?.((state) => {
            eventModalState.value = {
                ...DEFAULT_EVENT_MODAL_STATE,
                ...state,
            };
        }) ?? null;

        onRender?.(calendarApi);
    });

    onBeforeUnmount(() => {
        unsubscribeEventModal?.();
        unsubscribeEventModal = null;

        plugins.value.forEach((plugin) => {
            plugin.destroy?.();
        });
    });

    return {
        eventModalSlotProps,
    };
};
