import * as React from 'react';

import {
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import { formatDate as formatDateHelper } from '../../helpers';
import { parseStrDate } from '../../parsers';
import { DateTime, type DateTimeProps } from '../DateTime';
import {
  DateTimeInput,
  DateTimeInputProps,
  useDateTimeInputValidation,
} from '../DateTimeInput';
import type { IParseResult } from '../../declarations';

export interface DateTimePickerProps
  extends Pick<
      DateTimeProps,
      | 'ariaLabelMonth'
      | 'ariaLabelTime'
      | 'monthDate'
      | 'hasMillis'
      | 'hasSeconds'
      | 'hasTime'
      | 'weekDays'
    >,
    Pick<
      DateTimeInputProps,
      'autoFocus' | 'placeholder' | 'size' | 'label' | 'helper'
    >,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IStyledOverloadCss, 'style'>,
    Pick<IStyledPolymorphic, 'as'> {
  onChange?: DateTimeProps['onChange'];
  value?: Date | number;
  parseDate?: (str: string) => IParseResult;
  formatDate?: (dt: Date | number) => string;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  formatDate = formatDateHelper,
  id,
  onChange = () => null,
  parseDate = parseStrDate,
  value,
  helper,
  ariaLabelMonth,
  ariaLabelTime,
  monthDate: initialMonthDate,
  weekDays,
  autoFocus,
  placeholder,
  size,
  label,
}) => {
  const [monthDate, setMonthDate] = React.useState(initialMonthDate);
  const { inputValue, inputOnChange, errors, updateValue } =
    useDateTimeInputValidation({
      value,
      onChange: (dt) => {
        setMonthDate(dt);
        onChange(dt);
      },
      reprDate: formatDate,
      parseDate,
    });

  return (
    <VFlex alignItems={'stretch'}>
      <DateTimeInput
        autoFocus={autoFocus}
        placeholder={placeholder}
        size={size}
        label={label}
        aria-label={ariaLabel}
        id={id}
        onChange={inputOnChange}
        value={inputValue}
        helper={errors.length > 0 ? errors[0] : helper}
        status={errors.length > 0 ? 'error' : 'base'}
      />
      <DateTime
        ariaLabelMonth={ariaLabelMonth}
        ariaLabelTime={ariaLabelTime}
        monthDate={monthDate}
        weekDays={weekDays}
        hasMillis={hasMillis}
        hasSeconds={hasSeconds}
        hasTime={hasTime}
        onChange={(dt: Date | number) => {
          updateValue(dt);
          onChange(dt);
        }}
        onChangeMonthDate={(dt) => {
          setMonthDate(dt);
        }}
        parseDate={(dt: Date | number) => parseDate(formatDate(dt))}
        value={value}
      />
    </VFlex>
  );
};
