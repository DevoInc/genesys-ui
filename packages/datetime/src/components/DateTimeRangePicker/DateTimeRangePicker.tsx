import * as React from 'react';
import { format } from 'date-fns';

import {
  Panel,
  Button,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  Popover,
  type PopoverProps,
} from '@devoinc/genesys-ui';
import type { TDateApplyValue, TDateRange } from '../declarations';
import type { TPresetRange } from '../Presets/declarations';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { isManageableDate, toTSorPreset } from '../utils';
import { DateTimeRange, type DateTimeRangeProps } from '../DateTimeRange';
import {
  DateTimeRangeControl,
  type DateTimeRangeControlProps,
} from '../DateTimeRangeControl';

export interface DateTimeRangePickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened'>,
    Pick<
      DateTimeRangeProps,
      | 'ariaLabelNextMonth'
      | 'ariaLabelPrevMonth'
      | 'ariaLabelFromMonth'
      | 'ariaLabelFromTime'
      | 'ariaLabelToMonth'
      | 'ariaLabelToTime'
      | 'dateForMonth'
      | 'invalidDates'
      | 'maxDate'
      | 'minDate'
      | 'validateDate'
      | 'weekDays'
      | 'hasMillis'
      | 'hasSeconds'
      | 'hasTime'
      | 'presetsPlaceholder'
      | 'presets'
    >,
    Pick<
      DateTimeRangeControlProps,
      | 'size'
      | 'ariaLabelFrom'
      | 'ariaLabelTo'
      | 'placeholderFrom'
      | 'placeholderTo'
      | 'realTime'
      | 'statusFrom'
      | 'statusTo'
      | 'onChange'
      | 'onBlur'
      | 'onRealTimeClick'
      | 'wide'
    >,
    Required<Pick<IGlobalAttrs, 'id'>>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Initial value for the input. */
  value: { from: string | number | Date; to: string | number | Date };
  /** Apply button text. */
  applyButtonText?: string;
  /** Cancel button text. */
  cancelButtonText?: string;
  /** Enable or disable the Apply button.  */
  disableApplyButton: boolean;
  /** Function called when Apply button is clicked. */
  onApply: (range: TDateApplyValue) => void;
  /** Function called when Cancel button is clicked. */
  onCancel: () => void;
  /** Transformation function for time. It is used to transform a time expression to timestamp. Required if there are presets. */
  expressionToTime?: (expression: string) => number;
}

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  ariaLabelNextMonth = 'Go to the next month',
  ariaLabelPrevMonth = 'Go to the previous month',
  appendTo,
  applyButtonText = 'Apply',
  cancelButtonText = 'Cancel',
  disableApplyButton = false,
  expressionToTime,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  isOpened,
  id,
  onApply,
  onBlur,
  onCancel,
  onChange,
  size = 'md',
  value: customValue = { from: null, to: null },
  ...restDateTimeRangeProps
}) => {
  const datetimeFormat = `yyyy-MM-dd ${
    hasTime ? getFormatTimeStr(hasSeconds, hasMillis) : ''
  }`;

  // Convert value type to numeric if it's a Date type
  const value = {
    from: toTSorPreset(customValue?.from),
    to: toTSorPreset(customValue?.to),
  };

  // Check if value are number or Date types
  const isManageableFromDate = isManageableDate(value.from);
  const isManageableToDate = isManageableDate(value.to);

  const [preset, setPreset] = React.useState<TPresetRange>({
    from: null,
    to: null,
  });
  const [date, setDate] = React.useState<TDateRange>({ from: null, to: null });

  React.useEffect(() => {
    if (isManageableFromDate && isManageableToDate) {
      setDate({ from: Number(value.from), to: Number(value.to) });
    } else {
      setDate({
        from: expressionToTime?.(String(value.from)),
        to: expressionToTime?.(String(value.to)),
      });
    }
  }, [
    expressionToTime,
    isManageableFromDate,
    isManageableToDate,
    value.from,
    value.to,
  ]);

  React.useEffect(() => {
    if (!isManageableFromDate && !isManageableToDate) {
      setPreset({
        from: String(value.from),
        to: String(value.to),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onApplyCallback = React.useCallback(() => {
    onApply({
      timestamp: { from: date.from, to: date.to },
      ...(preset?.from &&
        preset?.to && { preset: { from: preset?.from, to: preset?.to } }),
    });
  }, [date?.from, date?.to, onApply, preset?.from, preset?.to]);

  const onChangeCallback = React.useCallback(
    (range) => {
      onChange?.({ from: range.from, to: range.to });
    },
    [onChange],
  );

  const onBlurCallback = React.useCallback(
    (range) => {
      onBlur?.({ from: range.from, to: range.to });
    },
    [onBlur],
  );

  const onChangePresetDateCallback = React.useCallback(
    (range) => {
      setDate({
        from: expressionToTime?.(range.from) || null,
        to: expressionToTime?.(range.to) || null,
      });
      setPreset(range);
    },
    [expressionToTime],
  );

  const onChangeDateTimeCallback = React.useCallback((range: TDateRange) => {
    setDate(range);
    setPreset({ from: undefined, to: undefined });
  }, []);

  return (
    <Popover
      appendTo={appendTo}
      disableOutsideEvent
      id={`${id}__popover`}
      isOpened={isOpened}
    >
      {({ ref, toggle }) => (
        <div ref={ref}>
          <DateTimeRangeControl
            {...restDateTimeRangeProps}
            aria-controls={`${id}-range-selector`}
            hasMillis={hasMillis}
            hasSeconds={hasSeconds}
            hasTime={hasTime}
            id={id ? `${id}-range-control` : null}
            isOpen={isOpened}
            from={
              isManageableFromDate
                ? format(value.from as number, datetimeFormat)
                : value.from
            }
            to={
              isManageableToDate
                ? format(value.to as number, datetimeFormat)
                : value.to
            }
            onClick={toggle}
            onChange={onChangeCallback}
            onBlur={onBlurCallback}
            size={size}
          />
        </div>
      )}
      {({ setOpened }) => (
        <Popover.Panel width="auto" id={`${id}-popover-panel`}>
          <Panel.Body>
            <DateTimeRange
              {...restDateTimeRangeProps}
              ariaLabelNextMonth={ariaLabelNextMonth}
              ariaLabelPrevMonth={ariaLabelPrevMonth}
              hasMillis={hasMillis}
              hasSeconds={hasSeconds}
              hasTime={hasTime}
              id={id ? `${id}-datetime-range` : null}
              selectedDates={date}
              selectedPreset={preset}
              onChange={onChangeDateTimeCallback}
              onChangePresetDate={onChangePresetDateCallback}
            />
          </Panel.Body>
          <Panel.Footer
            bordered
            actions={[
              <Button
                key={'cancel'}
                onClick={() => {
                  onCancel();
                  setOpened(false);
                }}
              >
                {cancelButtonText}
              </Button>,
              <Button
                colorScheme={'accent'}
                key={'apply'}
                onClick={() => {
                  onApplyCallback();
                  setOpened(false);
                }}
                state={disableApplyButton ? 'disabled' : 'enabled'}
              >
                {applyButtonText}
              </Button>,
            ]}
          />
        </Popover.Panel>
      )}
    </Popover>
  );
};
