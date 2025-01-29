import type { TCalendarDate, TParseRange } from '../declarations';
import { lte } from '../helpers';
import type { IParseRangeParams } from './declarations';
import { defaultParseDateParams, defaultParseRangeParams } from './defaults';
import { getDefaultParseDate } from './getDefaultParseDate';

/**
 * Parse a range of dates for avoid inverse dates
 */
export const getDefaultParseRange: (
  params?: IParseRangeParams,
) => TParseRange =
  ({ validFormats, i18n } = defaultParseRangeParams) =>
  (range) => {
    const defaultParseDate = getDefaultParseDate({
      ...defaultParseDateParams,
      validFormats,
    });
    const results = range.map((date) => defaultParseDate(date));
    return results.reduce(
      (prev, curr, index, arr) => {
        if (index > 0) {
          if (
            lte(
              arr[index - 1].value as TCalendarDate,
              curr.value as TCalendarDate,
            )
          ) {
            return prev;
          }
          return {
            value: range,
            isValid: false,
            errors: [i18n.invertedOperators],
          };
        }
        return prev;
      },
      {
        value: range,
        isValid: true,
        errors: [],
      },
    );
  };
