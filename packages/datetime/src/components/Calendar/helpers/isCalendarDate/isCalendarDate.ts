import type { TDate } from '../../../../declarations';

export const isCalendarDate = (value: TDate) =>
  value != null && typeof value !== 'string';
