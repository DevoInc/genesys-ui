import { describe, test, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import { useCalendarRange } from './useCalendarRange';

describe('Calendar', () => {
  describe('hooks', () => {
    describe('useCalendarRange', () => {
      test('Initial behaviour backward', () => {
        const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

        const { result } = renderHook(() => useCalendarRange(range));
        expect(result.current.range).toStrictEqual(range);
        expect(result.current.hasLeftHoverEffect).toBe(false);
        expect(result.current.hasRightHoverEffect).toBe(false);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([nextDate]);
        expect(result.current.hasLeftHoverEffect).toBe(true);
        expect(result.current.hasRightHoverEffect).toBe(true);
      });

      test('Initial behaviour forward', () => {
        const range = [new Date(2022, 8, 0), new Date(2022, 8, 10)];

        const { result } = renderHook(() => useCalendarRange(range));
        expect(result.current.range).toStrictEqual(range);
        expect(result.current.hasLeftHoverEffect).toBe(false);
        expect(result.current.hasRightHoverEffect).toBe(false);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([nextDate]);
        expect(result.current.hasLeftHoverEffect).toBe(true);
        expect(result.current.hasRightHoverEffect).toBe(true);
      });

      test('Initial without dates', () => {
        const { result } = renderHook(() => useCalendarRange());
        expect(result.current.range).toStrictEqual([]);
        expect(result.current.hasLeftHoverEffect).toBe(false);
        expect(result.current.hasRightHoverEffect).toBe(false);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([nextDate]);
        expect(result.current.hasLeftHoverEffect).toBe(true);
        expect(result.current.hasRightHoverEffect).toBe(true);
      });

      test('Initial without to', () => {
        const range = [new Date(2022, 8, 0)];
        const { result } = renderHook(() => useCalendarRange(range));
        expect(result.current.range).toStrictEqual(range);
        expect(result.current.hasLeftHoverEffect).toBe(true);
        expect(result.current.hasRightHoverEffect).toBe(true);

        const nextDate = new Date(2022, 8, 11);

        act(() => {
          result.current.handleNewDate(nextDate);
        });

        expect(result.current.range).toStrictEqual([range[0], nextDate]);
        expect(result.current.hasLeftHoverEffect).toBe(false);
        expect(result.current.hasRightHoverEffect).toBe(false);
      });
    });
  });
});
