import { Temporal } from 'temporal-polyfill';

export { Temporal };

const DEFAULT_PLAIN_TIME = { hour: 0, minute: 0, second: 0 };
const MINUTES_PER_HOUR = 60;

function padTimeSegment(value) {
    return String(value).padStart(2, '0');
}

function normalizeDateTimeString(value) {
    return value.includes('T') ? value : value.replace(' ', 'T');
}

function resolveTimeZone(timeZone) {
    return timeZone ?? Temporal.Now.timeZoneId();
}

export function isZonedDateTime(value) {
    return value instanceof Temporal.ZonedDateTime;
}

export function isPlainDateTime(value) {
    return value instanceof Temporal.PlainDateTime;
}

export function isPlainDate(value) {
    return value instanceof Temporal.PlainDate;
}

export function formatTime(value) {
    return `${padTimeSegment(value.hour)}:${padTimeSegment(value.minute)}`;
}

export function normalizeToPlainDateTime(value, timeZone) {
    if (value == null) {
        return null;
    }

    if (isZonedDateTime(value)) {
        return value
            .withTimeZone(resolveTimeZone(timeZone))
            .toPlainDateTime();
    }

    if (isPlainDateTime(value)) {
        return value;
    }

    if (isPlainDate(value)) {
        return value.toPlainDateTime(DEFAULT_PLAIN_TIME);
    }

    if (typeof value === 'string') {
        try {
            return Temporal.PlainDateTime.from(normalizeDateTimeString(value));
        } catch {
            return null;
        }
    }

    return null;
}

export const normaliseToPDT = normalizeToPlainDateTime;

export function normalizeEventDate(value, displayTimeZone) {
    if (value == null) {
        return null;
    }

    if (typeof value === 'string') {
        return value;
    }

    if (isPlainDate(value)) {
        return value.toString();
    }

    const plainDateTime = normalizeToPlainDateTime(value, displayTimeZone);

    if (!plainDateTime) {
        throw new TypeError(`Unsupported date value: ${value}`);
    }

    return `${plainDateTime.toPlainDate()} ${formatTime(plainDateTime)}`;
}

export function today() {
    return Temporal.Now.plainDateISO();
}

export function startOfIsoWeek(date) {
    return date.subtract({ days: date.dayOfWeek - 1 });
}

export function endOfIsoWeek(date) {
    return date.add({ days: 7 - date.dayOfWeek });
}

export function isToday(date) {
    return Temporal.PlainDate.compare(date, today()) === 0;
}

export function isWeekend(date) {
    return date.dayOfWeek >= 6;
}

export function addMinutesToDate(date, minutes) {
    const baseDateTime = date.toPlainDateTime(DEFAULT_PLAIN_TIME);
    const result = baseDateTime.add({ minutes });

    return `${result.toPlainDate()} ${formatTime(result)}`;
}

export function toJSDate(value) {
    if (isPlainDate(value)) {
        return new Date(value.year, value.month - 1, value.day, 12, 0, 0);
    }

    if (isPlainDateTime(value)) {
        return new Date(value.year, value.month - 1, value.day, value.hour, value.minute, 0);
    }

    return new Date(value);
}

export { MINUTES_PER_HOUR };


