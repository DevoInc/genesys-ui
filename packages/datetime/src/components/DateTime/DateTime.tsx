import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  addMonths,
  subMonths,
  set,
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  getSeconds,
  getMilliseconds,
} from 'date-fns';

import {
  type IGlobalAriaAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import type { ITime } from '../../declarations';
import { Calendar, type CalendarProps } from '../Calendar';
import { Time } from './components';
import { MonthSelector } from '../MonthSelector';
import { parseDateNoFuture } from '../Calendar/defaults';

export interface DateTimeProps
  extends Pick<CalendarProps, 'monthDate' | 'parseDate' | 'weekDays' | 'weekStart'>,
    Pick<ITime, 'hasMillis' | 'hasSeconds' | 'hasTime' | 'maxDate' | 'minDate'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** aria-label attribute for month input. */
  ariaLabelMonth?: IGlobalAriaAttrs['aria-label'];
  /** aria-label attribute for time input. */
  ariaLabelTime?: IGlobalAriaAttrs['aria-label'];
  /** Function called when clicking a cell or editing time input HTML.  */
  onChange?: (dt: Date | number) => void;
  /** Initial value. One of `number` or `Date`. */
  onChangeMonthDate: (dt: Date | number) => void;
  value: Date | number;
}

export const DateTime: React.FC<DateTimeProps> = ({
  ariaLabelMonth = 'month',
  ariaLabelTime = 'time',
  as,
  monthDate = new Date().getTime(),
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  onChange,
  styles,
  parseDate = parseDateNoFuture,
  weekDays,
  weekStart,
  onChangeMonthDate = () => null,
  value,
}) => {
  const theme = useTheme();
  return (
    <VFlex
      as={as}
      alignItems="stretch"
      minWidth={theme.cmp.calendar.size.minWidth}
      styles={styles}
    >
      <MonthSelector
        ariaLabelInput={ariaLabelMonth}
        hasNextMonthButton
        hasPrevMonthButton
        onChange={onChangeMonthDate}
        onClickPrevMonth={() => {
          onChangeMonthDate(subMonths(monthDate, 1).getTime());
        }}
        onClickNextMonth={() => {
          onChangeMonthDate(addMonths(monthDate, 1).getTime());
        }}
        size="sm"
        value={monthDate}
      />
      <Calendar
        monthDate={monthDate}
        hasLeftHoverEffect={false}
        hasRightHoverEffect={false}
        onClick={(ts) => {
          onChange(
            set(ts, {
              hours: getHours(value),
              minutes: getMinutes(value),
              seconds: getSeconds(value),
              milliseconds: getMilliseconds(value),
            }),
          );
        }}
        selectedDates={[value]}
        parseDate={parseDate}
        weekDays={weekDays}
        weekStart={weekStart}
      />
      {hasTime && (
        <Time
          aria-label={ariaLabelTime}
          hasMillis={hasMillis}
          hasSeconds={hasSeconds}
          onChange={(ts) => {
            onChange(
              set(ts, {
                year: getYear(value),
                month: getMonth(value),
                date: getDate(value),
              }),
            );
          }}
          size="sm"
          value={value}
        />
      )}
    </VFlex>
  );
};
