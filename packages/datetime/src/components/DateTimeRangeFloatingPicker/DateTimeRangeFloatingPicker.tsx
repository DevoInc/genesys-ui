import * as React from 'react';

import {
  Panel,
  Button,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  Popover,
  type PopoverProps,
} from '@devoinc/genesys-ui';

import { isManageableDate, toTSorPreset } from '../../helpers';
import { parseStrDate } from '../../parsers';

import type {
  ITime,
  TDateApplyValue,
  TPresetRange,
  TTimestampRange,
} from '../../declarations';
import { DateTimeRange, type DateTimeRangeProps } from '../DateTimeRange';
import {
  DateTimeRangeInput,
  type DateTimeRangeInputProps,
} from '../DateTimeRangeInput';

export interface DateTimeRangeFloatingPickerProps
  extends Pick<
      PopoverProps,
      'appendTo' | 'isOpened' | 'placement' | 'onClose' | 'disableOutsideEvent'
    >,
    Pick<
      DateTimeRangeProps,
      | 'ariaLabelFromMonth'
      | 'ariaLabelFromTime'
      | 'ariaLabelNextMonth'
      | 'ariaLabelPrevMonth'
      | 'ariaLabelToMonth'
      | 'ariaLabelToTime'
      | 'monthDate'
      | 'presets'
      | 'presetsPlaceholder'
      | 'weekDays'
    >,
    Pick<
      DateTimeRangeInputProps,
      | 'onRealTimeClick'
      | 'realTime'
      | 'showCalendarIcon'
      | 'size'
      | 'status'
      | 'helper'
      | 'wide'
      | 'helper'
    >,
    ITime,
    Required<Pick<IGlobalAttrs, 'id'>>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Initial value for the input. */
  value: { from: string | Date | number; to: string | Date | number };
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
  expressionToTime?: (expression: string) => ParseExpressionResult;

  onChange: (range: {
    timestamp: { from: number; to: number };
    preset: { from: string; to: string };
  }) => void;
}

export const DateTimeRangeFloatingPicker: React.FC<
  DateTimeRangeFloatingPickerProps
> = ({
  ariaLabelNextMonth = 'Go to the next month',
  ariaLabelPrevMonth = 'Go to the previous month',
  appendTo,
  applyButtonText = 'Apply',
  cancelButtonText = 'Cancel',
  disableApplyButton = false,
  dateFormats,
  disableOutsideEvent = false,
  isOpened,
  id,
  onApply,
  onCancel,
  onChange,
  onClose,
  parseExpression = parseExpressionFN,
  placement,
  size = 'md',
  value: customValue = { from: null, to: null },
  ...restDateTimeRangeProps
}) => {
  const value = React.useMemo(
    () => ({
      from: toTSorPreset(customValue?.from),
      to: toTSorPreset(customValue?.to),
    }),
    [customValue?.from, customValue?.to],
  );

  const isManageableFromDate = isManageableDate(value.from);
  const isManageableToDate = isManageableDate(value.to);

  const [inputDate, setInputDate] = React.useState(value);
  const [calendarValue, setCalendarValue] = React.useState<TTimestampRange>({
    from: null,
    to: null,
  });
  const [presetValue, setPresetValue] = React.useState<TPresetRange>({
    from: null,
    to: null,
  });

  const setOpenendRef =
    React.useRef<React.Dispatch<React.SetStateAction<boolean>>>();

  React.useEffect(() => {
    if (!isManageableFromDate && !isManageableToDate) {
      setPresetValue({
        from: value.from as string,
        to: value.to as string,
      });
    } else {
      setCalendarValue({
        from: value.from as number,
        to: value.to as number,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputsChangeCallback = React.useCallback(
    (range: TOnChangeRange) => {
      const resultFrom = parseStrDate(range.from.str, dateFormats);
      const resultTo = parseStrDate(range.from.str, dateFormats);

      if (resultFrom.isValid && resultTo.isValid) {
        setCalendarValue({ from: resultFrom.value, to: resultTo.value });
        setPresetValue({ from: undefined, to: undefined });
        onChange?.({
          preset: { from: null, to: null },
          timestamp: { from: resultFrom.value, to: resultTo.value },
        });
      } else {
        setCalendarValue({ from: undefined, to: undefined });
        setPresetValue({ from: range.from.str, to: range.to.str });
        onChange?.({
          preset: { from: range.from.str, to: range.to.str },
          timestamp: { from: null, to: null },
        });
      }
      setOpenendRef.current(false);
    },
    [dateFormats, onChange],
  );

  const onCalendarChangeCallback = React.useCallback(
    (range: TTimestampRange) => {
      setInputDate(range);
      setCalendarValue(range);
      setPresetValue({ from: null, to: null });
      onChange?.({
        preset: { from: null, to: null },
        timestamp: { ...range },
      });
    },
    [onChange],
  );

  const onPresetChangeCallback = React.useCallback(
    (range: TPresetRange) => {
      setInputDate(range);
      setPresetValue(range);
      setCalendarValue({ from: undefined, to: undefined });
      onChange?.({
        preset: { ...range },
        timestamp: { from: null, to: null },
      });
    },
    [onChange],
  );

  const onCancelCallback = React.useCallback(() => {
    setInputDate(value);
    onCancel?.();
    setOpenendRef.current(false);
  }, [value, onCancel]);

  const onApplyCallback = React.useCallback(() => {
    onApply?.({
      timestamp: { from: calendarValue.from, to: calendarValue.to },
      preset: { from: presetValue.from, to: presetValue.to },
    });
    setOpenendRef.current(false);
  }, [
    calendarValue.from,
    calendarValue.to,
    onApply,
    presetValue.from,
    presetValue.to,
  ]);

  const onCloseCallback = React.useCallback(() => {
    setInputDate(value);
    onClose?.();
  }, [onClose, value]);

  return (
    <Popover
      appendTo={appendTo}
      disableOutsideEvent={disableOutsideEvent}
      id={`${id}__popover`}
      isOpened={isOpened}
      placement={placement}
      onClose={onCloseCallback}
    >
      {({ ref, setOpened }) => (
        <div ref={ref}>
          <DateTimeRangeInput
            {...restDateTimeRangeProps}
            aria-controls={`${id}-range-selector`}
            dateFormats={dateFormats}
            from={inputDate.from}
            id={id ? `${id}-range-control` : null}
            isOpen={isOpened}
            onChange={onInputsChangeCallback}
            onClick={() => {
              setOpened(true);
            }}
            parseExpression={parseExpression}
            size={size}
            to={inputDate.to}
          />
        </div>
      )}
      {({ setOpened }) => {
        setOpenendRef.current = setOpened;

        return (
          <Popover.Panel
            width="auto"
            id={`${id}-popover-panel`}
            maxWidth="70rem"
          >
            <Panel.Body>
              <DateTimeRange
                {...restDateTimeRangeProps}
                ariaLabelNextMonth={ariaLabelNextMonth}
                ariaLabelPrevMonth={ariaLabelPrevMonth}
                id={id ? `${id}-datetime-range` : null}
                onChange={onCalendarChangeCallback}
                onChangePresetDate={onPresetChangeCallback}
                selectedDates={calendarValue}
                selectedPreset={presetValue}
              />
            </Panel.Body>
            <Panel.Footer
              bordered
              actions={[
                <Button key={'cancel'} onClick={onCancelCallback}>
                  {cancelButtonText}
                </Button>,
                <Button
                  colorScheme={'accent'}
                  key={'apply'}
                  onClick={onApplyCallback}
                  state={disableApplyButton ? 'disabled' : 'enabled'}
                >
                  {applyButtonText}
                </Button>,
              ]}
            />
          </Popover.Panel>
        );
      }}
    </Popover>
  );
};
