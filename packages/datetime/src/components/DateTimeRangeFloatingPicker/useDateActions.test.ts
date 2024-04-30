import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useDateActions } from './useDateActions';

describe('useDateActions', () => {
  test('init with Date', () => {
    const date = new Date(2022, 8, 24);
    const { result } = renderHook(() => useDateActions(date));
    expect(result.current.date).toEqual(date);
  });

  test('init with number (timestamp)', () => {
    const ts = new Date(2022, 8, 24).getTime();
    const { result } = renderHook(() => useDateActions(ts));
    expect(result.current.date.getTime()).toBe(ts);
  });

  test('next month click', () => {
    const { result } = renderHook(() => useDateActions(new Date(2022, 8, 24)));
    act(() => {
      result.current.onNextMonthClick();
    });
    expect(result.current.date).toEqual(new Date(2022, 9, 24));
  });

  test('prev month click', () => {
    const { result } = renderHook(() => useDateActions(new Date(2022, 8, 24)));
    act(() => {
      result.current.onPrevMonthClick();
    });
    expect(result.current.date).toEqual(new Date(2022, 7, 24));
  });
});
