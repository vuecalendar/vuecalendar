const DEFAULT_CALENDAR_COLORS = {
    main: '#9ca3af',
    container: '#f3f4f6',
    onContainer: '#374151',
};

/**
 * Resolves the display colors for a calendar entry.
 *
 * Falls back to neutral gray tones when the calendar is missing or has no
 * `lightColors` definition.
 *
 * @param {string | null | undefined} calendarId
 * @param {Record<string, { lightColors?: { main: string, container: string, onContainer: string } }>} calendars
 * @param {{ main?: string, container?: string, onContainer?: string }} [fallback]
 * @returns {{ main: string, container: string, onContainer: string }}
 */
export function resolveCalendarColors(calendarId, calendars, fallback) {
    return calendars?.[calendarId]?.lightColors ?? fallback ?? DEFAULT_CALENDAR_COLORS;
}

export { DEFAULT_CALENDAR_COLORS };
