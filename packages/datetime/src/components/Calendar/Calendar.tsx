import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  lastDayOfMonth as lastDayOfMonthFNS,
  isSameDay,
  getTime,
  set,
  getDate,
} from 'date-fns';
import { TZDate, tz as tzFn } from '@date-fns/tz';

import type {
  TCalendarDateRange,
  TParseCalendarDate,
} from '../../declarations';
import { TCalendarI18n } from './declarations';
import { useMergeI18n } from '../../hooks';
import { toTimestamp } from '../../helpers';
import { rotateWeekDays, WEEK_DAYS } from '../../helpers';
import { defaultErrorsRepr } from './errors';
import { tautologyParseDate } from '../../parsers';
import {
  defaultDateRepr,
  hasBoxShadowLeft,
  hasBoxShadowRight,
  hasNextBoxShadow,
  hasPrevBoxShadow,
  rightHover,
} from './day';
import { defaultCalendarI18n } from './i18n';
import { getTo, getFrom } from './day';
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
import {
  isStrictlyWithinCalendarInterval,
  isWithinCalendarInterval,
} from './helpers';

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
  value?: TCalendarDateRange;
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
      }),
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

  const rangeDates = React.useMemo(
    () => value.map((x) => (typeof x === 'number' ? new TZDate(x, tz) : x)),
    [value],
  );

  const monthDaysCmpArr = monthDays.map((day) => {
    const isSelected = rangeDates.some((x) =>
      isSameDay(day, x, { in: tzFn(tz) }),
    );
    const isFrom =
      rangeDates.length > 0
        ? isSameDay(day, rangeDates[0], { in: tzFn(tz) })
        : false;
    const isTo =
      rangeDates.length > 1
        ? isSameDay(day, rangeDates[1], { in: tzFn(tz) })
        : false;
    const isLastDayOfMonth = isSameDay(day, lastDayOfMonth, { in: tzFn(tz) });
    const isInsideSelection = isStrictlyWithinCalendarInterval(
      day,
      {
        start: rangeDates[0],
        end: rangeDates[1],
      },
      tz,
    );
    const ts = getTime(
      set(
        day,
        { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 },
        { in: tzFn(tz) },
      ),
    );
    const monthDay = getDate(day);
    const label = dateRepr(ts);

    const result = parseDate(day);
    const isInsideRange = isWithinCalendarInterval(
      day,
      { start: minDate, end: maxDate },
      tz,
    );
    const isValid = isInsideRange && result.isValid;
    const isDisabled = !isValid;
    const errors = !isInsideRange
      ? [i18n.outOfRange].concat(result.errors)
      : result.errors;

    const from = getFrom(value);
    const to = getTo(value);
    const hover = hoverDay;

    const isBoxShadowRight = hasBoxShadowRight({
      hover,
      from,
      to,
      ts,
      hasRightHoverEffect,
    });
    const isBoxShadowLeft = hasBoxShadowLeft({
      hover,
      from,
      to,
      ts,
      hasLeftHoverEffect,
    });
    const isNextBoxShadow = hasNextBoxShadow({
      hover,
      from,
      to,
      ts,
      hasRightHoverEffect,
    });
    const isPrevBoxShadow = hasPrevBoxShadow({
      hover,
      from,
      to,
      ts,
      hasLeftHoverEffect,
    });
    const isRightHover = rightHover({ hover, from, to, ts });

    return (
      <Cell
        selected={isSelected}
        key={`day${ts}`}
        className={[
          'dayName',
          isDisabled ? 'disabled' : '',
          isSelected ? 'selected' : '',
          isFrom ? 'from-selected' : '',
          isTo ? 'to-selected' : '',
          monthDay === 1 ? 'month-first-day' : '',
          isLastDayOfMonth ? 'month-last-day' : '',
          isInsideSelection ? 'highlight' : '',
          isBoxShadowLeft || isBoxShadowRight ? 'box-shadow' : '',
          isNextBoxShadow ? 'next-box-shadow' : '',
          isPrevBoxShadow ? 'prev-box-shadow' : '',
          isRightHover ? 'rightmost' : '',
        ].join(' ')}
        onClick={onClick}
        onMouseEnter={onMouseEnterCallback}
        onMouseLeave={onMouseLeaveCallback}
        ts={ts}
        value={String(monthDay)}
        disabled={disabled || isDisabled}
        label={label}
        tooltip={isDisabled ? errorsRepr(errors) : label}
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
