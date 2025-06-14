import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarSingle } from '../useCalendarSingle/useCalendarSingle';

describe('useCalendarSingleDay', () => {
  test('with day', () => {
    const range = [new Date(2022, 8, 0)];

    const { result } = renderHook(() => useCalendarSingle([...range]));
    expect(result.current.range).toStrictEqual(range);

    const nextDate = new Date(2022, 8, 11);

    act(() => {
      result.current.handleNewDate(nextDate);
    });

    expect(result.current.range).toStrictEqual([nextDate]);
  });

  test('without day', () => {
    const { result } = renderHook(() => useCalendarSingle());
    expect(result.current.range).toStrictEqual([]);

    const nextDate = new Date(2022, 8, 5);

    act(() => {
      result.current.handleNewDate(nextDate);
    });

    expect(result.current.range).toStrictEqual([nextDate]);
  });
});
