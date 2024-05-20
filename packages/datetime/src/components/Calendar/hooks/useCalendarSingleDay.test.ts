import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarSingleDay } from './useCalendarSingleDay';

describe('useCalendarSingleDay', () => {
  test('with day', () => {
    const range = [new Date(2022, 8, 0)];

    const { result } = renderHook(() => useCalendarSingleDay([...range]));
    expect(result.current.selectedDates).toStrictEqual(range);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 11);

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([nextDate]);
  });

  test('without day', () => {
    const { result } = renderHook(() => useCalendarSingleDay());
    expect(result.current.selectedDates).toStrictEqual([]);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 5);

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates).toStrictEqual([nextDate]);
  });
});
