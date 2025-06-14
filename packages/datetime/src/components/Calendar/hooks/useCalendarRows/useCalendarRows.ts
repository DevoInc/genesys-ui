import * as React from 'react';
import { tz as tzFn } from '@date-fns/tz';
import { eachDayOfInterval } from 'date-fns';

import { getCalendarAfterDays, groupInRows } from '../../helpers';
import type { ICalendarInterval, ICellData } from '../../declarations';

/**
 * This hook memoize the structure of a calendar on rows
 */
export const useCalendarRows = ({
  interval,
  tz,
  weekStart,
  getCellData,
}: {
  interval: ICalendarInterval;
  tz: string;
  weekStart: number;
  getCellData: (date: Date) => ICellData;
}) => {
  const rows = React.useMemo(() => {
    const beforeDaysCount = interval.start.getDay() - weekStart;
    const monthDays = eachDayOfInterval(interval, { in: tzFn(tz) }).map(
      getCellData,
    );

    const beforeDays: ICellData[] = Array.from({ length: beforeDaysCount });
    const afterDays: ICellData[] = Array.from({
      length: getCalendarAfterDays(beforeDaysCount + monthDays.length),
    });

    return groupInRows(beforeDays.concat(monthDays, afterDays));
  }, [interval, tz, weekStart]);

  return rows;
};
