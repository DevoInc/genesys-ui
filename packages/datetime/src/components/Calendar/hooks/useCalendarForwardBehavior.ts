import * as React from 'react';
import { startOfDay } from 'date-fns';
import type { HookCommonReturnParams } from './declarations';

export interface useCalendarForwardBehaviorProps {
  /** Initial start timestamp date */
  from?: number;
  /** Initial end timestamp date */
  to?: number;
}

export const useCalendarForwardBehavior = ({
  from: defaultFrom = null,
  to: defaultTo = null,
}: useCalendarForwardBehaviorProps): HookCommonReturnParams => {
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);

  React.useEffect(() => {
    setFrom(defaultFrom ? startOfDay(defaultFrom).getTime() : null);
    setTo(defaultTo ? startOfDay(defaultTo).getTime() : null);
  }, [defaultFrom, defaultTo]);

  const handleDateChange = (ts) => {
    if (from) {
      if (ts < from) {
        setFrom(ts);
        setTo(null);
      } else {
        setTo(ts);
      }
    } else {
      setFrom(ts);
    }
  };

  return {
    selectedDates: { from, to },
    hasLeftHoverEffect: false,
    hasRightHoverEffect: true,
    handleDateChange,
  };
};
