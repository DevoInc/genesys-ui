import * as React from 'react';

import type { IHookCommonReturnParams } from './declarations';
import { forwardBehavior } from '../behaviors';

export const useCalendarForward = (
  range: (Date | number)[],
): IHookCommonReturnParams => {
  const [selectedDates, setSelectedDates] = React.useState(range);

  const handleDateChange = (dt: Date | number) => {
    setSelectedDates((prev: (Date | number)[]) => forwardBehavior(prev, dt));
  };

  return {
    selectedDates,
    hasLeftHoverEffect: false,
    hasRightHoverEffect: true,
    handleDateChange,
  };
};
