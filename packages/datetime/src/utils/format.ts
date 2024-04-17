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
}: {
  format?: string;
  hasMillis?: boolean;
  hasSeconds?: boolean;
  hasTime?: boolean;
  ts: TDatetime;
}): string => {
  const formatStr =
    format ||
    `yyyy-MM-dd${hasTime ? ` ${getFormatTimeStr(hasSeconds, hasMillis)}` : ''}`;
  return formatFNS(ts, formatStr);
};

/**
 * Checks if a given date string is in one of the valid formats.
 * @param dateStr - The date string to validate.
 * @param validFormats - An array of valid date formats. (Default: ['yyyy-MM-ss HH:mm:ss'])
 * @returns - timestamp value if the date string is in one of the valid formats, false otherwise.
 */
export const isValidFormat = (
  dateStr: string,
  validFormats: string[] = ['yyyy-MM-dd HH:mm:ss'],
) => {
  for (const format of validFormats) {
    try {
      const fechaParseada = parse(dateStr, format, new Date());
      if (
        !isNaN(fechaParseada.getTime()) &&
        format.length === dateStr.trim().length
      ) {
        return fechaParseada.getTime();
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};
