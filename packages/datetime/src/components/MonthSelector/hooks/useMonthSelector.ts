import * as React from 'react';
import { addMonths, subMonths } from 'date-fns';

export const useMonthSelector = ({
  monthDate = new Date(),
  onChangeMonthDate = () => null,
}: {
  monthDate: number | Date;
  onChangeMonthDate: (dt: number | Date) => void;
}) => {
  const onChangeMonth = React.useCallback(
    (dt: number | Date) => {
      onChangeMonthDate(dt);
    },
    [onChangeMonthDate],
  );

  const onClickPrevMonth = React.useCallback(() => {
    onChangeMonthDate(subMonths(monthDate, 1));
  }, [monthDate, onChangeMonthDate]);

  const onClickNextMonth = React.useCallback(() => {
    onChangeMonthDate(addMonths(monthDate, 1));
  }, [monthDate, onChangeMonthDate]);

  return { onChangeMonth, onClickPrevMonth, onClickNextMonth };
};
