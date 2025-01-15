import type { TDateRange } from '../../declarations';
import { normalizeDateRange } from './norm';

export const areDateRangeEqual = (a: TDateRange, b: TDateRange) =>
  a?.length === b?.length
    ? a.every(
        (item, index) =>
          normalizeDateRange(item) === normalizeDateRange(b[index]),
      )
    : false;
