import * as React from 'react';

import type { IHookCommonReturnParams } from './declarations';
import { rangeBehavior } from '../behaviors';
import type {
  IEndPointRangeTime,
  TCalendarDate,
  TCalendarDateRange,
} from '../../../declarations';

export const useCalendarRange = (
  initialRange: TCalendarDateRange = [],
  tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone,
  startRange: IEndPointRangeTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  },
  endRange: IEndPointRangeTime = {
    hours: 23,
    minutes: 59,
    seconds: 59,
    milliseconds: 999,
  },
): IHookCommonReturnParams => {
  const [range, setRange] = React.useState(initialRange);

  const handleNewDate = (newDate: TCalendarDate) => {
    setRange((prev) =>
      rangeBehavior({
        range: prev,
        ts: newDate as number,
        tz,
        startRange,
        endRange,
      }),
    );
  };

  return {
    range,
    handleNewDate,
    hasLeftHoverEffect: range.length === 1,
    hasRightHoverEffect: range.length === 1,
  };
};
