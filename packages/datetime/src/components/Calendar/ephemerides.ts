import { formatWithOptions } from 'date-fns/fp';
import {
  addDays,
  startOfWeek,
  startOfMonth,
  eachDayOfInterval,
  endOfMonth,
  startOfDay,
  subDays,
} from 'date-fns';
import * as locales from 'date-fns/locale';

/**
 * Get the weekdays in the specified locale
 */
export const getWeekDays = (locale: string): string[] => {
  const loc = locales[locale];
  const formatDays = formatWithOptions({ locale: loc }, 'EEEEEE');
  const start = startOfWeek(new Date(), { locale: loc });
  const incDays = (day: Date, idx: number) => addDays(day, idx);
  return Array(7).fill(start).map(incDays).map(formatDays);
};

/**
 * Get Date of each day in the month
 */
export const getMonthDays = (ts: number) =>
  eachDayOfInterval({
    start: startOfMonth(ts),
    end: endOfMonth(ts),
  });

/**
 * Get the the blank days until the first of the month
 */
export const getPrevDays = (ts: number) => {
  return subDays(startOfMonth(ts), 1).getDay();
};

/**
 * Rest of days until 42 days (for 6 rows of 7 cols)
 */
export const getNextDays = (ts: number) =>
  42 - getPrevDays(ts) - endOfMonth(ts).getDate() - 1;

interface ClassConditionParams {
  from: number;
  to: number;
  hover: number;
  dayTime: number;
  hasLeftHoverEffect?: boolean;
  hasRightHoverEffect?: boolean;
}

/**
 * Determines whether a given day is disabled based on the specified criteria.
 */
const hasDisabled = ({
  dayTime,
  validateDate,
  invalidDates,
}: {
  dayTime: number;
  validateDate: (ts: number) => boolean;
  invalidDates: number[];
}): boolean => {
  const invalids = invalidDates.map((day) => startOfDay(day).getTime());
  return !validateDate(dayTime) || invalids.includes(dayTime);
};

/**
 * Determines if a day should have the "right hover" class based on the specified criteria.
 */
const rightHover = ({ hover, from, dayTime }: ClassConditionParams) =>
  hover && hover > from && dayTime === hover;

/**
 * Determines if a day should have a box shadow on the right side based on the specified criteria.
 */
const hasBoxShadowRight = ({
  dayTime,
  from,
  hasRightHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  (hasRightHoverEffect || !to) &&
  from &&
  hover &&
  dayTime >= from &&
  dayTime <= hover &&
  dayTime > to &&
  ((!to && hover > from) || (to && hover > to));

/**
 * Determines if a day should have a box shadow on the left side based on the specified criteria.
 */
const hasBoxShadowLeft = ({
  dayTime,
  from,
  hasLeftHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  (hasLeftHoverEffect || !to) &&
  from &&
  hover &&
  dayTime <= from &&
  dayTime >= hover &&
  ((!from && hover < to) || (from && hover < from));

const hasNextBoxShadow = ({
  dayTime,
  from,
  hasRightHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  hasRightHoverEffect &&
  from &&
  hover &&
  dayTime >= from &&
  dayTime <= hover &&
  to == dayTime &&
  hover > to;

const hasPrevBoxShadow = ({
  dayTime,
  from,
  hasLeftHoverEffect,
  hover,
  to,
}: ClassConditionParams): boolean =>
  hasLeftHoverEffect &&
  to &&
  hover &&
  dayTime <= to &&
  dayTime >= hover &&
  from == dayTime &&
  hover < from;

const getClassesForDay = ({
  dayTime,
  from,
  hasLeftHoverEffect,
  hasRightHoverEffect,
  hover,
  invalidDates = [],
  lastDayOfMonth,
  to,
  validateDate,
}: ClassConditionParams & {
  invalidDates: number[];
  lastDayOfMonth: number;
  validateDate: (ts: number) => boolean;
}): string[] => [
  ...(hasDisabled({ dayTime, validateDate, invalidDates }) ? ['disabled'] : []),
  ...(dayTime === from || dayTime === to ? ['selected'] : []),
  ...(dayTime === from && to ? ['from-selected'] : []),
  ...(dayTime === lastDayOfMonth ? ['month-last-day'] : []),
  ...(dayTime === to && from ? ['to-selected'] : []),
  ...(dayTime >= from && dayTime <= to ? ['highlight'] : []),
  ...(hasBoxShadowRight({ hover, from, to, dayTime, hasRightHoverEffect })
    ? ['box-shadow']
    : []),
  ...(hasBoxShadowLeft({ hover, from, to, dayTime, hasLeftHoverEffect })
    ? ['box-shadow']
    : []),
  ...(hasNextBoxShadow({ hover, from, to, dayTime, hasRightHoverEffect })
    ? ['next-box-shadow']
    : []),
  ...(hasPrevBoxShadow({ hover, from, to, dayTime, hasLeftHoverEffect })
    ? ['prev-box-shadow']
    : []),
  ...(rightHover({ hover, from, to, dayTime }) ? ['rightmost'] : []),
];

/**
 * Parser for the month days
 */
export const parseDays = ({
  days,
  from,
  hasLeftHoverEffect,
  hasRightHoverEffect,
  hover,
  invalidDates = [],
  lastDayOfMonth,
  to,
  validateDate,
}: {
  days: Date[];
  from: number;
  hasLeftHoverEffect: boolean;
  hasRightHoverEffect: boolean;
  hover: number;
  invalidDates: number[];
  lastDayOfMonth: number;
  to: number;
  validateDate: (ts: number) => boolean;
}): { value: string; ts: number; classes: string }[] =>
  days.map((day) => {
    const dayTime = day.getTime();
    const dayDate = day.getDate();

    const startOfFrom = from && startOfDay(from).getTime();
    const startOfTo = to && startOfDay(to).getTime();

    const classes: string[] = getClassesForDay({
      dayTime,
      from: startOfFrom,
      hasLeftHoverEffect,
      hasRightHoverEffect,
      hover,
      invalidDates,
      lastDayOfMonth,
      to: startOfTo,
      validateDate,
    });

    return {
      value: String(dayDate),
      classes: classes.join(' '),
      ts: dayTime,
    };
  });
