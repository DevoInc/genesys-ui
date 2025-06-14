import { tz as tzFn } from '@date-fns/tz';
import { getDate, getMonth, getYear } from 'date-fns';

export const getCalendarDay = (date: Date | number, tz: string) => {
  const year = getYear(date, { in: tzFn(tz) });
  const month = getMonth(date, { in: tzFn(tz) });
  const day = getDate(date, { in: tzFn(tz) });
  const value = year * 365 + month * 30 + day;
  return {
    year,
    month,
    day,
    value,
  };
};
