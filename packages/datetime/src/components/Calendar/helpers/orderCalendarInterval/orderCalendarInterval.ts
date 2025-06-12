import { isAfter } from 'date-fns';

import type { TCalendarDate } from '../../../../declarations';

export const orderCalendarInterval = (a: TCalendarDate, b: TCalendarDate) =>
  isAfter(a, b) ? { start: b, end: a } : { start: a, end: b };
