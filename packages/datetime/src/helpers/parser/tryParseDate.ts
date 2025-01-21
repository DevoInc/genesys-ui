import type { TDate, TParseDate } from '../../declarations';

/**
 * Try parse a date with parseDate function or return the date itself
 */
export const tryParseDate = (parseDate: TParseDate) => (date: TDate) => {
  if (typeof date === 'string') {
    const parsed = parseDate(date);
    return parsed.isValid ? parsed.value : undefined;
  }
  return date;
};
