import { getTime, set } from 'date-fns';

import type { TDateRange } from '../../../../declarations';

export const normDay = (value: TDateRange) => {
  if (value[0] && getTime(value[0]) > 0) {
    return getTime(
      set(value[0], { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
    );
  }
  return 0;
};
