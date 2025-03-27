import * as React from 'react';

import {
  TDateRange,
  TParseDate,
  TParseRange,
  TReprDate,
} from '../../../declarations';

type Setter<T = string> = (arr: T[], index: number, newValue: T) => T[];
const setter: Setter<string | number | Date | string[]> = (
  arr,
  index,
  newValue,
) => {
  if (index < arr.length) {
    return arr.map((x, idx) => (idx === index ? newValue : x));
  } else {
    const result = arr.slice();
    result[index] = newValue;
    return result;
  }
};

export const useDateTimeRangeInputValidation = ({
  value,
  onChange,
  reprDate,
  parseDate,
  parseRange,
}: {
  value: TDateRange;
  onChange: (value: TDateRange) => void;
  reprDate: TReprDate;
  parseDate: TParseDate;
  parseRange: TParseRange;
}) => {
  const [{ inputValue, errors, rangeErrors }, setState] = React.useState(() => {
    const parseDatesResult = value.map((x) => parseDate(x));
    const parseRangeResult = parseRange(parseDatesResult);
    return {
      inputValue: parseDatesResult.map((x) => reprDate(x.value)),
      errors: parseDatesResult.map((x) => x.errors),
      rangeErrors: parseRangeResult.errors,
    };
  });

  const inputOnChange = (index: number, newValue: string) => {
    const result = parseDate(newValue);
    const newInputValue = setter(inputValue, index, newValue) as string[];
    const newRange = setter(value, index, result.value) as number[];
    const parseRangeResult = parseRange([
      parseDate(newRange[0]),
      parseDate(newRange[1]),
    ]);
    if (result.isValid && parseRangeResult.isValid) {
      onChange(newRange);
    }
    setState({
      inputValue: newInputValue,
      errors: setter(errors, index, result.errors) as string[][],
      rangeErrors: parseRangeResult.errors,
    });
  };

  const updateValue = (range: (string | number | Date)[], len: number = 2) => {
    const rangeStr = range.map(reprDate);
    if (
      rangeStr.some((x, idx) => x !== inputValue[idx]) ||
      rangeStr.length !== len
    ) {
      const results = range.map((x) => parseDate(x));
      const parseRangeResult = parseRange(results);
      setState({
        inputValue: rangeStr,
        errors: Array.from({ length: len }).map(
          (_, idx) => results[idx]?.errors ?? ['Empty field'],
        ),
        rangeErrors: parseRangeResult.errors,
      });
    }
  };

  return { inputValue, inputOnChange, errors, rangeErrors, updateValue };
};
