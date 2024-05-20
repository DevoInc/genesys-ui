import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarForward } from './useCalendarForward';

describe('useCalendarForwardBehavior', () => {
  test('with dates - new date > to', () => {
    const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

    const { result } = renderHook(() => useCalendarForward([...range]));
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);

    const nextDate = new Date(2022, 8, 11).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([range[0], nextDate]);
  });

  test('with dates - new date > from and date < to', () => {
    const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

    const { result } = renderHook(() => useCalendarForward([...range]));
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);

    const nextDate = new Date(2022, 8, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([range[0], nextDate]);
  });

  test('with dates - new date < from', () => {
    const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

    const { result } = renderHook(() => useCalendarForward([...range]));
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);

    const nextDate = new Date(2022, 7, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([nextDate]);
  });

  test('without dates', () => {
    const { result } = renderHook(() => useCalendarForward([]));
    expect(result.current.selectedDates).toStrictEqual([]);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(true);

    const nextDate = new Date(2022, 7, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([nextDate]);
  });
});
