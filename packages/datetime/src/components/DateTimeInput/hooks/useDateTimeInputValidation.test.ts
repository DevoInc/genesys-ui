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
        formatDate: (num) => String(num),
        parseDate: (str) => {
          const res = parseInt(str);
          const isValid = !isNaN(res);
          return {
            isValid,
            value: res,
            errors: !isValid ? ['error message'] : [],
          };
        },
      }),
    );

    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual('0');
    expect(result.current.errors).toEqual([]);

    act(() => {
      result.current.updateValue(24);
    });

    expect(result.current.inputValue).toEqual('24');
    expect(result.current.errors).toEqual([]);
    expect(fn).toBeCalledTimes(0);

    act(() => {
      result.current.inputOnChange('a');
    });

    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual('a');
    expect(result.current.errors).toEqual(['error message']);

    act(() => {
      result.current.inputOnChange('12');
    });

    expect(result.current.inputValue).toEqual('12');
    expect(result.current.errors).toEqual([]);
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(12);
  });

  test('initialize with invalid value', () => {
    const fn = vi.fn();
    const { result } = renderHook(() =>
      useDateTimeInputValidation({
        value: -12,
        onChange: fn,
        formatDate: (num) => String(num),
        parseDate: (str) => {
          const res = Number(str);
          const isValid = !isNaN(res) && res >= 0;
          return {
            isValid,
            value: res,
            errors: !isValid ? ['error message'] : [],
          };
        },
      }),
    );

    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual('-12');
    expect(result.current.errors).toEqual(['error message']);

    act(() => {
      result.current.updateValue(24);
    });

    expect(fn).toBeCalledTimes(0);
    expect(result.current.inputValue).toEqual('24');
    expect(result.current.errors).toEqual([]);
  });
});
