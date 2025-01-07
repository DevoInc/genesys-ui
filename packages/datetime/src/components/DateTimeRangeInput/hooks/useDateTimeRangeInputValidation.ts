import * as React from 'react';

import { IParseResult } from '../../../declarations';

type Setter<T = string> = (arr: T[], index: number, newValue: T) => T[];
const setter: Setter<string | number | Date | string[]> = (
  arr,
  index,
  newValue,
) => arr.map((x, idx) => (idx === index ? newValue : x));

export const useDateTimeRangeInputValidation = ({
  value,
  onChange,
  reprDate,
  parseDate,
}: {
  value: (string | number | Date)[];
  onChange: (value: (string | number | Date)[]) => void;
  reprDate: (value: string | number | Date) => string;
  parseDate: (str: string) => IParseResult;
}) => {
  // TODO: Review the initial value with error here and in the DateTimeInput
  const [{ inputValue, errors }, setState] = React.useState({
    inputValue: value.map(reprDate),
    errors: value.map(() => []),
  });

  // TODO: Review this
  const inputOnChange = (index: number, newValue: string) => {
    const result = parseDate(newValue);
    const newInputValue = setter(inputValue, index, newValue) as string[];
    if (result.isValid) {
      onChange(setter(value, index, result.value) as number[]);
    }
    setState({
      inputValue: newInputValue,
      errors: setter(errors, index, result.errors) as string[][],
    });
  };

  const updateValue = (range: (string | number | Date)[]) => {
    const rangeStr = range.map((x) => reprDate(x));
    if (rangeStr.some((x, idx) => x !== inputValue[idx])) {
      const results = rangeStr.map((x) => parseDate(x));
      setState({
        inputValue: rangeStr,
        errors: results.map((x) => x.errors),
      });
    }
  };

  return { inputValue, inputOnChange, errors, updateValue };
};
