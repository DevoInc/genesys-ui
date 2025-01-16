import type { TDate } from '../../declarations';

export const normalizeDate = (date: TDate) =>
  date instanceof Date ? date.getTime() : date;
