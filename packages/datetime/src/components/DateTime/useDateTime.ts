import * as React from 'react';
import { addMonths, subMonths } from 'date-fns';

export const useDateTime = (initialValue: number | Date) => {
  const [value, setValue] = React.useState(initialValue);

  const onClickNextMonth = React.useCallback(() => {
    setValue((prev) => addMonths(prev, 1).getTime());
  }, []);

  const onClickPrevMonth = React.useCallback(() => {
    setValue((prev) => subMonths(prev, 1).getTime());
  }, []);

  const onChangeMonth = React.useCallback((ts: number) => {
    setValue(ts);
  }, []);

  return {
    value,
    onClickPrevMonth,
    onClickNextMonth,
    onChangeMonth,
  };
};
