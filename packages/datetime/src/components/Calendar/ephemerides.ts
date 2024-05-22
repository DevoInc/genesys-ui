import {
  startOfMonth,
  eachDayOfInterval,
  endOfMonth,
  startOfDay,
  getDate,
  getTime,
} from 'date-fns';
import { IParseResult, TParseDate } from '../../declarations';

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

interface ClassConditionParams {
  from: number;
  to: number;
  hover: number;
  ts: number;
  hasLeftHoverEffect?: boolean;
  hasRightHoverEffect?: boolean;
}

/**
 * Determines whether a given day is disabled based on the specified criteria.
 */
const hasDisabled = ({
  ts,
  parseDate,
}: {
  ts: number;
  parseDate: TParseDate;
}): boolean => !parseDate(ts).isValid;

/**
 * Determines if a day should have the "right hover" class based on the specified criteria.
 */
const rightHover = ({ hover, from, ts }: ClassConditionParams) =>
  hover && hover > from && ts === hover;

/**
 * Determines if a day should have a box shadow on the right side based on the specified criteria.
 */
const hasBoxShadowRight = ({
  ts,
  from,
  hasRightHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  (hasRightHoverEffect || !to) &&
  from &&
  hover &&
  ts >= from &&
  ts <= hover &&
  ts > to &&
  ((!to && hover > from) || (to && hover > to));

/**
 * Determines if a day should have a box shadow on the left side based on the specified criteria.
 */
const hasBoxShadowLeft = ({
  ts,
  from,
  hasLeftHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  (hasLeftHoverEffect || !to) &&
  from &&
  hover &&
  ts <= from &&
  ts >= hover &&
  ((!from && hover < to) || (from && hover < from));

const hasNextBoxShadow = ({
  ts,
  from,
  hasRightHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  hasRightHoverEffect &&
  from &&
  hover &&
  ts >= from &&
  ts <= hover &&
  to == ts &&
  hover > to;

const hasPrevBoxShadow = ({
  ts,
  from,
  hasLeftHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  hasLeftHoverEffect &&
  to &&
  hover &&
  ts <= to &&
  ts >= hover &&
  from == ts &&
  hover < from;

const getClassesForDay = ({
  ts,
  from,
  hasLeftHoverEffect,
  hasRightHoverEffect,
  hover,
  lastDayOfMonth,
  to,
  parseDate,
}: ClassConditionParams & {
  lastDayOfMonth: number;
  parseDate: (dt: Date | number) => IParseResult;
}): string[] => [
  ...(hasDisabled({ ts, parseDate }) ? ['disabled'] : []),
  ...(ts === from || ts === to ? ['selected'] : []),
  ...(ts === from && to ? ['from-selected'] : []),
  ...(ts === lastDayOfMonth ? ['month-last-day'] : []),
  ...(ts === to && from ? ['to-selected'] : []),
  ...(ts >= from && ts <= to ? ['highlight'] : []),
  ...(hasBoxShadowRight({ hover, from, to, ts, hasRightHoverEffect })
    ? ['box-shadow']
    : []),
  ...(hasBoxShadowLeft({ hover, from, to, ts, hasLeftHoverEffect })
    ? ['box-shadow']
    : []),
  ...(hasNextBoxShadow({ hover, from, to, ts, hasRightHoverEffect })
    ? ['next-box-shadow']
    : []),
  ...(hasPrevBoxShadow({ hover, from, to, ts, hasLeftHoverEffect })
    ? ['prev-box-shadow']
    : []),
  ...(rightHover({ hover, from, to, ts }) ? ['rightmost'] : []),
];

/**
 * Parser for the month days
 */
export const parseDays = ({
  dates,
  from,
  hasLeftHoverEffect,
  hasRightHoverEffect,
  hover,
  lastDayOfMonth,
  to,
  parseDate,
}: {
  dates: Date[];
  from: number;
  hasLeftHoverEffect: boolean;
  hasRightHoverEffect: boolean;
  hover: number;
  lastDayOfMonth: number;
  to: number;
  parseDate: (dt: Date | number) => IParseResult;
}): { value: string; ts: number; classes: string }[] =>
  dates.map((date) => {
    const monthDay = getDate(date);
    const ts = getTime(date);

    const startOfFrom = from && startOfDay(from).getTime();
    const startOfTo = to && startOfDay(to).getTime();

    const classes: string[] = getClassesForDay({
      ts,
      from: startOfFrom,
      hasLeftHoverEffect,
      hasRightHoverEffect,
      hover,
      lastDayOfMonth,
      to: startOfTo,
      parseDate,
    });

    return {
      value: String(monthDay),
      classes: classes.join(' '),
      ts,
    };
  });
