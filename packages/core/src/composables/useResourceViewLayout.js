import { computed } from 'vue';
import { useWeekViewLayout } from './useWeekViewLayout.js';
import {
    buildResourceColumnKey,
    buildResourceColumnLayout,
    buildTimedEventsByDayResource,
} from '../utils/weekViewMath.js';

/**
 * Extends the shared week-view layout with resource-specific event bucketing
 * and overlap metadata for the resource time-grid view.
 *
 * @param {object} options
 * @param {import('vue').Ref<Array<{ id?: string | number }>>} options.resources
 * @returns {ReturnType<typeof useWeekViewLayout> & {
 *   resourceColumns: import('vue').ComputedRef<Array<{
 *     key: string,
 *     day: object,
 *     dayIndex: number,
 *     resource: object,
 *     resourceIndex: number
 *   }>>,
 *   resourceCount: import('vue').ComputedRef<number>,
 *   getEventsForColumn: (day: { toString(): string }, resourceId: string | number) => object[],
 *   colLayout: import('vue').ComputedRef<Map<string | number, { col: number, total: number }>>
 * }}
 */
export const useResourceViewLayout = ({ resources, ...weekViewOptions }) => {
    const baseLayout = useWeekViewLayout(weekViewOptions);

    const resourceCount = computed(() => Math.max(1, resources.value?.length ?? 0));

    const resourceColumns = computed(() => (
        baseLayout.boundaryRange.value
            ? (weekViewOptions.days.value ?? []).flatMap((day, dayIndex) => (
                (resources.value ?? []).map((resource, resourceIndex) => ({
                    key: buildResourceColumnKey(day.toString(), resource.id),
                    day,
                    dayIndex,
                    resource,
                    resourceIndex,
                }))
            ))
            : []
    ));

    const timedEventsByColumn = computed(() => buildTimedEventsByDayResource(
        weekViewOptions.events.value,
        resources.value,
    ));

    const resourceColLayout = computed(() => buildResourceColumnLayout(
        weekViewOptions.days.value,
        resources.value,
        timedEventsByColumn.value,
    ));

    const getEventsForColumn = (day, resourceId) => (
        timedEventsByColumn.value.get(buildResourceColumnKey(day.toString(), resourceId)) ?? []
    );

    return {
        ...baseLayout,
        resourceColumns,
        resourceCount,
        colLayout: resourceColLayout,
        getEventsForColumn,
    };
};
