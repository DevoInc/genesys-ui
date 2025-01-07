import * as React from 'react';

import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';
import {
  Input,
  type InputProps,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  type IDataAttrs,
} from '@devoinc/genesys-ui';
import { defaultDateTimeInputI18n } from './i18n';
import { useMergeI18n } from '../..//hooks';
import type { TDateTimeInputI18n } from './declarations';

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
    Pick<IGlobalAttrs, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic,
    IDataAttrs {
  i18n?: TDateTimeInputI18n;
  /** Date representation value */
  value: string;
  /** Function called when the value changes */
  onChange: (value: string) => void;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  autoFocus,
  i18n: userI18n = defaultDateTimeInputI18n,
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
  ...dataProps
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultDateTimeInputI18n,
  ) as TDateTimeInputI18n;
  return (
    <Input
      {...dataProps}
      aria-label={i18n.input}
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
};
