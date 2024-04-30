import * as React from 'react';

import {
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import { formatDate, toTimestamp, parseDate as parseDateFN } from '../../utils';
import { DateTime, type DateTimeProps } from '../DateTime';
import { DateTimeInput, DateTimeInputProps } from '../DateTimeInput';
import { TDatetime } from '../declarations';

export interface DateTimePickerProps
  extends Omit<DateTimeProps, 'selectedDates' | 'validateDate'>,
    Omit<
      DateTimeInputProps,
      'onChange' | 'hasMillis' | 'hasSeconds' | 'hasTime' | 'value'
    >,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic {}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  dateFormats,
  id,
  onChange,
  parseDate = parseDateFN,
  value: customValue,
  ...restDateTimeProps
}) => {
  const value = toTimestamp(customValue);

  const validateDateCallback = React.useCallback(
    (ts: TDatetime) => {
      const strDate = formatDate({
        format: dateFormats?.[0],
        hasMillis,
        hasSeconds,
        hasTime,
        ts,
      });

      return parseDate(strDate).isValid;
    },
    [dateFormats, hasMillis, hasSeconds, hasTime, parseDate],
  );

  return (
    <VFlex alignItems={'stretch'}>
      <DateTimeInput
        {...restDateTimeProps}
        aria-label={ariaLabel}
        dateFormats={dateFormats}
        id={id}
        onChange={onChange}
        parseDate={parseDate}
        value={value}
      />

      <DateTime
        {...restDateTimeProps}
        hasMillis={hasMillis}
        hasSeconds={hasSeconds}
        hasTime={hasTime}
        onChange={onChange}
        validateDate={validateDateCallback}
        value={value}
      />
    </VFlex>
  );
};
