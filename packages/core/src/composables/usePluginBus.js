/**
 * Small event bus used by calendar plugins.
 *
 * @returns {{
 *   emit(event: string, payload?: unknown): void,
 *   on(event: string, callback: (payload?: unknown) => void): void,
 *   off(event: string, callback: (payload?: unknown) => void): void
 * }}
 */
export const usePluginBus = () => {
    /**
     * Stores plugin listeners keyed by event name.
     */
    const listeners = new Map();

    /**
     * Emits an event to every registered plugin listener.
     *
     * @param {string} event
     * @param {unknown} payload
     */
    const emit = (event, payload) => {
        listeners.get(event)?.forEach((callback) => callback(payload));
    };

    /**
     * Registers a plugin callback for an event.
     *
     * @param {string} event
     * @param {(payload?: unknown) => void} callback
     */
    const on = (event, callback) => {
        if (!listeners.has(event)) {
            listeners.set(event, new Set());
        }

        listeners.get(event).add(callback);
    };

    /**
     * Removes a previously registered plugin callback.
     *
     * @param {string} event
     * @param {(payload?: unknown) => void} callback
     */
    const off = (event, callback) => {
        listeners.get(event)?.delete(callback);
    };

    return { emit, on, off };
};
