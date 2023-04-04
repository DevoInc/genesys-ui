import * as React from 'react';
import { addMonths, set, subMonths } from 'date-fns';

import { GlobalAriaProps, VFlex } from '@devoinc/genesys-ui';

import {
  Calendar,
  CalendarProps,
  useCalendarSingleDayBehavior,
} from '../Calendar';
import { Month, Time, TimeProps } from './components';
import { toTimestamp } from '../utils';
import { Datetime } from '../declarations';

export interface DateTimeProps
  extends Pick<
      CalendarProps,
      | 'dateForMonth'
      | 'invalidDates'
      | 'maxDate'
      | 'minDate'
      | 'validateDate'
      | 'weekDays'
    >,
    Pick<TimeProps, 'hasMillis' | 'hasSeconds'> {
  /** aria-label attribute for month input. */
  ariaLabelMonth?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for time input. */
  ariaLabelTime?: GlobalAriaProps['aria-label'];
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /** Function called when clicking a cell or editing time input HTML.  */
  onChange?: (ts: number) => void;
  /** Initial value. One of `number` or `Date`. */
  value?: Datetime;
}

export const DateTime: React.FC<DateTimeProps> = ({
  ariaLabelMonth = 'month',
  ariaLabelTime = 'time',
  dateForMonth: monthToShow,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  invalidDates: notValidDates = [],
  maxDate: maximunDae,
  minDate: minimunDate,
  onChange,
  validateDate = (ts) => ts < new Date().getTime(),
  value: customValue,
  weekDays,
}) => {
  const value = toTimestamp(customValue);
  const minDate = toTimestamp(minimunDate);
  const maxDate = toTimestamp(maximunDae);
  const dateForMonth = toTimestamp(monthToShow);
  const invalidDates = notValidDates.map((date) => toTimestamp(date));

  const iniDate = value
    ? value
    : dateForMonth
    ? dateForMonth
    : new Date().getTime();

  const [tmpMonth, setTmpMonth] = React.useState(iniDate);
  const [tmpTime, setTmpTime] = React.useState(iniDate);
  const [firstTime, setFirsTime] = React.useState(true);

  const {
    selectedDates,
    hasLeftHoverEffect,
    hasRightHoverEffect,
    handleDateChange,
  } = useCalendarSingleDayBehavior({ day: value });

  React.useEffect(() => {
    if (value) {
      setTmpMonth(value);
      setTmpTime(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (!firstTime) {
      const tmp = new Date(tmpTime);
      onChange(
        set(selectedDates.from, {
          hours: tmp.getHours(),
          minutes: tmp.getMinutes(),
          seconds: tmp.getSeconds(),
          milliseconds: tmp.getMilliseconds(),
        }).getTime()
      );
    }
  }, [selectedDates, tmpTime, firstTime, onChange]);

  const onClickNextMonthCallback = React.useCallback(() => {
    setTmpMonth((oldDate) => addMonths(new Date(oldDate), 1).getTime());
  }, []);

  const onClickPrevMonthCallback = React.useCallback(() => {
    setTmpMonth((oldDate) => subMonths(new Date(oldDate), 1).getTime());
  }, []);

  const onChangeMonth = React.useCallback((ts: number) => {
    setTmpMonth(ts);
  }, []);

  const onChangeTime = React.useCallback((ts: number) => {
    const tmp = new Date(ts);
    setTmpTime((oldValues) =>
      set(oldValues, {
        hours: tmp.getHours(),
        minutes: tmp.getMinutes(),
        seconds: tmp.getSeconds(),
        milliseconds: tmp.getMilliseconds(),
      }).getTime()
    );
  }, []);

  const onClickCallback = React.useCallback(
    (ts: number) => {
      handleDateChange(ts);
      setFirsTime(false);
    },
    [handleDateChange]
  );

  return (
    <VFlex>
      <Month
        aria-label={ariaLabelMonth}
        hasNextMonthButton
        hasPrevMonthButton
        maxDate={maxDate}
        minDate={minDate}
        onChange={onChangeMonth}
        onClickPrevMonth={onClickPrevMonthCallback}
        onClickNextMonth={onClickNextMonthCallback}
        value={tmpMonth}
      />
      <Calendar
        dateForMonth={tmpMonth}
        hasLeftHoverEffect={hasLeftHoverEffect}
        hasRightHoverEffect={hasRightHoverEffect}
        invalidDates={invalidDates}
        maxDate={maxDate}
        minDate={minDate}
        onClick={onClickCallback}
        selectedDates={selectedDates}
        validateDate={validateDate}
        weekDays={weekDays}
      />
      {hasTime && (
        <Time
          aria-label={ariaLabelTime}
          maxDate={maxDate}
          minDate={minDate}
          hasMillis={hasMillis}
          hasSeconds={hasSeconds}
          onChange={onChangeTime}
          value={tmpTime}
        />
      )}
    </VFlex>
  );
};
