import * as React from 'react';
import { addMonths, subMonths } from 'date-fns';

export const useMonthSelectorRange = ({
  monthDate = new Date(),
  onChangeMonthDate = () => null,
}: {
  monthDate: number | Date;
  onChangeMonthDate: (dt: number | Date) => void;
}) => {
  const onChangeMonthLeft = React.useCallback(
    (dt: number | Date) => {
      onChangeMonthDate(dt);
    },
    [onChangeMonthDate],
  );

  const onChangeMonthRight = React.useCallback(
    (dt: number | Date) => {
      onChangeMonthDate(subMonths(dt, 1));
    },
    [onChangeMonthDate],
  );

  const onClickPrevMonth = React.useCallback(() => {
    onChangeMonthDate(subMonths(monthDate, 1));
  }, [monthDate, onChangeMonthDate]);

  const onClickNextMonth = React.useCallback(() => {
    onChangeMonthDate(addMonths(monthDate, 1));
  }, [monthDate, onChangeMonthDate]);

  return {
    onChangeMonthLeft,
    onChangeMonthRight,
    onClickPrevMonth,
    onClickNextMonth,
  };
};
