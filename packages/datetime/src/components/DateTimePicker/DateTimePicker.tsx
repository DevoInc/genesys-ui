import * as React from 'react';
import { format } from 'date-fns';

import {
  InputControl,
  InputControlProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  VFlex,
} from '@devoinc/genesys-ui';

import { DateTime, DateTimeProps } from '../DateTime';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { toTimestamp } from '../utils';

export interface DateTimePickerProps
  extends Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'onChange' | 'placeholder' | 'size'>,
    Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    StyledOverloadCssProps,
    StyledPolymorphicProps {}

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
        icon="gi-calendar_month_day_planner_events"
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
