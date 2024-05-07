import * as React from 'react';

import type { IParseResult } from '../../declarations';

export const useDateTimeInputValidation = ({
  value,
  onChange,
  reprDate,
  parseDate,
}: {
  value: number;
  onChange: (value: number) => void;
  reprDate: (value: number) => string;
  parseDate: (str: string) => IParseResult;
}) => {
  const [{ inputValue, errors }, setState] = React.useState({
    inputValue: reprDate(value),
    errors: [],
  });
  const inputOnChange = (newValue: string) => {
    const result = parseDate(newValue);
    if (result.isValid) {
      onChange(result.value);
      setState({ inputValue: newValue, errors: [] });
    } else {
      setState({ inputValue: newValue, errors: result.errors });
    }
  };

  return { inputValue, inputOnChange, errors };
};
