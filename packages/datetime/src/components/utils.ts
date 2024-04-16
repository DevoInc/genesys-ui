import { isValid, parseISO } from 'date-fns';
import { TDatetime } from './declarations';

/**
 * Convert a date to timestamp
 * @param date a timestamp or a Date value
 * @returns a timestamp value
 */
export const toTSorPreset = (date: string | TDatetime) =>
  date instanceof Date
    ? date.getTime()
    : date === null || date === ''
      ? date
      : !isNaN(Number(date))
        ? Number(date)
        : date;

/**
 * Convert a date to timestamp
 * @param date a timestamp or a Date value
 * @returns a timestamp value
 */
export const toTimestamp = (date: TDatetime) =>
  date instanceof Date ? date.getTime() : date;

export const isManageableDate = (date: string | number) =>
  date != null && date != '' && !isNaN(Number(date));

/**
 * Check if a value is a valid timestamp
 * @param value an string or number with the date value to check
 * @returns if it's a valid value, return timestamp else null
 */
export const parseToTimestamp = (value: TDatetime | string): number | null => {
  if (typeof value === 'string') {
    const parsedDate = parseISO(value);
    const validDate = isValid(parsedDate);

    return validDate ? parsedDate.getTime() : null;
  } else if (typeof value === 'number') {
    const ts = new Date(value);
    return isNaN(ts.getTime()) ? null : ts.getTime();
  }
  return null;
};
