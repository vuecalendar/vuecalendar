import { computed, ref } from 'vue';
import { Temporal, startOfIsoWeek, today } from '../utils/temporal.js';
import { fmt_dayFull, fmt_dayMedium, fmt_dayShort, fmt_monthYear } from '../utils/intlDate.js';

/**
 * Centralizes view/date navigation state for the main calendar component.
 *
 * @param {object} options
 * @param {string | null} options.initialDate
 * @param {'day' | 'week' | 'month' | 'list' | 'resource'} options.initialView
 * @param {import('vue').Ref<'day' | 'week' | 'month' | 'list' | 'resource'>} [options.currentView]
 * @param {import('vue').Ref<boolean>} options.isMobile
 * @param {import('vue').Ref<number>} [options.nDays]
 * @param {import('vue').Ref<string>} options.locale
 * @param {(direction: -1 | 1) => void} [options.onNavigate]
 * @returns {{
 *   currentDate: import('vue').Ref<Temporal.PlainDate>,
 *   currentView: import('vue').Ref<'day' | 'week' | 'month' | 'list' | 'resource'>,
 *   datePicker: import('vue').Ref<Date | null>,
 *   visibleDays: import('vue').ComputedRef<Temporal.PlainDate[]>,
 *   headerLabel: import('vue').ComputedRef<string>,
 *   weekKey: import('vue').ComputedRef<string>,
 *   navigatePrev: () => void,
 *   navigateNext: () => void,
 *   navigateToday: () => void,
 *   onDatePickerSelect: (date: Date) => void,
 *   onMonthDayClick: (dateStr: string) => void,
 *   setDate: (dateStr: string) => void,
 *   setView: (view: 'day' | 'week' | 'month' | 'list' | 'resource') => void,
 *   getRange: () => { start: string, end: string }
 * }}
 */
export const useCalendarNavigation = ({ initialDate, initialView, currentView, isMobile, nDays, locale, onNavigate }) => {
	const formatLocalDate = (date) => (
		`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
	);


	/**
	 * The anchor date used to derive the visible range and header label.
	 */
	const currentDate = ref(initialDate ? Temporal.PlainDate.from(initialDate) : today());

	/**
	 * The active calendar view. Consumers may pass their own ref or let the
	 * composable create one.
	 */
	const resolvedCurrentView = currentView ?? ref(isMobile.value ? 'day' : initialView);

	/**
	 * Mirrors the selected date in the header date picker.
	 */
	const datePicker = ref(null);

	/**
	 * Number of visible days when the calendar is in week mode.
	 */
	const visibleWeekDaysCount = computed(() => {
		const parsedDays = Number(nDays?.value ?? 7);
		return Number.isFinite(parsedDays) ? Math.max(1, Math.min(7, Math.trunc(parsedDays))) : 7;
	});

	/**
	 * Days currently rendered by the week/day view.
	 */
	const visibleDays = computed(() => {
		if (resolvedCurrentView.value === 'day' || resolvedCurrentView.value === 'list') {
			return [currentDate.value];
		}

		const monday = startOfIsoWeek(currentDate.value);
		return Array.from({ length: visibleWeekDaysCount.value }, (_, index) => monday.add({ days: index }));
	});

	/**
	 * Main header title shown in the navigation bar.
	 */
	const headerLabel = computed(() => {
		const activeLocale = locale.value;

		if (resolvedCurrentView.value === 'day' || resolvedCurrentView.value === 'list') {
			return isMobile.value
				? fmt_dayMedium(currentDate.value, activeLocale)
				: fmt_dayFull(currentDate.value, activeLocale);
		}

		if (resolvedCurrentView.value === 'week' || resolvedCurrentView.value === 'resource') {
			const start = visibleDays.value[0];
			const end = visibleDays.value.at(-1);

			return isMobile.value
				? `${fmt_dayShort(start, activeLocale)} - ${fmt_dayShort(end, activeLocale)}`
				: `${currentDate.value.weekOfYear} - ${fmt_dayShort(start, activeLocale)} - ${fmt_dayMedium(end, activeLocale)}`;
		}

		return fmt_monthYear(currentDate.value, activeLocale);
	});

	/**
	 * Stable transition key for the day/week view container.
	 */
	const weekKey = computed(() => (
		`${['day', 'list'].includes(resolvedCurrentView.value) ? resolvedCurrentView.value : 'week'}-${visibleDays.value[0]?.toString()}-${visibleWeekDaysCount.value}`
	));

	/**
	 * Returns the Temporal duration unit used for prev/next navigation in the
	 * current view.
	 *
	 * @returns {{ days?: number, months?: number }}
	 */
	const getNavigationUnit = () => ({
		day: { days: 1 },
		week: { days: visibleWeekDaysCount.value },
		month: { months: 1 },
		list: { days: 1 },
		resource: { days: visibleWeekDaysCount.value },
	}[resolvedCurrentView.value]);

	/**
	 * Navigates backward by one unit for the active view.
	 */
	const navigatePrev = () => {
		onNavigate?.(-1);
		currentDate.value = currentDate.value.subtract(getNavigationUnit());
	};

	/**
	 * Navigates forward by one unit for the active view.
	 */
	const navigateNext = () => {
		onNavigate?.(1);
		currentDate.value = currentDate.value.add(getNavigationUnit());
	};

	/**
	 * Resets the calendar back to today and syncs the date picker value.
	 */
	const navigateToday = () => {
		onNavigate?.(1);
		currentDate.value = today();
		datePicker.value = new Date();
	};

	/**
	 * Syncs the calendar to a date chosen through the date picker.
	 *
	 * @param {Date} date
	 */
	const onDatePickerSelect = (date) => {
		currentDate.value = Temporal.PlainDate.from(formatLocalDate(date));
		datePicker.value = date;
	};

	/**
	 * Opens a month-cell selection in day view.
	 *
	 * @param {string} dateStr
	 */
	const onMonthDayClick = (dateStr) => {
		currentDate.value = Temporal.PlainDate.from(dateStr);
		resolvedCurrentView.value = 'day';
	};

	/**
	 * Programmatic date navigation API.
	 *
	 * @param {string} dateStr
	 */
	const setDate = (dateStr) => {
		currentDate.value = Temporal.PlainDate.from(dateStr);
	};

	/**
	 * Programmatic view switching API.
	 *
	 * @param {'day' | 'week' | 'month' | 'list' | 'resource'} view
	 */
	const setView = (view) => {
		if ((view === 'day' || view === 'list') && !initialDate) {
			currentDate.value = today();
			datePicker.value = new Date();
		}

		resolvedCurrentView.value = view;
	};

	/**
	 * Returns the currently visible calendar range.
	 *
	 * @returns {{ start: string, end: string }}
	 */
	const getRange = () => {
		if (resolvedCurrentView.value === 'month') {
			return {
				start: currentDate.value.with({ day: 1 }).toString(),
				end: currentDate.value.with({ day: currentDate.value.daysInMonth }).toString(),
			};
		}

		return {
			start: visibleDays.value[0].toString(),
			end: visibleDays.value.at(-1).toString(),
		};
	};

	return {
		currentDate,
		currentView: resolvedCurrentView,
		datePicker,
		visibleDays,
		headerLabel,
		weekKey,
		navigatePrev,
		navigateNext,
		navigateToday,
		onDatePickerSelect,
		onMonthDayClick,
		setDate,
		setView,
		getRange,
	};
};
