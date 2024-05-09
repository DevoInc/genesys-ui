import { describe, test, expect, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useDateTimeInputValidation } from './useDateTimeInputValidation';

describe('useDateTimeInputValidation', () => {
  test('set to invalid value and back to valid value', () => {
    const fn = vi.fn();
    const { result } = renderHook(() =>
      useDateTimeInputValidation({
        value: 0,
        onChange: fn,
        reprDate: (num) => String(num),
        parseDate: (str) => {
          const result = parseInt(str);
          const isValid = !isNaN(result);
          return {
            isValid,
            value: result,
            errors: !isValid ? ['Is not a number'] : [],
          };
        },
      }),
    );
    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual('0');
    expect(result.current.errors).toEqual([]);
    act(() => {
      result.current.inputOnChange('a');
    });
    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual('a');
    expect(result.current.errors).toEqual(['Is not a number']);
    act(() => {
      result.current.inputOnChange('12');
    });
    expect(result.current.inputValue).toEqual('12');
    expect(result.current.errors).toEqual([]);
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(12);
  });
});
