import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarForwardBackward } from './useCalendarForwardBackward';

describe('useCalendarForwardBackwardBehavior', () => {
  test('Initial behaviour backward', () => {
    const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];
    const initialBehavior = 'backward';

    const { result } = renderHook(() =>
      useCalendarForwardBackward([...range], initialBehavior),
    );
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(true);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 11);

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([nextDate]);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);
  });

  test('Initial behaviour forward', () => {
    const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];
    const initialBehavior = 'forward';

    const { result } = renderHook(() =>
      useCalendarForwardBackward(range, initialBehavior),
    );
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);

    const nextDate = new Date(2022, 8, 11);

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([range[0], nextDate]);
    expect(result.current.hasLeftHoverEffect).toBe(true);
    expect(result.current.hasRightHoverEffect).toBe(false);
  });

  test('Initial without dates', () => {
    const { result } = renderHook(() => useCalendarForwardBackward());
    expect(result.current.selectedDates).toStrictEqual([]);
    expect(result.current.hasLeftHoverEffect).toBe(true);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 11);

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([nextDate]);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);
  });

  test('Initial without to', () => {
    const range = [new Date(2022, 8, 0)];
    const { result } = renderHook(() => useCalendarForwardBackward(range));
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(true);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 11);

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([range[0], nextDate]);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);
  });
});
