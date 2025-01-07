import { compareDesc } from 'date-fns';

import type { TCalendarDate, TCalendarDateRange } from '../../../declarations';

export const rangeBehavior = (range: TCalendarDateRange, dt: TCalendarDate) =>
  range.length === 1
    ? compareDesc(dt, range[0]) < 0
      ? [range[0], dt]
      : [dt, range[0]]
    : [dt];
