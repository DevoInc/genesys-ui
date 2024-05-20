import * as React from 'react';
import { addMonths, set, subMonths } from 'date-fns';

export const useDateTime = ({ value: outterValue }) => {
  const [value, setValue] = React.useState<Date | number>(outterValue);

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
