import * as React from 'react';
import {
  eachMonthOfInterval,
  format,
  getMonth,
  isWithinInterval,
  setMonth,
} from 'date-fns';

import { Button } from '@devoinc/genesys-ui';

export interface MonthSelectorProps {
  /** Function called when change the currently month date. */
  onChange?: (ts: number) => void;
  /** Value. One of `number` or `Date`. */
  value?: Date | number;
  /** The latest month to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest month to accept. One of `number` or `Date`. */
  minDate?: number | Date;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  value,
  minDate,
  maxDate,
  onChange,
}) =>
  eachMonthOfInterval({
    start: setMonth(value, 0),
    end: setMonth(value, 11),
  }).map((month) => (
    <Button
      colorScheme={'quiet'}
      state={
        !isWithinInterval(month, {
          start: minDate,
          end: maxDate,
        })
          ? 'disabled'
          : getMonth(value) === month.getMonth()
            ? 'selected'
            : 'enabled'
      }
      key={month.getMonth()}
      onClick={() => {
        onChange(month.valueOf());
      }}
    >
      {format(month, 'MMM')}
    </Button>
  ));
