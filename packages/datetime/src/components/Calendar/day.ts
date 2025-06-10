import { set, getTime, format } from 'date-fns';

import type { TCalendarDateRange } from '../../declarations';
import type { TConditionFunction } from './declarations';

export const defaultDateRepr = (ts: number) => format(ts, 'PPPP');

/**
 * Determines if a day should have the "right hover" class based on the
 * specified criteria.
 */
export const rightHover: TConditionFunction = ({ hover, from, ts }) =>
  hover && hover > from && ts === hover;

/**
 * Determines if a day should have a box shadow on the right side based on the
 * specified criteria.
 */
export const hasBoxShadowRight: TConditionFunction = ({
  ts,
  from,
  hasRightHoverEffect,
  hover,
  to,
}) =>
  (hasRightHoverEffect || !to) &&
  from &&
  hover &&
  ts >= from &&
  ts <= hover &&
  ts > to &&
  ((!to && hover > from) || (to && hover > to));

/**
 * Determines if a day should have a box shadow on the left side based on the
 * specified criteria.
 */
export const hasBoxShadowLeft: TConditionFunction = ({
  ts,
  from,
  to,
  hasLeftHoverEffect,
  hover,
}) =>
  (hasLeftHoverEffect || !to) &&
  from &&
  hover &&
  ts <= from &&
  ts >= hover &&
  ((!from && hover < to) || (from && hover < from));

/**
 * Determines if a day should have a box shadow on the next based on the
 * specified criteria.
 */
export const hasNextBoxShadow: TConditionFunction = ({
  ts,
  from,
  hasRightHoverEffect,
  hover,
  to,
}) =>
  hasRightHoverEffect &&
  from &&
  hover &&
  ts >= from &&
  ts <= hover &&
  to == ts &&
  hover > to;

/**
 * Determines if a day should have a box shadow on the prev based on the
 * specified criteria.
 */
export const hasPrevBoxShadow: TConditionFunction = ({
  ts,
  from,
  hasLeftHoverEffect,
  hover,
  to,
}) =>
  hasLeftHoverEffect &&
  to &&
  hover &&
  ts <= to &&
  ts >= hover &&
  from == ts &&
  hover < from;

export const getFrom = (value: TCalendarDateRange) => {
  if (value[0] && getTime(value[0]) > 0) {
    return getTime(
      set(value[0], { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
    );
  }
  return 0;
};

export const getTo = (value: TCalendarDateRange) => {
  if (value[1] && getTime(value[1]) > 0) {
    return getTime(
      set(value[1], {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      }),
    );
  }
  return getFrom(value);
};
