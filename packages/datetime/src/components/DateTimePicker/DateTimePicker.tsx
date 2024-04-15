import * as React from 'react';
import { format } from 'date-fns';

import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';
import {
  InputControl,
  type InputControlProps,
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import { getFormatTimeStr } from '../DateTime/utils/format';
import { toTimestamp } from '../utils';
import { DateTime, type DateTimeProps } from '../DateTime';

export interface DateTimePickerProps
  extends Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'autoFocus' | 'onChange' | 'placeholder' | 'size'>,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic {}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  onChange,
  placeholder,
  size,
  value: customValue,
  autoFocus,
  ...restDateTimeProps
}) => {
  const value = toTimestamp(customValue);

  const datetimeFormat = `yyyy-MM-dd ${
    hasTime ? getFormatTimeStr(hasSeconds, hasMillis) : ''
  }`;

  const [date, setDate] = React.useState(value ? value : new Date().getTime());

  const onChangeCallback = React.useCallback((ts: number) => {
    setDate(ts);
  }, []);
  return (
    <VFlex alignItems={'stretch'}>
      <InputControl
        aria-label={ariaLabel}
        icon={<GICalendarMonthDayPlannerEvents />}
        id={id}
        value={format(date, datetimeFormat)}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        autoFocus={autoFocus}
      />
      <DateTime
        {...restDateTimeProps}
        hasSeconds={hasSeconds}
        hasMillis={hasMillis}
        hasTime={hasTime}
        value={value}
        onChange={onChangeCallback}
      />
    </VFlex>
  );
};
