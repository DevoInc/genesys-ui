import { act, renderHook } from '@testing-library/react';

import { useCalendarForwardBackwardBehavior } from './';

describe('useCalendarForwardBackwardBehavior', () => {
  test('Initial behaviour backward', () => {
    const from = new Date(2022, 8, 0).getTime();
    const to = new Date(2022, 8, 10).getTime();
    const initialBehavior = 'backward';

    const { result } = renderHook(() =>
      useCalendarForwardBackwardBehavior({ from, to, initialBehavior })
    );
    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(to);
    expect(result.current.hasLeftHoverEffect).toEqual(true);
    expect(result.current.hasRightHoverEffect).toEqual(false);

    const nextDate = new Date(2022, 8, 11).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(nextDate);
    expect(result.current.selectedDates.to).toEqual(null);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);
  });

  test('Initial behaviour forward', () => {
    const from = new Date(2022, 8, 0).getTime();
    const to = new Date(2022, 8, 10).getTime();
    const initialBehavior = 'forward';

    const { result } = renderHook(() =>
      useCalendarForwardBackwardBehavior({ from, to, initialBehavior })
    );
    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(to);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);

    const nextDate = new Date(2022, 8, 11).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(nextDate);
    expect(result.current.hasLeftHoverEffect).toEqual(true);
    expect(result.current.hasRightHoverEffect).toEqual(false);
  });

  test('Initial without dates', () => {
    const { result } = renderHook(() => useCalendarForwardBackwardBehavior({}));
    expect(result.current.selectedDates.from).toEqual(null);
    expect(result.current.selectedDates.to).toEqual(null);
    expect(result.current.hasLeftHoverEffect).toEqual(true);
    expect(result.current.hasRightHoverEffect).toEqual(false);

    const nextDate = new Date(2022, 8, 11).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(nextDate);
    expect(result.current.selectedDates.to).toEqual(null);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);
  });

  test('Initial without to', () => {
    const from = new Date(2022, 8, 0).getTime();
    const { result } = renderHook(() =>
      useCalendarForwardBackwardBehavior({ from })
    );
    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(null);
    expect(result.current.hasLeftHoverEffect).toEqual(true);
    expect(result.current.hasRightHoverEffect).toEqual(false);

    const nextDate = new Date(2022, 8, 11).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(nextDate);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);
  });
});
