import * as React from 'react';

import type { IHookCommonReturnParams } from './declarations';
import { rangeBehavior } from '../behaviors';
import type { TCalendarDate, TCalendarDateRange } from '../../../declarations';

export const useCalendarRange = (
  initialRange: TCalendarDateRange = [],
): IHookCommonReturnParams => {
  const [range, setRange] = React.useState(initialRange);

  const handleNewDate = (newDate: TCalendarDate) => {
    setRange((prev) => rangeBehavior(prev, newDate));
  };

  return {
    range,
    handleNewDate,
    hasLeftHoverEffect: range.length === 1,
    hasRightHoverEffect: range.length === 1,
  };
};
