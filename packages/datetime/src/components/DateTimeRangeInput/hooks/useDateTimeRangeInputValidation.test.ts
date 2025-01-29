import { describe, test, expect, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useDateTimeRangeInputValidation } from './useDateTimeRangeInputValidation';

describe('useDateTimeRangeInputValidation', () => {
  test('set to invalid value and back to valid value', () => {
    const fn = vi.fn();
    const { result } = renderHook(() =>
      useDateTimeRangeInputValidation({
        value: [0, 0, 0],
        onChange: fn,
        reprDate: (num) => String(num),
        parseDate: (str) => {
          const result = Number(str);
          const isValid = !isNaN(result);
          return {
            isValid,
            value: result,
            errors: !isValid ? ['Is not a number'] : [],
          };
        },
        parseRange: (range) => {
          return {
            isValid: true,
            value: range,
            errors: [],
          };
        },
      }),
    );
    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual(['0', '0', '0']);
    expect(result.current.errors).toEqual([[], [], []]);
    act(() => {
      result.current.inputOnChange(1, 'a');
    });
    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual(['0', 'a', '0']);
    expect(result.current.errors).toEqual([[], ['Is not a number'], []]);
    act(() => {
      result.current.inputOnChange(1, '12');
    });
    expect(result.current.inputValue).toEqual(['0', '12', '0']);
    expect(result.current.errors).toEqual([[], [], []]);
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith([0, 12, 0]);
  });
});
