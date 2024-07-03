import { parse, isValid } from 'date-fns';

import type { IParseResult } from '../declarations';
/**
 * Parses a date string into milliseconds since epoch.
 * @param dateStr - The date string to parse.
 * @param validFormats - Array of valid date formats to parse. Defaults to
 *   ['yyyy-MM-dd HH:mm:ss'].
 * @returns An object containing information about the parsed date.
 */
export const parseStrDate = (
  dateStr: string,
  validFormats: string[] = ['yyyy-MM-dd HH:mm:ss'],
): IParseResult => {
  for (const format of validFormats) {
    const parsedDate = parse(dateStr, format, new Date());
    if (isValid(parsedDate) && format.length === dateStr.trim().length) {
      return { isValid: true, value: parsedDate.getTime(), errors: [] };
    }
  }
  return { isValid: false, value: null, errors: ['Invalid date'] };
};
