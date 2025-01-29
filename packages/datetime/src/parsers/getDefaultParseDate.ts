import { parse, isValid } from 'date-fns';

import type { TParseDate } from '../declarations';
import type { IParseDateParams } from './declarations';
import { defaultParseDateParams } from './defaults';

/**
 * Parse a date using one or more schemas
 * https://date-fns.org/v4.1.0/docs/parse
 */
export const getDefaultParseDate: (params?: IParseDateParams) => TParseDate =
  ({ validFormats, i18n } = defaultParseDateParams) =>
  (date) => {
    if (typeof date === 'string') {
      for (const format of validFormats) {
        const parsedDate = parse(date, format, new Date());
        if (isValid(parsedDate) && format.length === date.trim().length) {
          return { isValid: true, value: parsedDate.getTime(), errors: [] };
        }
      }
      return { isValid: false, value: date, errors: [i18n.invalidDate] };
    }
    return { isValid: true, value: date, errors: [] };
  };
