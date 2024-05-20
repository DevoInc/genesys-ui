import * as React from 'react';

import type { IHookCommonReturnParams } from './declarations';
import { forwardBackwardBehavior } from '../behaviors';

export const useCalendarForwardBackward = (
  range: (Date | number)[] = [],
  behavior: 'backward' | 'forward' = 'backward',
): IHookCommonReturnParams => {
  const [{ selectedDates, reverse }, setState] = React.useState({
    selectedDates: range,
    reverse: behavior === 'backward',
  });

  const handleDateChange = React.useCallback((dt: number | Date) => {
    setState((prev) => {
      const newRange = forwardBackwardBehavior(
        prev.selectedDates,
        dt,
        prev.reverse,
      );
      return { selectedDates: newRange, reverse: !prev.reverse };
    });
  }, []);

  return {
    selectedDates,
    hasLeftHoverEffect: reverse,
    hasRightHoverEffect: !reverse,
    handleDateChange,
  };
};
