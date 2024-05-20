import { compareDesc } from 'date-fns';

export const forwardBackwardBehavior = (
  range: (number | Date)[],
  dt: number | Date,
  reverse: boolean,
) => {
  if (range.length === 0) {
    return [dt];
  }

  if (range.length === 1) {
    return compareDesc(dt, range[0]) >= 0 ? [dt, range[1]] : [range[0], dt];
  }

  if (reverse) {
    if (dt > range[1]) {
      return [dt];
    } else if (dt > range[0]) {
      return [0, dt];
    } else {
      return [dt, range[1]];
    }
  } else {
    if (dt < range[0]) {
      return [dt];
    } else {
      return [range[0], dt];
    }
  }
};
