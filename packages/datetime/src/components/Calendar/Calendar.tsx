import * as React from 'react';
import { useTheme } from 'styled-components';
import { startOfMonth, endOfMonth } from 'date-fns';
import { TZDate, tz as tzFn } from '@date-fns/tz';

import type {
  TCalendarDateRange,
  TParseCalendarDate,
} from '../../declarations';
import { TCalendarI18n } from './declarations';
import { useMergeI18n } from '../../hooks';
import { rotateWeekDays, WEEK_DAYS } from '../../helpers';
import { tautologyParseDate } from '../../parsers';
import { defaultCalendarI18n } from './i18n';
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
  defaultDateRepr,
  getCellData as getCellDataFn,
  defaultErrorsRepr,
  getCalendarDay,
} from './helpers';
import { useCalendarRows } from './hooks';
import { clearHover, setRangeHovered, setRangeHoveredEdge } from './dom';
import { CalendarContext, CalendarContextProvider } from './contexts';

export interface CalendarProps
  extends Pick<CellProps, 'onClick'>,
    //native
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    IDataAttrs,
    IStyledPolymorphic {
  onMouseEnter?: (ts: number) => void;
  onMouseLeave?: (ts: number) => void;
  /** The date for the month. One of `number` or `Date`. */
  monthDate?: Date | number;
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
  /** The number of element of one selection, 1 for a single selection, 2 for a
   * range selection */
  selectionLength?: number;
}

export const InternalCalendar: React.FC<CalendarProps> = ({
  monthDate = new Date(),
  onClick,
  onMouseEnter,
  onMouseLeave,
  value = [],
  parseDate = tautologyParseDate,
  weekDays = WEEK_DAYS,
  weekStart = 0,
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
  dateRepr = defaultDateRepr(tz),
  errorsRepr = defaultErrorsRepr,
  minDate,
  maxDate,
  i18n: userI18n = defaultCalendarI18n,
  disabled = false,
  selectionLength = 1,
  ...dataProps
}) => {
  const i18n = useMergeI18n(userI18n, defaultCalendarI18n) as TCalendarI18n;
  const theme = useTheme();

  const { cellRefs } = React.useContext(CalendarContext);

  const interval = React.useMemo(() => {
    return {
      start: startOfMonth(monthDate, { in: tzFn(tz) }),
      end: endOfMonth(monthDate, { in: tzFn(tz) }),
    };
  }, [monthDate, tz]);

  const getCellData = React.useMemo(
    () =>
      getCellDataFn({
        interval,
        tz,
        dateRepr,
        parseDate,
        minDate,
        maxDate,
        i18n,
      }),
    [interval, tz, dateRepr, parseDate, minDate, maxDate, i18n],
  );

  const rows = useCalendarRows({
    interval,
    tz,
    weekStart,
    getCellData,
  });

  const rotatedWeekDays = React.useMemo(
    () => rotateWeekDays(weekDays, weekStart),
    [weekDays, weekStart],
  );

  const rangeDays = React.useMemo(
    () =>
      value.map((x) =>
        getCalendarDay(typeof x === 'number' ? new TZDate(x, tz) : x, tz),
      ),
    [value],
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
      gridTemplateColumns="repeat(1, 1fr)"
      minWidth={theme.cmp.calendar.size.minWidth}
      style={style}
    >
      <Box role="rowgroup">
        <Grid
          role="row"
          gridTemplateColumns="repeat(7, 1fr)"
          minWidth={theme.cmp.calendar.size.minWidth}
        >
          {rotatedWeekDays.map((day) => (
            <CalendarWeekDay key={day} value={day} />
          ))}
        </Grid>
      </Box>
      <Box role="rowgroup">
        {rows.map((row, idx) => (
          <Grid
            key={idx}
            role="row"
            alignItems="center"
            gridTemplateColumns="repeat(7, 1fr)"
            justifyContent="center"
            rowGap="cmp-xxs"
            minWidth={theme.cmp.calendar.size.minWidth}
            onMouseLeave={() => {
              if (selectionLength > 1 && rangeDays.length === 1) {
                cellRefs.current.forEach(([cell]) => {
                  if (cell) {
                    clearHover(cell);
                  }
                });
              }
            }}
          >
            {row.map((day, idx) => {
              if (day) {
                const {
                  ts,
                  isDisabled,
                  calendarDay,
                  label,
                  isLastDayOfMonth,
                  errors,
                } = day;

                const isStart = rangeDays?.[0]?.value === calendarDay?.value;
                const isEnd = rangeDays?.[1]?.value === calendarDay?.value;
                const isInsideSelection =
                  calendarDay?.value >= rangeDays?.[0]?.value &&
                  calendarDay?.value <= rangeDays?.[1]?.value;

                return (
                  <Cell
                    isSelectedStart={isStart}
                    isSelectedEnd={isEnd}
                    isInsideSelection={isInsideSelection}
                    ref={(el) => cellRefs.current.push([el, calendarDay])}
                    key={`day${ts}`}
                    className={[
                      'dayName',
                      isDisabled ? 'disabled' : '',
                      calendarDay.day === 1 ? 'month-first-day' : '',
                      isLastDayOfMonth ? 'month-last-day' : '',
                    ].join(' ')}
                    onClick={onClick}
                    onMouseEnter={() => {
                      // If it is the hover moment
                      if (selectionLength > 1 && rangeDays.length === 1) {
                        const side =
                          calendarDay.value > rangeDays[0].value
                            ? 'right'
                            : 'left';
                        const range =
                          side === 'right'
                            ? [rangeDays[0], calendarDay]
                            : [calendarDay, rangeDays[0]];

                        cellRefs.current.forEach(([cell, currDay]) => {
                          if (cell) {
                            setRangeHovered([cell, currDay], range);
                            setRangeHoveredEdge(
                              [cell, currDay],
                              calendarDay,
                              side,
                            );
                          }
                        });
                      }
                      onMouseEnter?.(ts);
                    }}
                    onMouseLeave={() => {
                      onMouseLeave?.(ts);
                    }}
                    ts={ts}
                    value={String(calendarDay.day)}
                    disabled={disabled || isDisabled}
                    label={label}
                    tooltip={isDisabled ? errorsRepr(errors) : label}
                  />
                );
              }

              return (
                <div
                  key={`outter${idx}`}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  role="gridcell"
                  onMouseEnter={() => {
                    if (selectionLength > 1 && rangeDays.length === 1) {
                      cellRefs.current.forEach(([cell]) => {
                        if (cell) {
                          clearHover(cell);
                        }
                      });
                    }
                  }}
                />
              );
            })}
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

const CalendarWithContext: React.FC<CalendarProps> = (props) => (
  <CalendarContextProvider>
    <InternalCalendar {...props} />
  </CalendarContextProvider>
);

export const Calendar = CalendarWithContext as typeof InternalCalendar & {
  Cell: typeof Cell;
};

Calendar.Cell = Cell;

InternalCalendar.displayName = 'Calendar';
Calendar.Cell.displayName = 'Calendar.Cell';
