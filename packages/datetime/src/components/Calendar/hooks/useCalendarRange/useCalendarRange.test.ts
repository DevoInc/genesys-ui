import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarRange } from '../useCalendarRange/useCalendarRange';
import { set } from 'date-fns';

describe('Calendar', () => {
  describe('hooks', () => {
    describe('useCalendarRange', () => {
      test('Initial behaviour backward', () => {
        const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

        const { result } = renderHook(() => useCalendarRange(range));
        expect(result.current.range).toStrictEqual(range);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([nextDate]);
      });

      test('Initial behaviour forward', () => {
        const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

        const { result } = renderHook(() => useCalendarRange(range));
        expect(result.current.range).toStrictEqual(range);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([nextDate]);
      });

      test('Initial without dates', () => {
        const { result } = renderHook(() => useCalendarRange());
        expect(result.current.range).toStrictEqual([]);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([nextDate]);
      });

      test('Initial without to', () => {
        const range = [new Date(2022, 8, 0)];
        const { result } = renderHook(() => useCalendarRange(range));
        expect(result.current.range).toStrictEqual(range);

        const nextDate = set(new Date(2022, 8, 11), {
          hours: 23,
          minutes: 59,
          seconds: 59,
          milliseconds: 999,
        });

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([
          range[0].valueOf(),
          nextDate.valueOf(),
        ]);
      });
    });
  });
});
