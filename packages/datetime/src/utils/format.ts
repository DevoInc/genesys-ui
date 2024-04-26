import { format as formatFNS, parse } from 'date-fns';

import { TDatetime } from '../components/declarations';

/**
 * Returns a time string format based on the provided parameters.
 * @param hasSeconds - Indicates whether seconds should be included in the time format. (Default: true).
 * @param hasMillis - Indicates whether milliseconds should be included in the time format. Only has effect if hasSeconds is true. (Default: false).
 * @returns - The generated time string format.
 */
export const getFormatTimeStr = (hasSeconds = true, hasMillis = false) =>
  hasSeconds ? (hasMillis ? 'HH:mm:ss.sss' : 'HH:mm:ss') : 'HH:mm';

export interface FormatDateResult {
  format?: string;
  hasMillis?: boolean;
  hasSeconds?: boolean;
  hasTime?: boolean;
  ts: TDatetime;
}
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
export const formatDate = ({
  ts,
  format,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
}: FormatDateResult): string => {
  const formatStr =
    format ||
    `yyyy-MM-dd${hasTime ? ` ${getFormatTimeStr(hasSeconds, hasMillis)}` : ''}`;
  return formatFNS(ts, formatStr);
};

export interface ParseDateResult {
  isValid: boolean;
  value: number;
  errors: string[];
}

/**
 * Parses a date string into milliseconds since epoch.
 * @param {string} dateStr - The date string to parse.
 * @param {string[]} validFormats - Array of valid date formats to parse. Defaults to ['yyyy-MM-dd HH:mm:ss'].
 * @returns {ParseDateResult} An object containing information about the parsed date.
 */
export const parseDate = (
  dateStr: string,
  validFormats: string[] = ['yyyy-MM-dd HH:mm:ss'],
): ParseDateResult => {
  for (const format of validFormats) {
    try {
      const fechaParseada = parse(dateStr, format, new Date());
      if (
        !isNaN(fechaParseada.getTime()) &&
        format.length === dateStr.trim().length
      ) {
        return {
          isValid: true,
          value: fechaParseada.getTime(),
          errors: [],
        };
      }
    } catch (e) {
      return { isValid: false, value: null, errors: ['Invalid date'] };
    }
  }
  return { isValid: false, value: null, errors: ['Invalid date'] };
};
