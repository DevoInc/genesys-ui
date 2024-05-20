import * as React from 'react';

import type { IParseResult } from '../../declarations';

export const useDateTimeInputValidation = ({
  value,
  onChange,
  reprDate,
  parseDate,
}: {
  value: Date | number;
  onChange: (value: Date | number) => void;
  reprDate: (value: Date | number) => string;
  parseDate: (str: string) => IParseResult;
}) => {
  const [{ inputValue, errors }, setState] = React.useState(() => {
    const valueStr = reprDate(value);
    const result = parseDate(valueStr);
    return { inputValue: valueStr, errors: result.errors };
  });

  const inputOnChange = (newStrValue: string) => {
    const result = parseDate(newStrValue);
    setState({ inputValue: newStrValue, errors: result.errors });
    if (result.isValid) {
      onChange(result.value);
    }
  };

  const updateValue = (dt: Date | number) => {
    const valueStr = reprDate(dt);
    if (valueStr !== inputValue) {
      const result = parseDate(valueStr);
      setState({ inputValue: valueStr, errors: result.errors });
    }
  };

  return { inputValue, inputOnChange, errors, updateValue };
};
