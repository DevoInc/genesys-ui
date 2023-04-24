import * as React from 'react';
import { usePopper } from 'react-popper';

import { Panel, Button, GlobalAttrProps } from '@devoinc/genesys-ui';

import {
  DateTimeRangeControl,
  DateTimeRangeControlProps,
} from '../DateTimeRangeControl';
import { DateTimeRange, DateTimeRangeProps } from '../DateTimeRange';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { format } from 'date-fns';
import { ApplyValue, DateRange } from '../declarations';
import { isManageableDate, toTSorPreset } from '../utils';
import { PresetRange } from '../Presets/declarations';
export interface DateTimeRangePickerProps
  extends Pick<
      DateTimeRangeProps,
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
      | 'wide'
    >,
    Required<Pick<GlobalAttrProps, 'id'>> {
  /** Initial value for the input. */
  value: { from: string | number | Date; to: string | number | Date };
  /** Apply button text. */
  applyButtonText?: string;
  /** Cancel button text. */
  cancelButtonText?: string;
  /** Enable or disable the Apply button.  */
  disableApplyButton: boolean;
  /** Function called when Apply button is clicked. */
  onApply: (range: ApplyValue) => void;
  /** Function called when Cancel button is clicked. */
  onCancel: () => void;
  /** Transformation function for time. It is used to transform a time expression to timestamp. Required if there are presets. */
  expresionToTime?: (expresion: string) => number;
}

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  applyButtonText = 'Apply',
  cancelButtonText = 'Cancel',
  disableApplyButton = false,
  expresionToTime,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
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

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [],
  });

  // Convert value type to numeric if it's a Date type
  const value = {
    from: toTSorPreset(customValue?.from),
    to: toTSorPreset(customValue?.to),
  };

  // Check if value are number or Date types
  const isManageableFromDate = isManageableDate(value.from);
  const isManageableToDate = isManageableDate(value.to);

  const [preset, setPreset] = React.useState<PresetRange>({
    from: null,
    to: null,
  });
  const [date, setDate] = React.useState<DateRange>({ from: null, to: null });

  React.useEffect(() => {
    if (isManageableFromDate && isManageableToDate) {
      setDate({ from: Number(value.from), to: Number(value.to) });
    } else {
      setDate({
        from: expresionToTime?.(String(value.from)),
        to: expresionToTime?.(String(value.to)),
      });
    }
  }, [
    expresionToTime,
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

  const [visible, setVisible] = React.useState(false);

  const onCancelCallback = React.useCallback(() => {
    setVisible(false);
    onCancel?.();
  }, [onCancel]);

  const onClickInputCallback = React.useCallback(() => {
    setVisible(true);
  }, []);

  const onApplyCallback = React.useCallback(() => {
    setVisible(false);
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
    [onChange]
  );

  const onBlurCallback = React.useCallback(
    (range) => {
      onBlur?.({ from: range.from, to: range.to });
    },
    [onBlur]
  );

  const onChangePresetDateCallback = React.useCallback(
    (range) => {
      setDate({
        from: expresionToTime?.(range.from) || null,
        to: expresionToTime?.(range.to) || null,
      });
      setPreset(range);
    },
    [expresionToTime]
  );

  const onChangeDateTimeCallback = React.useCallback((range: DateRange) => {
    setDate(range);
    setPreset({ from: undefined, to: undefined });
  }, []);

  return (
    <>
      <div ref={setReferenceElement}>
        <DateTimeRangeControl
          {...restDateTimeRangeProps}
          aria-controls={`${id}-range-selector`}
          hasMillis={hasMillis}
          hasSeconds={hasSeconds}
          hasTime={hasTime}
          id={id ? `${id}-range-control` : null}
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
          onClick={onClickInputCallback}
          onChange={onChangeCallback}
          onBlur={onBlurCallback}
          size={size}
        />
      </div>
      {visible && (
        <div
          aria-modal
          id={id ? `${id}-range-selector` : null}
          ref={setPopperElement}
          role="dialog"
          style={styles.popper}
          {...attributes.popper}
        >
          <Panel
            elevation="activated"
            footerSettings={{
              actions: [
                <Button key={'cancel'} onClick={onCancelCallback}>
                  {cancelButtonText}{' '}
                </Button>,
                <Button
                  colorScheme={'accent'}
                  key={'apply'}
                  onClick={onApplyCallback}
                  state={disableApplyButton ? 'disabled' : 'enabled'}
                >
                  {applyButtonText}
                </Button>,
              ],
              bordered: true,
            }}
          >
            <DateTimeRange
              {...restDateTimeRangeProps}
              hasMillis={hasMillis}
              hasSeconds={hasSeconds}
              hasTime={hasTime}
              id={id ? `${id}-datetime-range` : null}
              selectedDates={date}
              selectedPreset={preset}
              onChange={onChangeDateTimeCallback}
              onChangePresetDate={onChangePresetDateCallback}
            />
          </Panel>
        </div>
      )}
    </>
  );
};
