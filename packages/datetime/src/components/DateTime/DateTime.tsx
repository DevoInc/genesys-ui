import * as React from 'react';
import { useTheme } from 'styled-components';
import {
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
  type IDataAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import type { ITime } from '../../declarations';
import { Calendar, type CalendarProps } from '../Calendar';
import { Time } from '../Time';
import { MonthSelector, useMonthSelector } from '../MonthSelector';
import { parseAllDates } from '../../parsers';
import { TDateTimeI18n } from './declarations';
import { defaultDateTimeI18n } from './i18n';
import { useMergeI18n } from '../../hooks';

export interface DateTimeProps
  extends Pick<
      CalendarProps,
      'monthDate' | 'parseDate' | 'weekDays' | 'weekStart'
    >,
    Pick<ITime, 'hasMillis' | 'hasSeconds' | 'hasTime' | 'maxDate' | 'minDate'>,
    IStyledOverloadCss,
    IStyledPolymorphic,
    IDataAttrs {
  i18n?: TDateTimeI18n;
  /** Function called when clicking a cell or editing time input HTML.  */
  onChange?: (dt: Date | number) => void;
  /** Function called when the displayed month is changed. One of `number` or
   * `Date`. */
  onChangeMonthDate: (dt: Date | number) => void;
  value: Date | number;
}

export const DateTime: React.FC<DateTimeProps> = ({
  i18n: userI18n = defaultDateTimeI18n,
  as,
  monthDate = new Date().getTime(),
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  onChange,
  style,
  parseDate = parseAllDates,
  weekDays,
  weekStart,
  onChangeMonthDate = () => null,
  value,
  ...dataProps
}) => {
  const i18n = useMergeI18n(userI18n, defaultDateTimeI18n) as TDateTimeI18n;
  const { onChangeMonth, onClickNextMonth, onClickPrevMonth } =
    useMonthSelector({ monthDate, onChangeMonthDate });
  const theme = useTheme();
  return (
    <VFlex
      {...dataProps}
      as={as}
      alignItems="stretch"
      minWidth={theme.cmp.calendar.size.minWidth}
      style={style}
    >
      <MonthSelector
        i18n={i18n}
        hasNextMonthButton
        hasPrevMonthButton
        onChange={onChangeMonth}
        onClickPrevMonth={onClickPrevMonth}
        onClickNextMonth={onClickNextMonth}
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
        value={[value]}
        parseDate={parseDate}
        weekDays={weekDays}
        weekStart={weekStart}
      />
      {hasTime && (
        <Time
          i18n={i18n}
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
