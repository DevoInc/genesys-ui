import * as React from 'react';
import {
  eachMonthOfInterval,
  format,
  getMonth,
  isWithinInterval,
  setMonth,
} from 'date-fns';

import { Button, TButtonSize } from '@devoinc/genesys-ui';

export interface MonthSelectorProps {
  /** Function called when change the current month date. */
  onChange?: (ts: number) => void;
  /** Value. One of `number` or `Date`. */
  value?: Date | number;
  /** The latest month to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest month to accept. One of `number` or `Date`. */
  minDate?: number | Date;
  /** The size for each selection button of the list. */
  size?: TButtonSize;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  value,
  minDate,
  maxDate,
  onChange,
  size = 'sm',
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
      size={size}
    >
      {format(month, 'MMM')}
    </Button>
  ));
