import type { TDate, TParseDate } from '../../declarations';

/**
 * Try parse a date with parseDate function or return the date itself
 */
export const tryParseDate = (parseDate: TParseDate) => (date: TDate) =>
  typeof date === 'string' ? parseDate(date).value : date;
