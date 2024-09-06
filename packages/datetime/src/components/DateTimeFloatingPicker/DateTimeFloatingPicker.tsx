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
import { formatDate as formatDateHelper } from '../../helpers';
import { parseStrDate } from '../../parsers';
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
  /** i18n texts */
  i18n?: {
    apply: string;
    cancel: string;
  };
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
  i18n = {
    apply: 'Apply',
    cancel: 'Cancel',
  },
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
  const [tmpValue, setTmpValue] = React.useState<number | Date>(value);
  const [monthDate, setMonthDate] = React.useState<number | Date>(
    initialMonthDate,
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
