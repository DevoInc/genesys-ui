import { compareDesc } from 'date-fns';

export const rangeBehavior = (
  range: (number | Date)[],
  dt: number | Date,
) =>
  range.length === 1
    ? compareDesc(dt, range[0]) < 0
      ? [range[0], dt]
      : [dt, range[0]]
    : [dt];
