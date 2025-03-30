import * as React from 'react';

import type { IParseResult, TCalendarDate } from '../../../declarations';

export const useDateTimeInputValidation = ({
  value,
  onChange,
  formatDate,
  parseDate,
}: {
  value: Date | number;
  onChange: (value: Date | number) => void;
  formatDate: (value: Date | number) => string;
  parseDate: (str: string) => IParseResult;
}): {
  inputValue: string;
  inputOnChange: (str: string) => void;
  errors: string[];
  updateValue: (value: Date | number) => void;
} => {
  const [{ inputValue, errors }, setState] = React.useState<{
    inputValue: string;
    errors: string[];
  }>(() => {
    const valueStr = formatDate(value);
    const result = parseDate(valueStr);
    return { inputValue: valueStr, errors: result.errors };
  });

  const inputOnChange = (newStrValue: string) => {
    const result = parseDate(newStrValue);
    setState({ inputValue: newStrValue, errors: result.errors });
    if (result.isValid) {
      onChange(result.value as TCalendarDate);
    }
  };

  const updateValue = (dt: number | Date) => {
    const valueStr = formatDate(dt);
    if (valueStr !== inputValue) {
      const result = parseDate(valueStr);
      setState({ inputValue: valueStr, errors: result.errors });
    }
  };

  return { inputValue, inputOnChange, errors, updateValue };
};
