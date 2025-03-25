import { startOfMonth, eachDayOfInterval, endOfMonth } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

/**
 * Get Date of each day in the month
 */
export const getMonthDays = (
  dt: Date | number,
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone,
) =>
  eachDayOfInterval(
    {
      start: startOfMonth(dt),
      end: endOfMonth(dt),
    },
    { in: tzFn(tz) },
  );

/**
 * Get the the blank days until the first of the month
 */
export const getPrevDays = (
  dt: Date | number,
  weekStart = 0,
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone,
) => startOfMonth(dt, { in: tzFn(tz) }).getDay() - weekStart;
