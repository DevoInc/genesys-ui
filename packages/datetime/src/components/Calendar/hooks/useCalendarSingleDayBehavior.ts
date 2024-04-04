import * as React from 'react';
import { startOfDay } from 'date-fns';
import type { IHookCommonReturnParams } from './declarations';

export interface IUseCalendarSingleDayBehavior {
  /** Initial timestamp date */
  day?: number;
}

export const useCalendarSingleDayBehavior = ({
  day: defaultDay = null,
}: IUseCalendarSingleDayBehavior): IHookCommonReturnParams => {
  const [day, setDay] = React.useState(null);

  React.useEffect(() => {
    setDay(defaultDay ? startOfDay(defaultDay).getTime() : null);
  }, [defaultDay]);

  const handleDateChange = React.useCallback((ts) => {
    setDay(ts);
  }, []);

  return {
    selectedDates: {
      from: day,
      to: day,
    },
    hasLeftHoverEffect: false,
    hasRightHoverEffect: false,
    handleDateChange,
  };
};
