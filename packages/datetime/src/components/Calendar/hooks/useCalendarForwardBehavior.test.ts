import { act, renderHook } from '@testing-library/react';

import { useCalendarForwardBehavior } from './';

describe('useCalendarForwardBehavior', () => {
  test('with dates - new date > to', () => {
    const from = new Date(2022, 8, 0).getTime();
    const to = new Date(2022, 8, 10).getTime();

    const { result } = renderHook(() =>
      useCalendarForwardBehavior({ from, to })
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
  });

  test('with dates - new date > from and date < to', () => {
    const from = new Date(2022, 8, 0).getTime();
    const to = new Date(2022, 8, 10).getTime();

    const { result } = renderHook(() =>
      useCalendarForwardBehavior({ from, to })
    );
    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(to);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);

    const nextDate = new Date(2022, 8, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(nextDate);
  });

  test('with dates - new date < from', () => {
    const from = new Date(2022, 8, 0).getTime();
    const to = new Date(2022, 8, 10).getTime();

    const { result } = renderHook(() =>
      useCalendarForwardBehavior({ from, to })
    );
    expect(result.current.selectedDates.from).toEqual(from);
    expect(result.current.selectedDates.to).toEqual(to);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);

    const nextDate = new Date(2022, 7, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(nextDate);
    expect(result.current.selectedDates.to).toEqual(null);
  });

  test('without dates', () => {
    const { result } = renderHook(() => useCalendarForwardBehavior({}));
    expect(result.current.selectedDates.from).toEqual(null);
    expect(result.current.selectedDates.to).toEqual(null);
    expect(result.current.hasLeftHoverEffect).toEqual(false);
    expect(result.current.hasRightHoverEffect).toEqual(true);

    const nextDate = new Date(2022, 7, 5).getTime();

    act(() => {
      result.current.handleDateChange(nextDate);
    });

    expect(result.current.selectedDates.from).toEqual(nextDate);
    expect(result.current.selectedDates.to).toEqual(null);
  });
});
