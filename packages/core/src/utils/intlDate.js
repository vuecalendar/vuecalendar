import { toJSDate } from './temporal.js';

const DAY_FULL_OPTIONS = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

const DAY_SHORT_OPTIONS = {
    day: 'numeric',
    month: 'short',
};

const DAY_MEDIUM_OPTIONS = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
};

const MONTH_YEAR_OPTIONS = {
    month: 'long',
    year: 'numeric',
};

const WEEKDAY_SHORT_OPTIONS = {
    weekday: 'short',
};

const WEEKDAY_NARROW_OPTIONS = {
    weekday: 'narrow',
};

export function intlFormat(value, locale, options) {
    return new Intl.DateTimeFormat(locale, options).format(toJSDate(value));
}

export function fmt_dayFull(value, locale) {
    return intlFormat(value, locale, DAY_FULL_OPTIONS);
}

export function fmt_dayShort(value, locale) {
    return intlFormat(value, locale, DAY_SHORT_OPTIONS);
}

export function fmt_dayMedium(value, locale) {
    return intlFormat(value, locale, DAY_MEDIUM_OPTIONS);
}

export function fmt_monthYear(value, locale) {
    return intlFormat(value, locale, MONTH_YEAR_OPTIONS);
}

export function fmt_weekdayShort(value, locale) {
    return intlFormat(value, locale, WEEKDAY_SHORT_OPTIONS);
}

export function fmt_weekdayNarrow(value, locale) {
    return intlFormat(value, locale, WEEKDAY_NARROW_OPTIONS);
}


