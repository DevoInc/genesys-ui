import * as React from 'react';
import {
  set,
  getMinutes,
  getMilliseconds,
  getSeconds,
  getHours,
} from 'date-fns';

import { TDateTimeRangeSource } from '../declarations';
import {
  DATE_TIME_RANGE_SOURCE_CAL_LEFT,
  DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
  DATE_TIME_RANGE_SOURCE_TIME_LEFT,
  DATE_TIME_RANGE_SOURCE_TIME_RIGHT,
} from '../constants';

export const useTimeRangePreserve = (
  onChange: (value: (number | Date)[]) => void,
) => {
  const timeRef = React.useRef<(number | Date)[]>();

  const onChangeRange = React.useCallback(
    (range: (number | Date)[], source: TDateTimeRangeSource) => {
      const newRange = [...range];
      if (
        (source === DATE_TIME_RANGE_SOURCE_TIME_RIGHT ||
          source === DATE_TIME_RANGE_SOURCE_TIME_LEFT) &&
        newRange.length >= 2
      ) {
        timeRef.current = newRange;
      } else if (
        (source === DATE_TIME_RANGE_SOURCE_CAL_RIGHT ||
          source === DATE_TIME_RANGE_SOURCE_CAL_LEFT) &&
        newRange.length >= 2 &&
        timeRef.current
      ) {
        newRange[0] = set(newRange[0], {
          hours: getHours(timeRef.current[0]),
          minutes: getMinutes(timeRef.current[0]),
          seconds: getSeconds(timeRef.current[0]),
          milliseconds: getMilliseconds(timeRef.current[0]),
        });
        newRange[1] = set(newRange[1], {
          hours: getHours(timeRef.current[1]),
          minutes: getMinutes(timeRef.current[1]),
          seconds: getSeconds(timeRef.current[1]),
          milliseconds: getMilliseconds(timeRef.current[1]),
        });
      }
      onChange(newRange);
    },
    [onChange],
  );

  return {
    onChangeRange,
  };
};
