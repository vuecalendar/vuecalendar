import { addMinutesToDate, definePlugin, normalizeEventDate, Temporal } from '@vuecalendar/core';

const DEFAULT_OPTIONS = {
    openOnEventClick: true,
    openOnSlotClick: true,
    openOnDraw: true,
    closeOnSave: true,
    closeOnDelete: true,
    createDurationMinutes: 60,
    buildDraft: null,
    onAddEvent: null,
    onAddEventAsync: null,
    onDeleteEvent: null,
    onStartUpdate: null,
    onEndUpdate: null,
    canOpenModal: null,
    isEventEditable: null,
};

/**
 * Creates a simple unique event ID for newly saved modal drafts.
 *
 * @returns {string}
 */
function buildEventId() {
    return `event-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Returns the first available calendar ID from the current calendar map.
 *
 * @param {object | null | undefined} calendars
 * @returns {string | null}
 */
function getFirstCalendarId(calendars) {
    return Object.keys(calendars ?? {})[0] ?? null;
}

/**
 * Returns a normalized copy of an event-like draft object.
 *
 * @param {object | null | undefined} draft
 * @returns {object | null}
 */
function normalizeDraftShape(draft) {
    if (!draft) {
        return null;
    }

    return {
        ...draft,
        start: normalizeEventDate(draft.start),
        end: normalizeEventDate(draft.end),
    };
}

/**
 * Builds a default draft from slot-click or draw payloads.
 *
 * @param {object} source
 * @param {number} createDurationMinutes
 * @param {string | null} fallbackCalendarId
 * @returns {object}
 */
function buildDefaultCreateDraft(source, createDurationMinutes, fallbackCalendarId) {
    const start = normalizeEventDate(source.start ?? source.dateTime);
    const end = normalizeEventDate(source.end);
    const calendarId = source.calendarId ?? fallbackCalendarId;

    if (!start) {
        return {
            id: '',
            title: '',
            calendarId,
            start: null,
            end: null,
            description: '',
        };
    }

    const normalizedEnd = end ?? addMinutesToDate(
        Temporal.PlainDate.from(String(start).slice(0, 10)),
        (Number(String(start).slice(11, 13)) * 60) +
        Number(String(start).slice(14, 16)) +
        createDurationMinutes,
    );

    return {
        id: '',
        title: '',
        calendarId,
        start,
        end: normalizedEnd,
        description: '',
    };
}

/**
 * Creates a headless event-modal plugin. The plugin owns modal state and CRUD
 * helpers, while the calendar consumer renders the actual dialog through the
 * `event-modal` slot.
 *
 * @param {{
 *   openOnEventClick?: boolean,
 *   openOnSlotClick?: boolean,
 *   openOnDraw?: boolean,
 *   closeOnSave?: boolean,
 *   closeOnDelete?: boolean,
 *   createDurationMinutes?: number,
 *   onAddEvent?: ((event: object, context: object) => void),
 *   onAddEventAsync?: ((event: object, context: object) => Promise<object | boolean | void>),
 *   onDeleteEvent?: ((eventId: string | number, context: object) => void),
 *   onStartUpdate?: ((start: string | null, draft: object | null, context: object) => void),
 *   onEndUpdate?: ((end: string | null, draft: object | null, context: object) => void),
 *   canOpenModal?: ((context: object) => boolean),
 *   isEventEditable?: ((event: object | null) => boolean),
 *   buildDraft?: ((context: {
 *     mode: 'create' | 'edit',
 *     source: object,
 *     baseDraft: object,
 *     calendars: object,
 *     selectedCalendarId: string | null,
 *   }) => object | null | undefined),
 * }} [options]
 * @returns {object}
 */
export function createEventModalPlugin(options = {}) {
    let $cal = null;
    let unsubscribeEventClick = null;
    let unsubscribeSlotClick = null;
    let unsubscribeDrawEvent = null;
    const subscribers = new Set();

    const settings = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const state = {
        open: false,
        mode: 'create',
        event: null,
        draft: null,
        source: null,
        editable: true,
    };

    /**
     * Builds a hook context object for open/save/delete/update callbacks.
     *
     * @param {Partial<typeof state>} [overrides]
     * @returns {object}
     */
    const buildContext = (overrides = {}) => {
        const nextState = {
            ...state,
            ...overrides,
        };

        return {
            mode: nextState.mode,
            event: nextState.event,
            draft: nextState.draft,
            source: nextState.source,
            calendars: $cal?.getCalendars?.() ?? {},
            selectedCalendarId: resolveCalendarId(),
        };
    };

    /**
     * Resolves whether the current event should be editable inside the modal.
     *
     * @param {object | null} event
     * @returns {boolean}
     */
    const resolveEditable = (event) => {
        if (!event || typeof settings.isEventEditable !== 'function') {
            return true;
        }

        return settings.isEventEditable(event) !== false;
    };

    /**
     * Emits the current state snapshot to all calendar slot subscribers.
     */
    const notifySubscribers = () => {
        const snapshot = {
            open: state.open,
            mode: state.mode,
            event: state.event ? { ...state.event } : null,
            draft: state.draft ? { ...state.draft } : null,
            source: state.source ? { ...state.source } : null,
            editable: state.editable,
        };

        subscribers.forEach((subscriber) => subscriber(snapshot));
    };

    /**
     * Applies a new partial modal state and notifies subscribers.
     *
     * @param {Partial<typeof state>} patch
     */
    const patchState = (patch) => {
        Object.assign(state, patch);
        notifySubscribers();
    };

    /**
     * Resolves the currently selected calendar ID with a safe fallback.
     *
     * @returns {string | null}
     */
    const resolveCalendarId = () => (
        $cal?.getSelectedCalendarId?.()
        ?? getFirstCalendarId($cal?.getCalendars?.())
    );

    /**
     * Applies the optional draft builder hook.
     *
     * @param {'create' | 'edit'} mode
     * @param {object} source
     * @param {object} baseDraft
     * @returns {object}
     */
    const resolveDraft = (mode, source, baseDraft) => {
        const nextDraft = settings.buildDraft?.({
            mode,
            source,
            baseDraft,
            calendars: $cal?.getCalendars?.() ?? {},
            selectedCalendarId: resolveCalendarId(),
        });

        return normalizeDraftShape(nextDraft ?? baseDraft) ?? baseDraft;
    };

    /**
     * Opens the modal in create mode from a slot or drawn range payload.
     *
     * @param {object} source
     * @returns {object | null}
     */
    const openCreate = (source = {}) => {
        const baseDraft = buildDefaultCreateDraft(
            source,
            settings.createDurationMinutes,
            resolveCalendarId(),
        );
        const draft = resolveDraft('create', source, baseDraft);
        const nextContext = buildContext({
            open: true,
            mode: 'create',
            event: null,
            draft,
            source: { type: 'create', ...source },
            editable: true,
        });

        if (settings.canOpenModal?.(nextContext) === false) {
            return null;
        }

        patchState({
            open: true,
            mode: 'create',
            event: null,
            draft,
            source: { type: 'create', ...source },
            editable: true,
        });

        return draft;
    };

    /**
     * Opens the modal in edit mode from an existing calendar event.
     *
     * @param {object} event
     * @returns {object | null}
     */
    const openEdit = (event) => {
        if (!event) {
            return null;
        }

        const baseDraft = normalizeDraftShape({ ...event });
        const draft = resolveDraft('edit', event, baseDraft);
        const editable = resolveEditable(event);
        const nextContext = buildContext({
            open: true,
            mode: 'edit',
            event: { ...event },
            draft,
            source: { type: 'edit', eventId: event.id },
            editable,
        });

        if (settings.canOpenModal?.(nextContext) === false) {
            return null;
        }

        patchState({
            open: true,
            mode: 'edit',
            event: { ...event },
            draft,
            source: { type: 'edit', eventId: event.id },
            editable,
        });

        return draft;
    };

    /**
     * Closes the modal and clears its active state.
     */
    const close = () => {
        patchState({
            open: false,
            mode: 'create',
            event: null,
            draft: null,
            source: null,
            editable: true,
        });
    };

    /**
     * Replaces the full draft object.
     *
     * @param {object | null} nextDraft
     * @returns {object | null}
     */
    const setDraft = (nextDraft) => {
        const previousDraft = state.draft;
        const normalizedDraft = normalizeDraftShape(nextDraft);

        if (normalizedDraft && previousDraft?.start !== normalizedDraft.start) {
            settings.onStartUpdate?.(normalizedDraft.start, normalizedDraft, buildContext({ draft: normalizedDraft }));
        }

        if (normalizedDraft && previousDraft?.end !== normalizedDraft.end) {
            settings.onEndUpdate?.(normalizedDraft.end, normalizedDraft, buildContext({ draft: normalizedDraft }));
        }

        patchState({ draft: normalizedDraft });
        return normalizedDraft;
    };

    /**
     * Merges a partial patch into the current draft.
     *
     * @param {object} patch
     * @returns {object | null}
     */
    const updateDraft = (patch) => {
        if (!state.draft) {
            return null;
        }

        return setDraft({
            ...state.draft,
            ...patch,
        });
    };

    /**
     * Saves the current draft into the calendar event collection.
     *
     * @param {object | null} [nextDraft]
     * @returns {object | null}
     */
    const save = async (nextDraft = null) => {
        if (!$cal) {
            return null;
        }

        const draft = normalizeDraftShape(nextDraft ?? state.draft);

        if (!draft?.start || !draft?.end) {
            return null;
        }

        if (state.mode === 'edit' && !state.editable) {
            return null;
        }

        const currentEvents = $cal.getAllEvents?.() ?? [];
        let savedEvent = {
            ...draft,
            id: draft.id || state.event?.id || buildEventId(),
            calendarId: draft.calendarId ?? resolveCalendarId(),
        };
        const context = buildContext({ draft: savedEvent });

        if (state.mode === 'create' && typeof settings.onAddEventAsync === 'function') {
            const asyncResult = await settings.onAddEventAsync(savedEvent, context);

            if (asyncResult === false) {
                return null;
            }

            if (asyncResult && typeof asyncResult === 'object') {
                savedEvent = {
                    ...savedEvent,
                    ...normalizeDraftShape(asyncResult),
                    id: asyncResult.id || savedEvent.id,
                };
            }
        }

        const eventExists = currentEvents.some((event) => event.id === savedEvent.id);

        $cal.setEvents(
            eventExists
                ? currentEvents.map((event) => (event.id === savedEvent.id ? savedEvent : event))
                : [...currentEvents, savedEvent],
        );

        if (state.mode === 'create' && typeof settings.onAddEventAsync !== 'function') {
            settings.onAddEvent?.(savedEvent, buildContext({ draft: savedEvent }));
        }

        patchState({
            open: settings.closeOnSave ? false : true,
            mode: 'edit',
            event: settings.closeOnSave ? null : savedEvent,
            draft: settings.closeOnSave ? null : { ...savedEvent },
            source: settings.closeOnSave ? null : { type: 'edit', eventId: savedEvent.id },
            editable: settings.closeOnSave ? true : resolveEditable(savedEvent),
        });

        return savedEvent;
    };

    /**
     * Removes the current event, or a provided event ID, from the calendar.
     *
     * @param {string | number | null} [eventId]
     * @returns {string | number | null}
     */
    const remove = (eventId = null) => {
        if (!$cal) {
            return null;
        }

        const targetEventId = eventId ?? state.event?.id ?? state.draft?.id;

        if (targetEventId == null || targetEventId === '') {
            return null;
        }

        $cal.removeEvent(targetEventId);
        settings.onDeleteEvent?.(targetEventId, buildContext());

        if (settings.closeOnDelete) {
            close();
        } else {
            patchState({
                open: false,
                event: null,
                draft: null,
                source: null,
                editable: true,
            });
        }

        return targetEventId;
    };

    return definePlugin('eventModal', {
        /** @internal */
        install(calendarApi) {
            $cal = calendarApi;

            if (settings.openOnEventClick) {
                const onEventClick = (event) => {
                    openEdit(event);
                };

                $cal.on('event-click', onEventClick);
                unsubscribeEventClick = () => $cal?.off?.('event-click', onEventClick);
            }

            if (settings.openOnSlotClick) {
                const onSlotClick = (payload) => {
                    openCreate(payload);
                };

                $cal.on('slot-click', onSlotClick);
                unsubscribeSlotClick = () => $cal?.off?.('slot-click', onSlotClick);
            }

            if (settings.openOnDraw) {
                const onDrawEvent = (payload) => {
                    openCreate(payload);
                };

                $cal.on('draw-event', onDrawEvent);
                unsubscribeDrawEvent = () => $cal?.off?.('draw-event', onDrawEvent);
            }

            notifySubscribers();
        },

        /** @internal */
        destroy() {
            unsubscribeEventClick?.();
            unsubscribeSlotClick?.();
            unsubscribeDrawEvent?.();
            unsubscribeEventClick = null;
            unsubscribeSlotClick = null;
            unsubscribeDrawEvent = null;
            subscribers.clear();
            $cal = null;
        },

        /**
         * Subscribes to modal state changes so the calendar slot can stay in
         * sync with the plugin.
         *
         * @param {(state: { open: boolean, mode: string, event: object | null, draft: object | null, source: object | null }) => void} subscriber
         * @returns {() => void}
         */
        subscribe(subscriber) {
            subscribers.add(subscriber);
            subscriber({
                open: state.open,
                mode: state.mode,
                event: state.event ? { ...state.event } : null,
                draft: state.draft ? { ...state.draft } : null,
                source: state.source ? { ...state.source } : null,
                editable: state.editable,
            });

            return () => {
                subscribers.delete(subscriber);
            };
        },

        /**
         * Returns the current headless modal state.
         *
         * @returns {{ open: boolean, mode: string, event: object | null, draft: object | null, source: object | null }}
         */
        getState() {
            return {
                open: state.open,
                mode: state.mode,
                event: state.event ? { ...state.event } : null,
                draft: state.draft ? { ...state.draft } : null,
                source: state.source ? { ...state.source } : null,
                editable: state.editable,
            };
        },

        openCreate,
        openEdit,
        close,
        save,
        remove,
        setDraft,
        updateDraft,
    });
}

