import * as React from 'react';
import { useTheme } from 'styled-components';
import { getTime, lastDayOfMonth as lastDayOfMonthFNS } from 'date-fns';

import { getMonthDays, getPrevDays, parseDays } from './ephemerides';
import {
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  Grid,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
} from '@devoinc/genesys-ui';
import type { IParseResult } from '../../declarations';
import { toTimestamp } from '../../helpers';
import { Cell, type CellProps } from './components';
import { parseDateAll } from './defaults';
import { rotateWeekDays, WEEK_DAYS } from './weekDays';

export interface CalendarProps
  extends Pick<CellProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'>,
    //native
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** The date for the month. One of `number` or `Date`. */
  monthDate?: Date | number;
  /** Disable hover effect. It could be combined with hoverDay, onMouseEnter
   * and onMouseLeave properties for custom control. */
  disableHoverDay?: boolean;
  /** Allow hover efect when mouse is left of a selected cell. */
  hasLeftHoverEffect?: boolean;
  /** Allow hover efect when mouse is right of a selected cell. */
  hasRightHoverEffect?: boolean;
  /** Set custom day to simulate the hover effect. It could be combined with
   * hoverDay, onMouseEnter and onMouseLeave properties for custom control.
   * One of `number` or `Date`. */
  hoverDay?: Date | number;
  /** Selected range days. */
  selectedDates?: (Date | number)[];
  /** Parse date for selectable dates.  */
  parseDate?: (dt: Date | number) => IParseResult;
  /** Days of the week to show in the calendar. The first day of the week is Monday. */
  weekDays?: [string, string, string, string, string, string, string];
  weekStart?: number;
  tz?: string;
}

export const InternalCalendar: React.FC<CalendarProps> = ({
  monthDate = new Date(),
  hasLeftHoverEffect = true,
  hasRightHoverEffect = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  selectedDates = [],
  parseDate = parseDateAll,
  weekDays = WEEK_DAYS,
  weekStart = 0,
  disableHoverDay = false,
  hoverDay: mouseHoverDay,
  styles,
  id,
  tooltip,
  role,
  'aria-describedby': ariaDescribedby,
  'aria-details': ariaDetails,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  as,
}) => {
  const theme = useTheme();
  const customHoverDay = toTimestamp(mouseHoverDay);
  const lastDayOfMonth = lastDayOfMonthFNS(monthDate).getTime();

  const [hoverDay, setHoverDay] = React.useState<number>(null);

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
      role={role}
      aria-describedby={ariaDescribedby}
      aria-details={ariaDetails}
      aria-hidden={ariaHidden}
      aria-lable={ariaLabel}
      aria-labelledby={ariaLabelledby}
      as={as}
      id={id}
      tooltip={tooltip}
      alignItems="center"
      gridTemplateColumns="repeat(7, 1fr)"
      justifyContent="center"
      rowGap="cmp-xxs"
      minWidth={theme.cmp.calendar.size.minWidth}
      styles={styles}
    >
      {rotateWeekDays(weekDays, weekStart).map((day) => (
        <Cell key={day} value={day} className="weekDayName" />
      ))}
      {Array(getPrevDays(monthDate, weekStart))
        .fill(null)
        .map((_, idx) => (
          <Cell key={`prev${idx}`} />
        ))}
      {parseDays({
        dates: getMonthDays(monthDate),
        from: getTime(selectedDates[0] ?? 0),
        hasLeftHoverEffect,
        hasRightHoverEffect,
        hover: hoverDay,
        lastDayOfMonth,
        to: getTime(selectedDates[1] ?? selectedDates[0] ?? 0),
        parseDate,
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
    </Grid>
  );
};

export const Calendar = InternalCalendar as typeof InternalCalendar & {
  Cell: typeof Cell;
};

Calendar.Cell = Cell;

InternalCalendar.displayName = 'Calendar';
Calendar.Cell.displayName = 'Calendar.Cell';
