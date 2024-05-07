import * as React from 'react';

import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';
import {
  Input,
  type InputProps,
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
} from '@devoinc/genesys-ui';

export interface DateTimeInputProps
  extends Pick<
      InputProps,
      | 'autoFocus'
      | 'placeholder'
      | 'size'
      | 'label'
      | 'onClick'
      | 'onBlur'
      | 'onKeyUp'
      | 'helper'
      | 'status'
    >,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Date representation value */
  value: string;
  /** Function called when the value changes */
  onChange: (value: string) => void;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  'aria-label': ariaLabel = 'datetime',
  autoFocus,
  id,
  label,
  helper,
  onBlur,
  onChange,
  onClick,
  onKeyUp,
  placeholder,
  size,
  value,
  status,
}) => (
  <Input
    aria-label={ariaLabel}
    autoFocus={autoFocus}
    helper={helper}
    icon={<GICalendarMonthDayPlannerEvents />}
    id={id}
    label={label}
    onClick={onClick}
    onChange={(event) => {
      onChange((event.target as HTMLInputElement).value);
    }}
    onKeyUp={onKeyUp}
    onBlur={onBlur}
    placeholder={placeholder}
    size={size}
    status={status}
    value={value}
  />
);
