import type { TDateRange } from '../../declarations';
import { normalizeDate } from '../normalization';

export const areDateRangeEqual = (a: TDateRange, b: TDateRange) =>
  a?.length === b?.length
    ? a.every(
        (item, index) =>
          normalizeDate(item) === normalizeDate(b[index]),
      )
    : false;
