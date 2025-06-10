import { tz as tzFn } from '@date-fns/tz';
import { isAfter, isBefore, isSameDay } from 'date-fns';
import type { TCalendarDate } from '../../../../declarations';

export const isWithinCalendarInterval = (
  value: Date,
  { start, end }: { start: TCalendarDate; end: TCalendarDate },
  tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone,
) =>
  (start == null ||
    isAfter(value, start) ||
    isSameDay(value, start, { in: tzFn(tz) })) &&
  (end == null ||
    isBefore(value, end) ||
    isSameDay(value, end, { in: tzFn(tz) }));
