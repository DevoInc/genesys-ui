import * as React from 'react';
import { startOfDay } from 'date-fns';
import type { HookCommonReturnParams } from './declarations';

export interface useCalendarForwardBackwardBehaviorProps {
  /** Initial start timestamp date */
  from?: number;
  /** Initial end timestamp date */
  to?: number;
  /** Initial behaviour */
  initialBehavior?: 'backward' | 'forward';
}

export const useCalendarForwardBackwardBehavior = ({
  from: defaultFrom = null,
  to: defaultTo = null,
  initialBehavior: behavior = 'backward',
}: useCalendarForwardBackwardBehaviorProps): HookCommonReturnParams => {
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);
  const [reverse, setReverse] = React.useState(behavior === 'backward');

  React.useEffect(() => {
    setFrom(defaultFrom ? startOfDay(defaultFrom).getTime() : null);
    setTo(defaultTo ? startOfDay(defaultTo).getTime() : null);
  }, [defaultFrom, defaultTo]);

  const handleDateChange = React.useCallback(
    (ts: number) => {
      if (from) {
        if (to) {
          if (reverse) {
            if (ts > to) {
              setFrom(ts);
              setTo(null);
            } else if (ts > from) {
              setTo(ts);
            } else {
              setFrom(ts);
            }
          } else if (ts < from) {
              setFrom(ts);
              setTo(null);
            } else {
              setTo(ts);
            }
        } else if (ts <= from) {
            setTo(from);
            setFrom(ts);
          } else {
            setTo(ts);
          }
      } else {
        setFrom(ts);
      }
      setReverse(!reverse);
    },
    [from, reverse, to],
  );

  return {
    selectedDates: { from, to },
    hasLeftHoverEffect: reverse,
    hasRightHoverEffect: !reverse,
    handleDateChange,
  };
};
