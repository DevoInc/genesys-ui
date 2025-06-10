import type { TDateRange } from '../../../../declarations';
import { isCalendarDate } from '../isCalendarDate';

export const isCalendarRange = (value: TDateRange) =>
  value.length > 0 && value.every(isCalendarDate);
