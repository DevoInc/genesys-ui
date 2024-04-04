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
