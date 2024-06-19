import { getDate, getTime, format } from 'date-fns';

import type { TParseDate } from '../../declarations';
import type { TConditionFunction, TDayProperties } from './declarations';

export const defaultDateRepr = (ts: number) => format(ts, 'PPPP');

/**
 * Determines if a day should have the "right hover" class based on the
 * specified criteria.
 */
const rightHover: TConditionFunction = ({ hover, from, ts }) =>
  hover && hover > from && ts === hover;

/**
 * Determines if a day should have a box shadow on the right side based on the
 * specified criteria.
 */
const hasBoxShadowRight: TConditionFunction = ({
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
const hasBoxShadowLeft: TConditionFunction = ({
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
const hasNextBoxShadow: TConditionFunction = ({
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
const hasPrevBoxShadow: TConditionFunction = ({
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

/**
 * Get day properties
 */
export const getDayProperties =
  (
    from: number,
    to: number,
    lastDayOfMonth: number,
    parse: TParseDate,
    hover: number,
    hasRightHoverEffect: boolean,
    hasLeftHoverEffect: boolean,
  ) =>
  (day: Date): TDayProperties => {
    const ts = getTime(day);
    const monthDay = getDate(day);
    const result = parse(day);

    return {
      ts,
      monthDay,
      isValid: result.isValid,
      errors: result.errors,
      isDisabled: !result.isValid,
      isSelected: ts === from || ts === to,
      isFrom: ts === from && !!to,
      isTo: ts === to && !!from,
      isLastDayOfMonth: ts === lastDayOfMonth,
      isInsideSelection: ts >= from && ts <= to,
      isBoxShadowRight: hasBoxShadowRight({
        hover,
        from,
        to,
        ts,
        hasRightHoverEffect,
      }),
      isBoxShadowLeft: hasBoxShadowLeft({
        hover,
        from,
        to,
        ts,
        hasLeftHoverEffect,
      }),
      isNextBoxShadow: hasNextBoxShadow({
        hover,
        from,
        to,
        ts,
        hasRightHoverEffect,
      }),
      isPrevBoxShadow: hasPrevBoxShadow({
        hover,
        from,
        to,
        ts,
        hasLeftHoverEffect,
      }),
      isRightHover: rightHover({ hover, from, to, ts }),
    };
  };

/**
 * Given day properties return a className
 */
export const getClassNameFromProperties = (dayProps: TDayProperties) => [
  ...(dayProps.isDisabled ? ['disabled'] : []),
  ...(dayProps.isSelected ? ['selected'] : []),
  ...(dayProps.isFrom ? ['from-selected'] : []),
  ...(dayProps.isTo ? ['to-selected'] : []),
  ...(dayProps.isLastDayOfMonth ? ['month-last-day'] : []),
  ...(dayProps.isInsideSelection ? ['highlight'] : []),
  ...(dayProps.isBoxShadowLeft || dayProps.isBoxShadowRight
    ? ['box-shadow']
    : []),
  ...(dayProps.isNextBoxShadow ? ['next-box-shadow'] : []),
  ...(dayProps.isPrevBoxShadow ? ['prev-box-shadow'] : []),
  ...(dayProps.isRightHover ? ['rightmost'] : []),
];
