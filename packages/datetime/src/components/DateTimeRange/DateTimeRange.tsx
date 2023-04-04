import * as React from 'react';
import {
  addMonths,
  getHours,
  getMilliseconds,
  getMinutes,
  getMonth,
  getSeconds,
  set,
  startOfDay,
  subMonths,
} from 'date-fns';

import {
  HFlex,
  VFlex,
  GlobalAriaProps,
  GlobalAttrProps,
} from '@devoinc/genesys-ui';

import {
  Calendar,
  CalendarProps,
  useCalendarForwardBackwardBehavior,
} from '../Calendar';
import { Presets, PresetsProps } from '../Presets';
import { Month, Time, TimeProps } from '../DateTime/components';
import { PresetRange } from '../Presets/declarations';
import { toTimestamp } from '../utils';

export interface DateTimeRangeProps
  extends Pick<
      CalendarProps,
      | 'dateForMonth'
      | 'invalidDates'
      | 'maxDate'
      | 'minDate'
      | 'selectedDates'
      | 'validateDate'
      | 'weekDays'
    >,
    Pick<TimeProps, 'hasMillis' | 'hasSeconds'>,
    Pick<PresetsProps, 'presets'>,
    Pick<GlobalAttrProps, 'id'> {
  /** aria-label attribute for from month input. */
  ariaLabelFromMonth?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for from time input. */
  ariaLabelFromTime?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for to month input. */
  ariaLabelToMonth?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for to time input. */
  ariaLabelToTime?: GlobalAriaProps['aria-label'];
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /** Function called when clicking a cell or editing a time input HTML.  */
  onChange?: ({ from, to }: { from: number; to: number }) => void;
  /** Function called when clicking an option from preset date list.  */
  onChangePresetDate?: PresetsProps['onChange'];
  /** Placeholder for the presets list */
  presetsPlaceholder?: PresetsProps['placeholder'];
  /** Selected preset */
  selectedPreset?: PresetsProps['value'];
}

export const DateTimeRange: React.FC<DateTimeRangeProps> = ({
  ariaLabelFromMonth = 'from month',
  ariaLabelFromTime = 'from time',
  ariaLabelToMonth = 'to month',
  ariaLabelToTime = 'to time',
  dateForMonth: monthToShow,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  invalidDates,
  maxDate,
  minDate,
  onChange,
  onChangePresetDate,
  selectedDates: defaultValue = { from: null, to: null },
  validateDate,
  weekDays,
  presetsPlaceholder,
  presets,
  selectedPreset,
}) => {
  const value = React.useMemo(
    () => ({
      from: toTimestamp(defaultValue?.from),
      to: toTimestamp(defaultValue?.to),
    }),
    [defaultValue?.from, defaultValue?.to]
  );

  const timeValue = React.useMemo(
    () => ({
      from: value?.from || startOfDay(new Date()).getTime(),
      to: value?.to || startOfDay(new Date()).getTime(),
    }),
    [value?.from, value?.to]
  );

  const dateForMonth = React.useMemo(() => {
    return toTimestamp(monthToShow);
  }, [monthToShow]);

  const initialPreviewDate = React.useMemo(
    () => ({
      from:
        value.from && value.to
          ? value.to
            ? set(subMonths(value.to, 1), {
                hours: getHours(value.from),
                minutes: getMinutes(value.from),
                seconds: getSeconds(value.from),
                milliseconds: getMilliseconds(value.from),
              }).getTime()
            : value.from
          : dateForMonth
          ? subMonths(dateForMonth, 1).getTime()
          : subMonths(new Date(), 1).getTime(),
      to: value.to
        ? value.to
        : dateForMonth
        ? dateForMonth
        : new Date().getTime(),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [previewDate, setPreviewDate] = React.useState(initialPreviewDate);
  const [firstTime, setFirsTime] = React.useState(true);
  const [hoverDay, setHoverDay] = React.useState(null);

  React.useEffect(() => {
    setPreviewDate({
      from: initialPreviewDate.from,
      to: initialPreviewDate.to,
    });
  }, [initialPreviewDate.from, initialPreviewDate.to]);

  const {
    selectedDates,
    hasLeftHoverEffect,
    hasRightHoverEffect,
    handleDateChange,
  } = useCalendarForwardBackwardBehavior({ ...value });

  React.useEffect(() => {
    if (!firstTime) {
      const tmpFrom = value.from
        ? new Date(value.from)
        : startOfDay(new Date());
      const tmpTo = value.to ? new Date(value.to) : startOfDay(new Date());

      onChange?.({
        from: set(selectedDates.from, {
          hours: tmpFrom.getHours(),
          minutes: tmpFrom.getMinutes(),
          seconds: tmpFrom.getSeconds(),
          milliseconds: tmpFrom.getMilliseconds(),
        }).getTime(),
        to:
          selectedDates.to &&
          set(selectedDates.to, {
            hours: tmpTo.getHours(),
            minutes: tmpTo.getMinutes(),
            seconds: tmpTo.getSeconds(),
            milliseconds: tmpTo.getMilliseconds(),
          }).getTime(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDates.from, selectedDates.to, firstTime, onChange]);

  const onClickPrevMonthCallback = React.useCallback(() => {
    setPreviewDate((oldDate) => ({
      from: subMonths(new Date(oldDate.from), 1).getTime(),
      to: subMonths(new Date(oldDate.to), 1).getTime(),
    }));
  }, []);

  const onClickNextMonthCallback = React.useCallback(() => {
    setPreviewDate((oldDate) => ({
      from: addMonths(new Date(oldDate.from), 1).getTime(),
      to: addMonths(new Date(oldDate.to), 1).getTime(),
    }));
  }, []);

  const onChangeMonthFrom = React.useCallback((ts: number) => {
    setPreviewDate({
      from: ts,
      to: set(ts, { month: getMonth(ts) + 1 }).getTime(),
    });
  }, []);

  const onChangeMonthTo = React.useCallback((ts: number) => {
    setPreviewDate({
      from: set(ts, { month: getMonth(ts) - 1 }).getTime(),
      to: ts,
    });
  }, []);

  const onChangeTimeFrom = React.useCallback(
    (ts: number) => {
      onChange({ from: ts, to: value.to });
    },
    [onChange, value.to]
  );

  const onChangeTimeTo = React.useCallback(
    (ts: number) => {
      onChange({ from: value.from, to: ts });
    },
    [onChange, value.from]
  );

  const onChangePresetDateCallback = React.useCallback(
    (preset: PresetRange) => {
      setFirsTime(true);
      onChangePresetDate(preset);
    },
    [onChangePresetDate]
  );

  const onMouseEnterCallback = React.useCallback((ts: number) => {
    setHoverDay(ts);
  }, []);

  const onMouseLeaveCallback = React.useCallback(() => {
    setHoverDay(null);
  }, []);

  const onClickCalendarCallback = React.useCallback(
    (ts: number) => {
      handleDateChange(ts);
      setFirsTime(false);
    },
    [handleDateChange]
  );

  return (
    <HFlex alignItems={'flex-start'}>
      <VFlex flex={`1 1 ${hasTime ? '40%' : '50%'}`} alignItems="stretch">
        <Month
          aria-label={ariaLabelFromMonth}
          hasNextMonthButton={false}
          maxDate={maxDate}
          minDate={minDate}
          onChange={onChangeMonthFrom}
          onClickPrevMonth={onClickPrevMonthCallback}
          value={previewDate.from}
        />
        <Calendar
          dateForMonth={previewDate.from}
          disableHoverDay={true}
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          hoverDay={hoverDay}
          invalidDates={invalidDates}
          maxDate={maxDate}
          minDate={minDate}
          onClick={onClickCalendarCallback}
          onMouseEnter={onMouseEnterCallback}
          onMouseLeave={onMouseLeaveCallback}
          selectedDates={selectedDates}
          validateDate={validateDate}
          weekDays={weekDays}
        />
        {hasTime && (
          <Time
            aria-label={ariaLabelFromTime}
            hasMillis={hasMillis}
            hasSeconds={hasSeconds}
            maxDate={maxDate}
            minDate={minDate}
            onChange={onChangeTimeFrom}
            value={timeValue.from}
          />
        )}
      </VFlex>
      <VFlex flex={`1 1 ${hasTime ? '40%' : '50%'}`} alignItems="stretch">
        <Month
          aria-label={ariaLabelToMonth}
          hasPrevMonthButton={false}
          maxDate={maxDate}
          minDate={minDate}
          onChange={onChangeMonthTo}
          onClickNextMonth={onClickNextMonthCallback}
          value={previewDate.to}
        />
        <Calendar
          dateForMonth={previewDate.to}
          disableHoverDay={true}
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          invalidDates={invalidDates}
          hoverDay={hoverDay}
          maxDate={maxDate}
          minDate={minDate}
          onClick={onClickCalendarCallback}
          onMouseEnter={onMouseEnterCallback}
          onMouseLeave={onMouseLeaveCallback}
          selectedDates={selectedDates}
          validateDate={validateDate}
          weekDays={weekDays}
        />
        {hasTime && (
          <Time
            aria-label={ariaLabelToTime}
            hasMillis={hasMillis}
            hasSeconds={hasSeconds}
            maxDate={maxDate}
            minDate={minDate}
            onChange={onChangeTimeTo}
            value={timeValue.to}
          />
        )}
      </VFlex>
      {presets && (
        <VFlex flex={'1 1 20%'}>
          <Presets
            value={selectedPreset}
            id={`${id}_presets`}
            placeholder={presetsPlaceholder}
            presets={presets}
            onChange={onChangePresetDateCallback}
          />
        </VFlex>
      )}
    </HFlex>
  );
};
