import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarSingleDayBehavior } from '.';

describe('useCalendarSingleDayBehavior', () => {
  test('with day', () => {
    const day = new Date(2022, 8, 0).getTime();

    const { result } = renderHook(() => useCalendarSingleDayBehavior({ day }));
    expect(result.current.selectedDates.from).toEqual(day);
    expect(result.current.selectedDates.to).toEqual(day);
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 11).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(nextDate);
    expect(result.current.selectedDates.to).toEqual(nextDate);
  });

  test('without day', () => {
    const { result } = renderHook(() => useCalendarSingleDayBehavior({}));
    expect(result.current.selectedDates.from).toBeNull();
    expect(result.current.selectedDates.to).toBeNull();
    expect(result.current.hasLeftHoverEffect).toBe(false);
    expect(result.current.hasRightHoverEffect).toBe(false);

    const nextDate = new Date(2022, 8, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(nextDate);
    expect(result.current.selectedDates.to).toEqual(nextDate);
  });
});
