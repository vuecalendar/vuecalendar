import { computed } from 'vue';

/**
 * Built-in locale labels used by the calendar UI.
 *
 * Consumers may override any label through the `labels` prop while still
 * inheriting sensible defaults for the selected locale.
 */
const LOCALE_LABELS = {
    en: { today: 'Today', datePickerPlaceholder: 'Go to date', sidebarDragHint: 'Drag to calendar', viewDay: 'Day', viewWeek: 'Week', viewMonth: 'Month', viewList: 'List', viewResource: 'Resources', blocked: 'Occupied', more: 'more', noEvents: 'No events' },
    nl: { today: 'Vandaag', datePickerPlaceholder: 'Ga naar datum', sidebarDragHint: 'Sleep naar kalender', viewDay: 'Dag', viewWeek: 'Week', viewMonth: 'Maand', viewList: 'Lijst', viewResource: 'Resources', blocked: 'Bezet', more: 'meer', noEvents: 'Geen events' },
    de: { today: 'Heute', datePickerPlaceholder: 'Datum eingeben', sidebarDragHint: 'In Kalender ziehen', viewDay: 'Tag', viewWeek: 'Woche', viewMonth: 'Monat', viewList: 'Liste', viewResource: 'Ressourcen', blocked: 'Belegt', more: 'mehr', noEvents: 'Keine Termine' },
    fr: { today: "Aujourd'hui", datePickerPlaceholder: 'Aller a la date', sidebarDragHint: 'Glisser vers le calendrier', viewDay: 'Jour', viewWeek: 'Semaine', viewMonth: 'Mois', viewList: 'Liste', viewResource: 'Ressources', blocked: 'Occupe', more: 'plus', noEvents: 'Aucun evenement' },
    es: { today: 'Hoy', datePickerPlaceholder: 'Ir a la fecha', sidebarDragHint: 'Arrastrar al calendario', viewDay: 'Dia', viewWeek: 'Semana', viewMonth: 'Mes', viewList: 'Lista', viewResource: 'Recursos', blocked: 'Ocupado', more: 'mas', noEvents: 'Sin eventos' },
    ja: { today: '今日', datePickerPlaceholder: '日付に移動', sidebarDragHint: 'カレンダーにドラッグ', viewDay: '日', viewWeek: '週', viewMonth: '月', viewList: 'リスト', blocked: '使用中', more: 'もっと', noEvents: '予定はありません' },
    pt: { today: 'Hoje', datePickerPlaceholder: 'Ir para a data', sidebarDragHint: 'Arrastar para o calendario', viewDay: 'Dia', viewWeek: 'Semana', viewMonth: 'Mes', viewList: 'Lista', blocked: 'Ocupado', more: 'mais', noEvents: 'Sem eventos' },
    it: { today: 'Oggi', datePickerPlaceholder: 'Vai alla data', sidebarDragHint: 'Trascina nel calendario', viewDay: 'Giorno', viewWeek: 'Settimana', viewMonth: 'Mese', viewList: 'Lista', blocked: 'Occupato', more: 'altro', noEvents: 'Nessun evento' },
    zh: { today: '今天', datePickerPlaceholder: '前往日期', sidebarDragHint: '拖到日历', viewDay: '日', viewWeek: '周', viewMonth: '月', viewList: '列表', blocked: '已占用', more: '更多', noEvents: '没有日程' },
};

/**
 * Returns merged calendar labels for the active locale.
 *
 * @param {import('vue').Ref<string>} locale
 * @param {import('vue').Ref<Record<string, string>>} labelOverrides
 * @returns {import('vue').ComputedRef<Record<string, string>>}
 */
export const useCalendarLabels = (locale, labelOverrides) => {
    /**
     * Merges built-in locale labels with consumer overrides so callers always
     * receive a complete label set.
     */
    const mergedLabels = computed(() => ({
        ...(LOCALE_LABELS[locale.value] ?? LOCALE_LABELS.en),
        viewResource: (LOCALE_LABELS[locale.value] ?? LOCALE_LABELS.en)?.viewResource ?? 'Resources',
        ...(labelOverrides.value ?? {}),
    }));

    return mergedLabels;
};
