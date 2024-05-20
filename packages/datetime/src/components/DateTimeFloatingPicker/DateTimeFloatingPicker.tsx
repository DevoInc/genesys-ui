import * as React from 'react';

import {
  Panel,
  Button,
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  Popover,
  type PopoverProps,
} from '@devoinc/genesys-ui';

import { DateTime, type DateTimeProps } from '../DateTime';
import {
  DateTimeInput,
  DateTimeInputProps,
  useDateTimeInputValidation,
} from '../DateTimeInput';
import {
  formatDate as formatDateHelper,
  parseDate as parseDateHelper,
} from '../../helpers';
import type { IParseResult } from '../../declarations';

export interface DateTimeFloatingPickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened' | 'onClose' | 'placement'>,
    Pick<
      DateTimeProps,
      | 'ariaLabelMonth'
      | 'ariaLabelTime'
      | 'monthDate'
      | 'hasMillis'
      | 'hasSeconds'
      | 'hasTime'
      | 'weekDays'
      | 'weekStart'
    >,
    Pick<
      DateTimeInputProps,
      'autoFocus' | 'placeholder' | 'size' | 'label' | 'helper'
    >,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IStyledOverloadCss, 'styles'>,
    Pick<IStyledPolymorphic, 'as'> {
  /** Apply button text */
  applyButtonText?: string;
  /** Cancel button text */
  cancelButtonText?: string;
  /** Function called when Apply button is clicked. */
  onApply?: () => void;
  /** Function called when Cancel button is clicked. */
  onCancel?: () => void;
  /** Function called when any enabled calendar cell is clicked or the time input changed. */
  onChange?: DateTimeProps['onChange'];
  value?: Date | number;
  parseDate?: (str: string) => IParseResult;
  formatDate?: (dt: Date | number) => string;
  autoApply?: boolean;
}

export const DateTimeFloatingPicker: React.FC<DateTimeFloatingPickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  appendTo,
  applyButtonText = 'Apply',
  as,
  cancelButtonText = 'Cancel',
  formatDate = formatDateHelper,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  isOpened,
  onApply = () => null,
  onCancel = () => null,
  onChange = () => null,
  autoApply = false,
  onClose = () => null,
  parseDate = parseDateHelper,
  styles: customStyles,
  value = new Date().getTime(),
  helper,
  ariaLabelMonth,
  ariaLabelTime,
  monthDate: initialMonthDate,
  weekDays,
  weekStart,
  autoFocus,
  placeholder,
  size,
  label,
}) => {
  console.log({ value: new Date(value) });

  const [tmpValue, setTmpValue] = React.useState<Date | number>(value);
  const [monthDate, setMonthDate] = React.useState<Date | number>(
    initialMonthDate,
  );
  React.useEffect(() => {
    setTmpValue(value);
  }, [value]);

  console.log({ tmpValue: new Date(tmpValue) });

  const { inputValue, inputOnChange, errors } = useDateTimeInputValidation({
    value: tmpValue,
    onChange: (newValue) => {
      if (autoApply) {
        onChange(newValue);
      } else {
        setTmpValue(newValue);
      }
    },
    reprDate: formatDate,
    parseDate,
  });

  console.log({ inputValue });
  console.log('----------------------------------------------------------');

  const onDateTimeChangeCallback = React.useCallback(
    (ts: number) => {
      if (autoApply) {
        onChange(ts);
      } else {
        setTmpValue(ts);
      }
    },
    [onChange, autoApply],
  );

  const onInputKeyUpCallback = React.useCallback(
    (setOpened: React.Dispatch<React.SetStateAction<boolean>>) =>
      (event: React.KeyboardEvent<Element>) => {
        if (
          event.type === 'keyup' &&
          ['Escape', 'Enter'].includes(event.code)
        ) {
          if (event.code === 'Enter' && !autoApply) {
            onChange(tmpValue);
          }
          setOpened(false);
        }
      },
    [],
  );

  return (
    <Popover
      appendTo={appendTo}
      id={id ? `${id}__popover` : null}
      isOpened={isOpened}
      onClose={onClose}
    >
      {({ ref, setOpened }) => (
        <div ref={ref}>
          <DateTimeInput
            autoFocus={autoFocus}
            placeholder={placeholder}
            size={size}
            label={label}
            aria-label={ariaLabel}
            id={id}
            onKeyUp={onInputKeyUpCallback(setOpened)}
            onChange={inputOnChange}
            onClick={() => {
              setOpened(true);
            }}
            value={inputValue}
            helper={errors.length > 0 ? errors[0] : helper}
            status={errors.length > 0 ? 'error' : 'base'}
          />
        </div>
      )}
      {({ setOpened }) => (
        <Popover.Panel
          as={as}
          styles={customStyles}
          width="auto"
          id={id ? `${id}__popover-panel` : null}
        >
          <Panel.Body>
            <DateTime
              ariaLabelMonth={ariaLabelMonth}
              ariaLabelTime={ariaLabelTime}
              monthDate={monthDate}
              onChangeMonthDate={setMonthDate}
              weekDays={weekDays}
              weekStart={weekStart}
              hasMillis={hasMillis}
              hasSeconds={hasSeconds}
              hasTime={hasTime}
              onChange={onDateTimeChangeCallback}
              parseDate={(dt: Date | number) => parseDate(formatDate(dt))}
              value={tmpValue}
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
                  {cancelButtonText}
                </Button>,
                <Button
                  key={'apply'}
                  colorScheme={'accent'}
                  onClick={() => {
                    onChange(tmpValue);
                    setOpened(false);
                    onApply();
                  }}
                >
                  {applyButtonText}
                </Button>,
              ]}
            />
          )}
        </Popover.Panel>
      )}
    </Popover>
  );
};
