import { compareDesc } from 'date-fns';

/**
 * Return the new range after set the given Date or timestamp,
 * following the next logic:
 * - If range is empty or the new Date is before of the first point of the
 *   range then a new range is returned with the given date as the first point
 * - In other cases the the given date is used as second point for the range
 */
export const singleBehavior =
  (range: (number | Date)[], dt: number | Date) =>
  range.length === 0 || compareDesc(dt, range[0]) > 0 ? [dt] : [range[0], dt];
