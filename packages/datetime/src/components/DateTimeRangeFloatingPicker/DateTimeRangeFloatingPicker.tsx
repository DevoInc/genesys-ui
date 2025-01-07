import * as React from 'react';

import {
  Panel,
  Button,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  Popover,
  type PopoverProps,
  type IDataAttrs,
} from '@devoinc/genesys-ui';

import { parseStrDate } from '../../parsers';
import { formatDate as formatDateHelper } from '../../helpers';

import type { IParseResult, ITime, TDateRange } from '../../declarations';
import { DateTimeRange, type DateTimeRangeProps } from '../DateTimeRange';
import {
  DateTimeRangeInput,
  useDateTimeRangeInputValidation,
  type DateTimeRangeInputProps,
} from '../DateTimeRangeInput';
import { TDateTimeRangeFloatingPickerI18n } from './declarations';
import { useMergeI18n } from '../../hooks';
import { defaultDateTimeRangeFloatingPickerI18n } from './i18n';
import { defaultPresets } from '../Presets';

export interface DateTimeRangeFloatingPickerProps
  extends Pick<
      PopoverProps,
      'appendTo' | 'isOpened' | 'placement' | 'onClose' | 'disableOutsideEvent'
    >,
    Pick<
      DateTimeRangeProps,
      'monthDate' | 'presets' | 'presetsPlaceholder' | 'weekDays'
    >,
    Pick<
      DateTimeRangeInputProps,
      | 'onRealTimeClick'
      | 'realTime'
      | 'showCalendarIcon'
      | 'size'
      | 'status'
      | 'helper'
    >,
    ITime,
    Required<Pick<IGlobalAttrs, 'id'>>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Internacionalization object */
  i18n?: TDateTimeRangeFloatingPickerI18n;
  /** Initial value for the input. */
  value: TDateRange;
  /** Enable or disable the Apply button.  */
  disableApplyButton: boolean;
  /** Function called when Cancel button is clicked. */
  onCancel: () => void;
  parseDate?: (str: string) => IParseResult;
  formatDate?: (dt: string | Date | number) => string;

  onChange: (range: (string | number | Date)[]) => void;
  autoApply?: boolean;
}

export const DateTimeRangeFloatingPicker: React.FC<
  DateTimeRangeFloatingPickerProps
> = ({
  i18n: userI18n = {},
  appendTo,
  disableApplyButton = false,
  disableOutsideEvent = false,
  isOpened,
  id,
  onCancel,
  onChange,
  onClose: onCloseCallback,
  parseDate = parseStrDate,
  formatDate = formatDateHelper,
  placement,
  size = 'md',
  value,
  presets = defaultPresets,
  presetsPlaceholder,
  autoApply = false,
  onRealTimeClick,
  ...dataProps
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultDateTimeRangeFloatingPickerI18n,
  ) as TDateTimeRangeFloatingPickerI18n;

  const setOpenendRef =
    React.useRef<React.Dispatch<React.SetStateAction<boolean>>>();

  const [tmpValue, setTmpValue] =
    React.useState<(string | number | Date)[]>(value);

  const [monthDate, setMonthDate] = React.useState<number | Date>(() => {
    const from = value[0];
    let dt: number | Date;
    if (typeof from === 'string') {
      const result = parseDate(from);
      dt = result.value;
    } else {
      dt = from;
    }
    return dt;
  });
  const { inputValue, inputOnChange, errors, updateValue } =
    useDateTimeRangeInputValidation({
      value: tmpValue,
      // onChange: setValue,
      onChange: (range) => {
        const from = range[0];
        let dt: number | Date;
        if (typeof from === 'string') {
          const result = parseDate(from);
          dt = result.value;
        } else {
          dt = from;
        }
        setMonthDate(dt);
        if (autoApply) {
          onChange(range);
        } else {
          setTmpValue(range);
        }
      },
      reprDate: (ts: number) => formatDate(ts),
      parseDate: parseStrDate,
    });

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
            aria-controls={`${id}-range-selector`}
            value={inputValue}
            id={id ? `${id}-range-control` : null}
            isOpen={isOpened}
            onChange={inputOnChange}
            onClick={() => {
              setOpened(true);
            }}
            size={size}
            statuses={errors.map((e) => (e.length > 0 ? 'error' : 'base'))}
            helpers={errors.map((e) => (e.length > 0 ? e[0] : null))}
            onRealTimeClick={onRealTimeClick}
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
            {...dataProps}
          >
            <Panel.Body>
              <DateTimeRange
                i18n={i18n}
                id={id ? `${id}-datetime-range` : null}
                onChange={setTmpValue}
                value={tmpValue}
                presets={presets}
                presetsPlaceholder={presetsPlaceholder}
                monthDate={monthDate}
                onChangeMonthDate={(dt) => {
                  setMonthDate(dt);
                }}
              />
            </Panel.Body>
            {!autoApply && (
              <Panel.Footer
                bordered
                actions={[
                  <Button
                    key={'cancel'}
                    onClick={() => {
                      setTmpValue(value);
                      setOpened(false);
                      onCancel();
                    }}
                  >
                    {i18n.cancelButton}
                  </Button>,
                  <Button
                    colorScheme={'accent'}
                    key={'apply'}
                    onClick={() => {
                      updateValue(tmpValue);
                      setOpened(false);
                      onChange(tmpValue);
                    }}
                    state={disableApplyButton ? 'disabled' : 'enabled'}
                  >
                    {i18n.applyButton}
                  </Button>,
                ]}
              />
            )}
          </Popover.Panel>
        );
      }}
    </Popover>
  );
};
