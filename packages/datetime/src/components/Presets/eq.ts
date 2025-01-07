import type { TDate, TDateRange } from '../../declarations';

const normalize = (date: TDate) =>
  date instanceof Date ? date.getTime() : date;

export const arePresetValuesEqual = (a: TDateRange, b: TDateRange) =>
  a?.length === b?.length
    ? a.every((item, index) => normalize(item) === normalize(b[index]))
    : false;
