import * as React from 'react';
import { eachYearOfInterval, getYear, setYear } from 'date-fns';

import { Button } from '@devoinc/genesys-ui';

export interface YearSelectorProps {
  /** The latest month to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest month to accept. One of `number` or `Date`. */
  minDate?: number | Date;
  /** Value. One of `number` or `Date`. */
  value?: Date | number;
  /** Function called when change the currently month date. */
  onChange?: (ts: number) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({
  minDate,
  maxDate,
  value,
  onChange,
}) =>
  eachYearOfInterval({ start: minDate, end: maxDate })
    .map((x) => x.getFullYear())
    .reverse()
    .map((year) => (
      <Button
        colorScheme={'quiet'}
        state={getYear(value) === year ? 'selected' : 'enabled'}
        key={year}
        onClick={() => {
          onChange(setYear(value, year).valueOf());
        }}
      >
        {year}
      </Button>
    ));
