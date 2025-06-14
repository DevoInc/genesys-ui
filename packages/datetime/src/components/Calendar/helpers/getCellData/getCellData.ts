import { getTime, isSameDay, set } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

import type { ICellData, TCalendarI18n } from '../../declarations';
import type { TParseDate } from '../../../../declarations';
import { getCalendarDay } from '../getCalendarDay';

export const getCellData =
  ({
    interval,
    tz,
    dateRepr,
    parseDate,
    minDate,
    maxDate,
    i18n,
  }: {
    interval: { start: Date; end: Date };
    tz: string;
    dateRepr: (ts: number) => string;
    parseDate: TParseDate;
    minDate?: number | Date;
    maxDate?: number | Date;
    i18n?: TCalendarI18n;
  }) =>
  (date: Date): ICellData => {
    const isLastDayOfMonth = isSameDay(date, interval.end, {
      in: tzFn(tz),
    });
    const ts = getTime(
      set(
        date,
        { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 },
        { in: tzFn(tz) },
      ),
    );
    const calendarDay = getCalendarDay(date, tz);

    const label = dateRepr(ts);
    const result = parseDate(date);
    const minDay = minDate ? getCalendarDay(minDate, tz) : null;
    const maxDay = maxDate ? getCalendarDay(maxDate, tz) : null;

    // Inside the range
    const isInsideRange =
      (minDay == null || calendarDay.value >= minDay.value) &&
      (maxDay == null || calendarDay.value <= maxDay.value);

    // Parser
    const isValid = isInsideRange && result.isValid;
    const isDisabled = !isValid;
    const errors = !isInsideRange
      ? [i18n.outOfRange].concat(result.errors)
      : result.errors;

    return {
      date,
      ts,
      calendarDay,
      label,
      isDisabled,
      errors,
      isLastDayOfMonth,
    };
  };
