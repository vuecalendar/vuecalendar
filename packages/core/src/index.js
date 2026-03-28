import VueCalendar from './components/VueCalendar.vue';
import VueCalendarWeekView from './components/VueCalendarWeekView.vue';
import VueCalendarMonthView from './components/VueCalendarMonthView.vue';
import VueCalendarListView from './components/VueCalendarListView.vue';
import VueCalendarResourceView from './components/VueCalendarResourceView.vue';
import VueCalendarEvent from './components/VueCalendarEvent.vue';
import VueEventModal from './components/VueEventModal.vue';
import calendars from './calendars.js';
import { definePlugin } from './utils/plugins.js';
import { useNavTransition } from './composables/useNavTransition.js';
import {
    Temporal,
    MINUTES_PER_HOUR,
    isZonedDateTime,
    isPlainDateTime,
    isPlainDate,
    formatTime,
    normalizeToPlainDateTime,
    normaliseToPDT,
    normalizeEventDate,
    today,
    startOfIsoWeek,
    endOfIsoWeek,
    isToday,
    isWeekend,
    addMinutesToDate,
    toJSDate,
} from './utils/temporal.js';
import {
    intlFormat,
    fmt_dayFull,
    fmt_dayShort,
    fmt_dayMedium,
    fmt_monthYear,
    fmt_weekdayShort,
    fmt_weekdayNarrow,
} from './utils/intlDate.js';
import { DEFAULT_CALENDAR_COLORS, resolveCalendarColors } from './utils/calendarColors.js';

export {
    VueCalendar,
    VueCalendarWeekView,
    VueCalendarMonthView,
    VueCalendarListView,
    VueCalendarResourceView,
    VueCalendarEvent,
    VueEventModal,
    calendars,
    definePlugin,
    useNavTransition,
    Temporal,
    MINUTES_PER_HOUR,
    isZonedDateTime,
    isPlainDateTime,
    isPlainDate,
    formatTime,
    normalizeToPlainDateTime,
    normaliseToPDT,
    normalizeEventDate,
    today,
    startOfIsoWeek,
    endOfIsoWeek,
    isToday,
    isWeekend,
    addMinutesToDate,
    toJSDate,
    intlFormat,
    fmt_dayFull,
    fmt_dayShort,
    fmt_dayMedium,
    fmt_monthYear,
    fmt_weekdayShort,
    fmt_weekdayNarrow,
    DEFAULT_CALENDAR_COLORS,
    resolveCalendarColors,
};

export default {
    install(app) {
        app.component('VueCalendar', VueCalendar);
        app.component('VueCalendarWeekView', VueCalendarWeekView);
        app.component('VueCalendarMonthView', VueCalendarMonthView);
        app.component('VueCalendarListView', VueCalendarListView);
        app.component('VueCalendarResourceView', VueCalendarResourceView);
        app.component('VueCalendarEvent', VueCalendarEvent);
        app.component('VueEventModal', VueEventModal);
    },
};

