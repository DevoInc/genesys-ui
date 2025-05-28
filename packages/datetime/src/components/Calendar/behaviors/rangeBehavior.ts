import { compareDesc, set } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

import type {
  TCalendarDate,
  TCalendarDateRange,
  IEndPointRangeTime,
} from '../../../declarations';

export const rangeBehavior = ({
  range,
  dt,
  tz,
  startRange,
  endRange,
}: {
  range: TCalendarDateRange;
  dt: TCalendarDate;
  tz: string;
  startRange: IEndPointRangeTime;
  endRange: IEndPointRangeTime;
}) =>
  range.length === 1
    ? compareDesc(dt, range[0]) < 0
      ? [
          set(range[0], startRange, { in: tzFn(tz) }).valueOf(),
          set(dt, endRange, { in: tzFn(tz) }).valueOf(),
        ]
      : [
          set(dt, startRange, { in: tzFn(tz) }).valueOf(),
          set(range[0], endRange, { in: tzFn(tz) }).valueOf(),
        ]
    : [dt];
