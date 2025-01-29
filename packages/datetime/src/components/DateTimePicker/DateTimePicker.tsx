import * as React from 'react';

import {
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import { formatDate as formatDateHelper } from '../../helpers';
import { getDefaultParseDate } from '../../parsers';
import { DateTime, type DateTimeProps } from '../DateTime';
import {
  DateTimeInput,
  DateTimeInputProps,
  useDateTimeInputValidation,
} from '../DateTimeInput';
import type { IParseResult } from '../../declarations';
import { defaultDateTimePickerI18n } from './i18n';
import type { TDateTimePickerI18n } from './declarations';
import { useMergeI18n } from '../../hooks';

export interface DateTimePickerProps
  extends Pick<
      DateTimeProps,
      'monthDate' | 'hasMillis' | 'hasSeconds' | 'hasTime' | 'weekDays'
    >,
    Pick<
      DateTimeInputProps,
      'autoFocus' | 'placeholder' | 'size' | 'label' | 'helper'
    >,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IStyledOverloadCss, 'style'>,
    Pick<IStyledPolymorphic, 'as'> {
  /** i18n texts */
  i18n?: TDateTimePickerI18n;
  /** Function called when any enabled calendar cell is clicked or the time input changed. */
  onChange?: DateTimeProps['onChange'];
  /** Value of the DateTimePicker */
  value?: Date | number;
  parseDate?: (str: string) => IParseResult;
  formatDate?: (dt: Date | number) => string;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  i18n: userI18n = defaultDateTimePickerI18n,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  formatDate = formatDateHelper,
  id,
  onChange = () => null,
  parseDate = getDefaultParseDate(),
  value,
  helper,
  monthDate: initialMonthDate,
  weekDays,
  autoFocus,
  placeholder,
  size,
  label,
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultDateTimePickerI18n,
  ) as TDateTimePickerI18n;
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
        i18n={i18n}
        id={id}
        onChange={inputOnChange}
        value={inputValue}
        helper={errors.length > 0 ? errors[0] : helper}
        status={errors.length > 0 ? 'error' : 'base'}
      />
      <DateTime
        i18n={i18n}
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
