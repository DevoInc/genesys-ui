import { format as formatFNS } from 'date-fns';

import { TDatetime } from '../declarations';

export const getFormatDateTimeStr = (hasSecons = true, hasMillis = false) =>
  `yyyy-MM-dd HH:mm${hasSecons ? `:ss${hasMillis ? '.sss' : ''}` : ''}`;

/**
 * Returns a time string format based on the provided parameters.
 * @param hasSeconds - Indicates whether seconds should be included in the time format. (Default: true).
 * @param hasMillis - Indicates whether milliseconds should be included in the time format. Only has effect if hasSeconds is true. (Default: false).
 * @returns - The generated time string format.
 */
export const getFormatTimeStr = (hasSecons = true, hasMillis = false) =>
  `HH:mm${hasSecons ? `:ss${hasMillis ? '.sss' : ''}` : ''}`;

export const getFormatDateStr = () => 'yyyy-MM-dd';

/**
 * Formats a date string based on the provided parameters.
 * @param options - An object containing options for formatting the date.
 * @param options.ts - The date to format.
 * @param options.format - The format string for the date. If not provided, a default format is used.
 * @param options.hasMillis - Indicates whether milliseconds should be included in the time format. (Default: false)
 * @param options.hasSeconds - Indicates whether seconds should be included in the time format. (Default: true)
 * @param options.hasTime - Indicates whether time should be included in the date format. (Default: true)
 * @returns - The formatted date string.
 */
export const formatDate = (
  ts: TDatetime,
  format: string = 'yyyy-MM-dd HH:mm:ss',
): string => formatFNS(ts, format);
