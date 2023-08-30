import * as React from 'react';
import { addMonths, subMonths, set } from 'date-fns';

export const useDateActions = (to: number | Date) => {
  const [date, setDate] = React.useState(new Date(to));

  const onChangeMonthFrom = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const elements = event.target.value.split('-').map(Number);
      setDate((oldDate) =>
        subMonths(
          set(oldDate, {
            year: elements[0],
            month: elements[1],
          }),
          1,
        ),
      );
    },
    [],
  );

  const onChangeMonthTo = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const elements = event.target.value.split('-').map(Number);
      setDate((oldDate) =>
        set(oldDate, {
          year: elements[0],
          month: elements[1],
        }),
      );
    },
    [],
  );

  const onPrevMonthClick = React.useCallback(() => {
    setDate((oldDate) => subMonths(oldDate, 1));
  }, []);

  const onNextMonthClick = React.useCallback(() => {
    setDate((oldDate) => addMonths(oldDate, 1));
  }, []);

  return {
    date,
    onChangeMonthFrom,
    onChangeMonthTo,
    onPrevMonthClick,
    onNextMonthClick,
  };
};
