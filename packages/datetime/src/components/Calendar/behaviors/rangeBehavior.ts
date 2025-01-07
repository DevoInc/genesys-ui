import { compareDesc } from 'date-fns';

import type { TDate, TDateRange } from '../../../declarations';

export const rangeBehavior = (range: TDateRange, dt: TDate) =>
  range.length === 1
    ? compareDesc(dt, range[0]) < 0
      ? [range[0], dt]
      : [dt, range[0]]
    : [dt];
