import * as React from 'react';
import { useUpdateEffect } from 'ahooks';

import {
  Panel,
  Button,
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
import { formatDate as formatDateHelper } from '../../helpers';
import { parseStrDate } from '../../parsers';
import type { IParseResult } from '../../declarations';
import { TDateTimeFloatingPickerI18n } from './declarations';
import { defaultDateTimeFloatingPickerI18n } from './i18n';
import { useMergeI18n } from '../../hooks';

export interface DateTimeFloatingPickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened' | 'onClose' | 'placement'>,
    Pick<
      DateTimeProps,
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
    Pick<IGlobalAttrs, 'id'>,
    Pick<IStyledOverloadCss, 'style'>,
    Pick<IStyledPolymorphic, 'as'> {
  /** i18n texts */
  i18n?: TDateTimeFloatingPickerI18n;
  /** Function called when Apply button is clicked. */
  onApply?: (dt: Date | number) => void;
  /** Function called when Cancel button is clicked. */
  onCancel?: () => void;
  /** Function called when any enabled calendar cell is clicked or the time input changed. */
  onChange?: DateTimeProps['onChange'];
  /** Value of the DateTimeFloatingPicker */
  value?: Date | number;
  parseDate?: (str: string) => IParseResult;
  formatDate?: (dt: Date | number) => string;
  /** Apply change directly, without extra buttons (nor Apply or Cancel buttons) */
  autoApply?: boolean;
}

export const DateTimeFloatingPicker: React.FC<DateTimeFloatingPickerProps> = ({
  appendTo,
  i18n: userI18n = defaultDateTimeFloatingPickerI18n,
  as,
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
  parseDate = parseStrDate,
  style: customStyles,
  value = new Date().getTime(),
  helper,
  monthDate: initialMonthDate,
  weekDays,
  weekStart,
  autoFocus,
  placeholder,
  size,
  label,
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultDateTimeFloatingPickerI18n,
  ) as TDateTimeFloatingPickerI18n;
  const [tmpValue, setTmpValue] = React.useState<number | Date>(value);
  const [monthDate, setMonthDate] = React.useState<number | Date>(
    initialMonthDate || value,
  );

  const { inputValue, inputOnChange, errors, updateValue } =
    useDateTimeInputValidation({
      value: tmpValue,
      onChange: (dt) => {
        setMonthDate(dt);
        if (autoApply) {
          onChange(dt);
        } else {
          setTmpValue(dt);
        }
      },
      reprDate: formatDate,
      parseDate,
    });

  useUpdateEffect(() => {
    setTmpValue(value);
    updateValue(value);
  }, [value]);

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
            aria-label={i18n.input}
            id={id}
            onKeyUp={(event) => {
              if (
                event.type === 'keyup' &&
                ['Escape', 'Enter'].includes(event.code)
              ) {
                if (event.code === 'Enter' && !autoApply) {
                  onChange(tmpValue);
                }
                setOpened(false);
              }
            }}
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
          style={customStyles}
          width="auto"
          id={id ? `${id}__popover-panel` : null}
        >
          <Panel.Body>
            <DateTime
              i18n={i18n}
              monthDate={monthDate}
              onChangeMonthDate={setMonthDate}
              weekDays={weekDays}
              weekStart={weekStart}
              hasMillis={hasMillis}
              hasSeconds={hasSeconds}
              hasTime={hasTime}
              onChange={(dt: number | Date) => {
                if (autoApply) {
                  onChange(dt);
                } else {
                  setTmpValue(dt);
                }
              }}
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
                  {i18n.cancel}
                </Button>,
                <Button
                  key={'apply'}
                  colorScheme={'accent'}
                  onClick={() => {
                    updateValue(tmpValue);
                    onChange(tmpValue);
                    setOpened(false);
                    onApply();
                  }}
                >
                  {i18n.apply}
                </Button>,
              ]}
            />
          )}
        </Popover.Panel>
      )}
    </Popover>
  );
};
