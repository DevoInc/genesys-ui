import type { TDate } from '../../declarations';

export const normalizeDateRange = (date: TDate) =>
  date instanceof Date ? date.getTime() : date;
