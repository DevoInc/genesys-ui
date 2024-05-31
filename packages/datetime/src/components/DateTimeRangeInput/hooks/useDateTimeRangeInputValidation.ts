import * as React from 'react';

import { IParseResult } from '../../../declarations';

type Setter<T = string> = (arr: T[], index: number, newValue: T) => T[];
const setter: Setter<string | number | string[]> = (arr, index, newValue) =>
  arr.map((x, idx) => (idx === index ? newValue : x));

export const useDateTimeRangeInputValidation = ({
  value,
  onChange,
  reprDate,
  parseDate,
}: {
  value: number[];
  onChange: (value: number[]) => void;
  reprDate: (value: number) => string;
  parseDate: (str: string) => IParseResult;
}) => {
  // TODO: Review the initial value with error here and in the DateTimeInput
  const [{ inputValue, errors }, setState] = React.useState({
    inputValue: value.map(reprDate),
    errors: value.map(() => []),
  });
  const inputOnChange = (index: number, newValue: string) => {
    const result = parseDate(newValue);
    const newInputValue = setter(inputValue, index, newValue) as string[];
    if (result.isValid) {
      onChange(setter(value, index, result.value) as number[]);
      setState({
        inputValue: newInputValue,
        errors: setter(errors, index, []) as string[][],
      });
    } else {
      setState({
        inputValue: newInputValue,
        errors: setter(errors, index, result.errors) as string[][],
      });
    }
  };

  return { inputValue, inputOnChange, errors };
};
