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

import {
  ParseDateResult,
  formatDate,
  parseDate as parseDateInternal,
  toTimestamp,
} from '../../utils';
import { ITime, TDatetime } from '../declarations';

// TODO: hacer reducer para simplificar los cambios de estados
// TODO: hacer test

export interface DateTimeInputProps
  extends Pick<ITime, 'hasMillis' | 'hasSeconds' | 'hasTime'>,
    Pick<
      InputProps,
      | 'autoFocus'
      | 'placeholder'
      | 'size'
      | 'label'
      | 'onClick'
      | 'onBlur'
      | 'onKeyUp'
    >,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Valid date formats. Check https://date-fns.org/docs/format */
  dateFormats?: string[];
  /** Function to validate a date */
  parseDate?: (ts: string) => ParseDateResult;
  /** Timestamp value */
  value: TDatetime;
  /** Function called when the value changes */
  onChange: (ts: number) => void;
  /** Text for the Input helper */
  defaultHelper?: string;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  'aria-label': ariaLabel = 'datetime',
  autoFocus,
  dateFormats: formatStr,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  label,
  defaultHelper,
  onBlur,
  onChange,
  onClick,
  onKeyUp,
  placeholder,
  size,
  value: customValue,
  parseDate = parseDateInternal,
}) => {
  const value = toTimestamp(customValue);
  const strValue = value
    ? formatDate({
        format: formatStr?.[0],
        hasMillis,
        hasSeconds,
        hasTime,
        ts: value,
      })
    : '';

  const [initialDate, setInitialDate] = React.useState<number>(value);
  const [inputValue, setInputValue] = React.useState<string>(strValue);
  const [{ status, inputHelper }, setStatus] = React.useState(() => {
    const result = parseDate(strValue, formatStr);
    return result.isValid
      ? { status: 'base', inputHelper: defaultHelper }
      : { status: 'error', inputHelper: result.errors.join('. ') };
  });

  const onChangeCallback = React.useCallback(
    (event: React.ChangeEvent<Element>) => {
      const element = event.target as HTMLInputElement;
      setInputValue(element.value);
      const result = parseDate(element.value, formatStr);
      if (result.isValid) {
        setStatus({ status: 'base', inputHelper: defaultHelper });
      } else {
        setStatus({ status: 'error', inputHelper: result.errors.join('. ') });
      }
    },
    [formatStr, defaultHelper, parseDate],
  );

  const updateDateCallback = React.useCallback(() => {
    const result = parseDate(inputValue, formatStr);
    if (result.isValid) {
      setInitialDate(result.value);
      onChange?.(result.value);
      setStatus({ status: 'base', inputHelper: defaultHelper });
    } else {
      setStatus({ status: 'error', inputHelper: result.errors.join('. ') });
    }
  }, [parseDate, inputValue, formatStr, onChange, defaultHelper]);

  const onKeyUpCallback = React.useCallback(
    (event: React.KeyboardEvent<Element>) => {
      if (
        event.type === 'keyup' &&
        event.code === 'Enter' &&
        status === 'base'
      ) {
        updateDateCallback();
      } else if (event.type === 'keyup' && event.code === 'Escape') {
        setInputValue(
          formatDate({
            ts: initialDate,
            format: formatStr?.[0],
            hasMillis,
            hasSeconds,
            hasTime,
          }),
        );
        setStatus({ status: 'base', inputHelper: defaultHelper });
      }
      onKeyUp?.(event);
    },
    [
      status,
      onKeyUp,
      updateDateCallback,
      initialDate,
      formatStr,
      hasMillis,
      hasSeconds,
      hasTime,
      defaultHelper,
    ],
  );

  React.useEffect(() => {
    setInitialDate(value);
    setInputValue(strValue);
    const result = parseDate(strValue, formatStr);
    setStatus(
      result.isValid
        ? { status: 'base', inputHelper: defaultHelper }
        : { status: 'error', inputHelper: result.errors.join('. ') },
    );
  }, [defaultHelper, formatStr, parseDate, strValue, value]);

  return (
    <Input
      aria-label={ariaLabel}
      autoFocus={autoFocus}
      helper={inputHelper}
      icon={<GICalendarMonthDayPlannerEvents />}
      id={id}
      label={label}
      onClick={onClick}
      onChange={onChangeCallback}
      onKeyUp={onKeyUpCallback}
      onBlur={(event) => {
        updateDateCallback();
        onBlur?.(event);
      }}
      placeholder={placeholder}
      size={size}
      status={status as InputProps['status']}
      value={inputValue}
    />
  );
};
