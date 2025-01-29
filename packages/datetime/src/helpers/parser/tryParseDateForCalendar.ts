import type { TCalendarDate, TDate, TParseDate } from '../../declarations';
import { tryParseDate } from './tryParseDate';

/**
 * Try parse a date for calendar taking the parseDate function and rerutning
 * `undefined` if the parseDate function doesn't return a valid calendar format
 */
export const tryParseDateForCalendar =
  (parseDate: TParseDate) => (date: TDate) => {
    const result = tryParseDate(parseDate)(date);
    return typeof result !== 'string' ? (result as TCalendarDate) : undefined;
  };
