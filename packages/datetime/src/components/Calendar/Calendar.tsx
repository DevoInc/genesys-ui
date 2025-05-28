import * as React from 'react';
import { useTheme } from 'styled-components';
import { lastDayOfMonth as lastDayOfMonthFNS } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

import type { TDateRange, TParseCalendarDate } from '../../declarations';
import { TCalendarI18n } from './declarations';
import { useMergeI18n } from '../../hooks';
import { toTimestamp } from '../../helpers';
import { rotateWeekDays, WEEK_DAYS } from '../../helpers';
import { defaultErrorsRepr } from './errors';
import { tautologyParseDate } from '../../parsers';
import { defaultDateRepr } from './day';
import { defaultCalendarI18n } from './i18n';
import {
  getClassNameFromProperties,
  getDayProperties,
  getTo,
  getFrom,
} from './day';
import { getMonthDays, getPrevDays } from './month';
import {
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  Grid,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  type IDataAttrs,
  Box,
} from '@devoinc/genesys-ui';
import { CalendarWeekDay, Cell, type CellProps } from './components';

export interface CalendarProps
  extends Pick<CellProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'>,
    //native
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    IDataAttrs,
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
  /** Selected range. */
  value?: TDateRange;
  /** Days of the week to show in the calendar. The first day of the week is Monday. */
  weekDays?: [string, string, string, string, string, string, string];
  weekStart?: number;
  /** Timezone */
  tz?: string;
  /** Parse date for selectable dates.  */
  parseDate?: TParseCalendarDate;
  /** Max date allowed */
  minDate?: number | Date;
  /** Min date allowed */
  maxDate?: number | Date;
  dateRepr?: (ts: number) => string;
  errorsRepr?: (errors: string[]) => string;
  /** Internationalization object */
  i18n?: TCalendarI18n;
  disabled?: boolean;
}

export const InternalCalendar: React.FC<CalendarProps> = ({
  monthDate = new Date(),
  hasLeftHoverEffect = false,
  hasRightHoverEffect = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value = [],
  parseDate = tautologyParseDate,
  weekDays = WEEK_DAYS,
  weekStart = 0,
  disableHoverDay = false,
  hoverDay: mouseHoverDay,
  style,
  id,
  tooltip,
  role = 'grid',
  'aria-describedby': ariaDescribedby,
  'aria-details': ariaDetails,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  as,
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone,
  dateRepr = defaultDateRepr,
  errorsRepr = defaultErrorsRepr,
  minDate,
  maxDate,
  i18n: userI18n = defaultCalendarI18n,
  disabled = false,
  ...dataProps
}) => {
  const i18n = useMergeI18n(userI18n, defaultCalendarI18n) as TCalendarI18n;
  const theme = useTheme();
  const customHoverDay = React.useMemo(
    () => toTimestamp(mouseHoverDay),
    [mouseHoverDay],
  );
  const lastDayOfMonth = React.useMemo(
    () =>
      lastDayOfMonthFNS(monthDate, {
        in: tzFn(tz),
      }).getTime(),
    ['monthDate'],
  );
  const rotatedWeekDays = React.useMemo(
    () => rotateWeekDays(weekDays, weekStart),
    [weekDays, weekStart],
  );
  const prevDays = React.useMemo(
    () => Array(getPrevDays(monthDate, weekStart, tz)).fill(null),
    [monthDate, weekStart, tz],
  );
  const monthDays = React.useMemo(
    () => getMonthDays(monthDate, tz),
    [monthDate, tz],
  );

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

  const prevDaysCmpArr = prevDays.map((_, idx) => (
    <div key={`prev${idx}`} role="gridcell" />
  ));

  const monthDaysCmpArr = monthDays
    .map(
      getDayProperties(
        getFrom(value),
        getTo(value),
        lastDayOfMonth,
        parseDate,
        hoverDay,
        hasRightHoverEffect,
        hasLeftHoverEffect,
        minDate,
        maxDate,
        i18n,
      ),
    )
    .map((dayProps) => {
      const classes = getClassNameFromProperties(dayProps);
      return (
        <Cell
          selected={classes['selected'] ?? false}
          key={`day${dayProps.ts}`}
          className={`dayName ${classes.join(' ')}`}
          onClick={onClick}
          onMouseEnter={onMouseEnterCallback}
          onMouseLeave={onMouseLeaveCallback}
          ts={dayProps.ts}
          value={String(dayProps.monthDay)}
          disabled={disabled || dayProps.isDisabled}
          label={dateRepr(dayProps.ts)}
          tooltip={
            dayProps.isDisabled
              ? errorsRepr(dayProps.errors)
              : dateRepr(dayProps.ts)
          }
        />
      );
    });

  const evalTotalLastDays = 42 - prevDaysCmpArr.concat(monthDaysCmpArr).length;
  const lastDaysLength =
    evalTotalLastDays < 7 ? evalTotalLastDays : evalTotalLastDays - 7;

  const lastDaysCmpArr = prevDays
    .filter((_, idx) => idx < lastDaysLength)
    .map((_, idx) => <div key={`last${idx}`} role="gridcell" />);

  const groupDaysByRow = (daysArray: React.JSX.Element[]) => {
    let grouped = [];
    for (let i = 0; i < daysArray.length; i += 7) {
      grouped.push(daysArray.slice(i, i + 7));
    }
    return grouped;
  };

  const groupedDaysCmpByRow = groupDaysByRow(
    prevDaysCmpArr.concat(monthDaysCmpArr).concat(lastDaysCmpArr),
  );

  return (
    <Grid
      {...dataProps}
      role={role}
      aria-describedby={ariaDescribedby}
      aria-details={ariaDetails}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      as={as}
      id={id}
      tooltip={tooltip}
      alignItems="center"
      gridTemplateColumns="repeat(1, 1fr)"
      justifyContent="center"
      rowGap="cmp-xxs"
      minWidth={theme.cmp.calendar.size.minWidth}
      style={style}
    >
      <Box role="rowgroup">
        <Grid
          role="row"
          alignItems="center"
          gridTemplateColumns="repeat(7, 1fr)"
          justifyContent="center"
          rowGap="cmp-xxs"
          minWidth={theme.cmp.calendar.size.minWidth}
        >
          {rotatedWeekDays.map((day) => (
            <CalendarWeekDay key={day} value={day} />
          ))}
        </Grid>
      </Box>
      <Box role="rowgroup">
        {groupedDaysCmpByRow.map((row, idx) => (
          <Grid
            key={idx}
            role="row"
            alignItems="center"
            gridTemplateColumns="repeat(7, 1fr)"
            justifyContent="center"
            rowGap="cmp-xxs"
            minWidth={theme.cmp.calendar.size.minWidth}
          >
            {row.map((day: React.JSX.Element) => day)}
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

export const Calendar = InternalCalendar as typeof InternalCalendar & {
  Cell: typeof Cell;
};

Calendar.Cell = Cell;

InternalCalendar.displayName = 'Calendar';
Calendar.Cell.displayName = 'Calendar.Cell';
