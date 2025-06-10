import { tz as tzFn } from '@date-fns/tz';
import { isAfter, isBefore, isSameDay } from 'date-fns';

import type { TCalendarDate } from '../../../../declarations';

export const isStrictlyWithinCalendarInterval = (
  value: Date,
  { start, end }: { start: TCalendarDate; end: TCalendarDate },
  tz: string,
) =>
  (isAfter(value, start) || isSameDay(value, start, { in: tzFn(tz) })) &&
  (isBefore(value, end) || isSameDay(value, end, { in: tzFn(tz) }));
