import * as React from 'react';

import type { IHookCommonReturnParams } from './declarations';
import { rangeBehavior } from '../behaviors';

export const useCalendarRange = (
  initialRange: (Date | number)[] = [],
): IHookCommonReturnParams => {
  const [range, setRange] = React.useState(initialRange);

  const handleNewDate = (dt: number | Date) => {
    setRange((prev) => rangeBehavior(prev, dt));
  };

  return {
    range,
    handleNewDate,
    hasLeftHoverEffect: range.length === 1,
    hasRightHoverEffect: range.length === 1,
  };
};
