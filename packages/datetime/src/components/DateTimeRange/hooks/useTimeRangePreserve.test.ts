import { describe, test, expect, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useTimeRangePreserve } from './useTimeRangePreserve';
import {
  DATE_TIME_RANGE_SOURCE_CAL_LEFT,
  DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
  DATE_TIME_RANGE_SOURCE_TIME_LEFT,
} from '../constants';

const now = new Date().getTime();

describe('useTimeRangePreserve', () => {
  test('preserve the dates', () => {
    const fn = vi.fn();
    const { result } = renderHook(() => useTimeRangePreserve(fn));

    expect(fn).not.toBeCalled();
    expect(fn).toBeCalledTimes(0);

    act(() => {
      result.current.onChangeRange(
        [now - 1000],
        DATE_TIME_RANGE_SOURCE_CAL_LEFT,
      );
    });

    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith([now - 1000]);

    act(() => {
      result.current.onChangeRange(
        [now - 1000, now],
        DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
      );
    });

    expect(fn).toBeCalledTimes(2);
    expect(fn).toBeCalledWith([now - 1000, now]);

    act(() => {
      result.current.onChangeRange(
        [now - 5000, now],
        DATE_TIME_RANGE_SOURCE_TIME_LEFT,
      );
    });

    expect(fn).toBeCalledTimes(3);
    expect(fn).toBeCalledWith([now - 5000, now]);

    act(() => {
      result.current.onChangeRange(
        [now - 1000],
        DATE_TIME_RANGE_SOURCE_CAL_LEFT,
      );
    });

    expect(fn).toBeCalledTimes(4);
    expect(fn).toBeCalledWith([now - 1000, now]);

    act(() => {
      result.current.onChangeRange(
        [now - 1000, now],
        DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
      );
    });

    expect(fn).toBeCalledTimes(5);
    expect(fn).toBeCalledWith([now - 5000, now]);
  });
});
