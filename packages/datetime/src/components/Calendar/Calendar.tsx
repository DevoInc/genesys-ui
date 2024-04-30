import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  getMonthDays,
  getNextDays,
  getPrevDays,
  parseDays,
} from './ephemerides';
import { checkValidDate } from './validations';
import {
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  Grid,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
} from '@devoinc/genesys-ui';
import type { ITime, TDatetime } from '../declarations';
import { toTimestamp } from '../../utils';
import { lastDayOfMonth as lastDayOfMonthFNS } from 'date-fns';
import { Cell, type CellProps } from './components';

export interface CalendarProps
  extends Pick<CellProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'>,
    Pick<ITime, 'maxDate' | 'minDate'>,
    //native
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** The date for the month. One of `number` or `Date`. */
  dateForMonth?: TDatetime;
  /** Disable hover effect. It could be combined with hoverDay, onMouseEnter and onMouseLeave properties for custom control. */
  disableHoverDay?: boolean;
  /** Allow hover efect when mouse is left of a selected cell. */
  hasLeftHoverEffect?: boolean;
  /** Allow hover efect when mouse is right of a selected cell. */
  hasRightHoverEffect?: boolean;
  /** Set custom day to simulate the hover effect. It could be combined with hoverDay, onMouseEnter and onMouseLeave properties for custom control. One of `number` or `Date`. */
  hoverDay?: TDatetime;
  /** List of day not valid. */
  invalidDates?: TDatetime[];
  /** Selected range days. */
  selectedDates?: { from: TDatetime; to: TDatetime };
  /** Validate if a date is selectable.  */
  validateDate?: (ts: number) => boolean;
  /** Days of the week to show in the calendar. The first day of the week is Monday. */
  weekDays?: [string, string, string, string, string, string, string];
}

export const InternalCalendar: React.FC<CalendarProps> = ({
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
  const theme = useTheme();
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

  const [hoverDay, setHoverDay] = React.useState<number>(null);

  const validateDateCallback = React.useCallback(
    (ts: number) => {
      return checkValidDate({
        ts,
        validationFn: validateDate,
        maxDate,
        minDate,
      });
    },
    [validateDate, maxDate, minDate],
  );

  const onMouseEnterCallback = React.useCallback(
    (ts: number) => {
      if (!disableHoverDay) {
        setHoverDay(ts);
      }
      onMouseEnter?.(ts);
    },
    [disableHoverDay, onMouseEnter],
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
    <Grid
      {...nativeProps}
      alignItems="center"
      gridTemplateColumns="repeat(7, 1fr)"
      justifyContent="center"
      rowGap="cmp-xxs"
      minWidth={theme.cmp.calendar.size.minWidth}
      styles={styles}
    >
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
    </Grid>
  );
};

export const Calendar = InternalCalendar as typeof InternalCalendar & {
  Cell: typeof Cell;
};

Calendar.Cell = Cell;

InternalCalendar.displayName = 'Calendar';
Calendar.Cell.displayName = 'Calendar.Cell';
