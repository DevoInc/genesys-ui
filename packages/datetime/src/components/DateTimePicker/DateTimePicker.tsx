import * as React from 'react';
import { format } from 'date-fns';

import {
  InputControl,
  InputControlProps,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  VFlex,
} from '@devoinc/genesys-ui';

import { DateTime, DateTimeProps } from '../DateTime';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { toTimestamp } from '../utils';
import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';

export interface DateTimePickerProps
  extends Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'onChange' | 'placeholder' | 'size'>,
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
