import * as React from 'react';

import {
  getMonthDays,
  getNextDays,
  getPrevDays,
  parseDays,
} from './ephemerides';
import { StyledCalendar } from './StyledCalendar';
import { Cell, CellProps } from './components';
import { checkValidDate } from './validations';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '@devoinc/genesys-ui';
import { Datetime } from '../declarations';
import { toTimestamp } from '../utils';
import { lastDayOfMonth as lastDayOfMonthFNS } from 'date-fns';

export interface CalendarProps
  extends Pick<CellProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'>,
    //native
    GlobalAttrProps,
    GlobalAriaProps,
    StyledOverloadCssProps,
    StyledPolymorphicProps {
  /** The date for the month. One of `number` or `Date`. */
  dateForMonth?: Datetime;
  /** Disable hover effect. It could be combined with hoverDay, onMouseEnter and onMouseLeave properties for custom control. */
  disableHoverDay?: boolean;
  /** The latest day to accept. One of `number` or `Date`. */
  maxDate?: Datetime;
  /** The earliest day to accept. One of `number` or `Date`. */
  minDate?: Datetime;
  /** Allow hover efect when mouse is left of a selected cell. */
  hasLeftHoverEffect?: boolean;
  /** Allow hover efect when mouse is right of a selected cell. */
  hasRightHoverEffect?: boolean;
  /** Set custom day to simulate the hover effect. It could be combined with hoverDay, onMouseEnter and onMouseLeave properties for custom control. One of `number` or `Date`. */
  hoverDay?: Datetime;
  /** List of day not valid. */
  invalidDates?: Datetime[];
  /** Selected range days. */
  selectedDates?: { from: Datetime; to: Datetime };
  /** Validate if a date is selectable.  */
  validateDate?: (ts: number) => boolean;
  /** Days of the week to show in the calendar. The first day of the week is Monday. */
  weekDays?: [string, string, string, string, string, string, string];
}

export const Calendar: React.FC<CalendarProps> = ({
  dateForMonth: monthToShow,
  hasLeftHoverEffect = true,
  hasRightHoverEffect = true,
  invalidDates: notValidDates = [],
  maxDate: latestDate,
  minDate: earliestDate,
  onClick,
  onMouseEnter,
  onMouseLeave,
  selectedDates: rangeSelected = { from: null, to: null },
  validateDate = (ts) => ts < new Date().getTime(),
  weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  disableHoverDay = false,
  hoverDay: mouseHoverDay,
  styles,
  ...nativeProps
}) => {
  const dateForMonth = toTimestamp(monthToShow);
  const maxDate = toTimestamp(latestDate);
  const minDate = toTimestamp(earliestDate);
  const selectedDates = {
    from: toTimestamp(rangeSelected.from),
    to: toTimestamp(rangeSelected.to),
  };
  const customHoverDay = toTimestamp(mouseHoverDay);
  const invalidDates = notValidDates.map((date) => toTimestamp(date));
  const lastDayOfMonth = lastDayOfMonthFNS(dateForMonth).getTime();

  const [hoverDay, setHoverDay] = React.useState(null);

  const validateDateCallback = React.useCallback(
    (ts: number) => {
      return checkValidDate({
        ts,
        validationFn: validateDate,
        maxDate,
        minDate,
      });
    },
    [validateDate, maxDate, minDate]
  );

  const onMouseEnterCallback = React.useCallback(
    (ts: number) => {
      if (!disableHoverDay) {
        setHoverDay(ts);
      }
      onMouseEnter?.(ts);
    },
    [disableHoverDay, onMouseEnter]
  );

  const onMouseLeaveCallback = React.useCallback(() => {
    if (!disableHoverDay) {
      setHoverDay(null);
    }
    onMouseLeave?.();
  }, [disableHoverDay, onMouseLeave]);

  React.useEffect(() => {
    setHoverDay(customHoverDay);
  }, [customHoverDay]);

  return (
    <StyledCalendar {...nativeProps} css={styles}>
      {weekDays.map((day) => (
        <Cell key={day} value={day} className="weekDayName" />
      ))}
      {Array(getPrevDays(dateForMonth))
        .fill(null)
        .map((_, idx) => (
          <Cell key={`prev${idx}`} />
        ))}
      {parseDays({
        days: getMonthDays(dateForMonth),
        from: selectedDates?.from ?? 0,
        hasLeftHoverEffect,
        hasRightHoverEffect,
        hover: hoverDay,
        invalidDates,
        lastDayOfMonth,
        to: selectedDates?.to ?? 0,
        validateDate: validateDateCallback,
      }).map((day) => (
        <Cell
          key={`day${day.value}`}
          className={`dayName ${day.classes}`}
          onClick={onClick}
          onMouseEnter={onMouseEnterCallback}
          onMouseLeave={onMouseLeaveCallback}
          ts={day.ts}
          value={day.value}
        />
      ))}
      {Array(getNextDays(dateForMonth))
        .fill(null)
        .map((_, idx) => (
          <Cell key={`prev${idx}`} />
        ))}
    </StyledCalendar>
  );
};
