import { set, isAfter } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

import type { IEndPointRangeTime } from '../../../declarations';

export const rangeBehavior = ({
  range,
  ts,
  tz,
  startRange,
  endRange,
}: {
  range: (number | Date)[];
  ts: number;
  tz: string;
  startRange: IEndPointRangeTime;
  endRange: IEndPointRangeTime;
}) =>
  range.length === 1
    ? isAfter(ts, range[0])
      ? [
          set(range[0], startRange, { in: tzFn(tz) }).valueOf(),
          set(ts, endRange, { in: tzFn(tz) }).valueOf(),
        ]
      : [
          set(ts, startRange, { in: tzFn(tz) }).valueOf(),
          set(range[0], endRange, { in: tzFn(tz) }).valueOf(),
        ]
    : [ts];
