import { startOfMonth, eachDayOfInterval, endOfMonth } from 'date-fns';

/**
 * Get Date of each day in the month
 */
export const getMonthDays = (dt: Date | number) =>
  eachDayOfInterval({
    start: startOfMonth(dt),
    end: endOfMonth(dt),
  });

/**
 * Get the the blank days until the first of the month
 */
export const getPrevDays = (dt: Date | number, weekStart = 0) =>
  startOfMonth(dt).getDay() - weekStart;
