import * as React from 'react';
import { endOfMonth, startOfMonth, subMonths } from 'date-fns';

import { Grid } from '@devoinc/genesys-ui';

import {
  defaultYearSelectorInlineI18n,
  type TYearSelectorInlineI18n,
  YearSelectorInline,
} from '../YearSelectorInline';
import { useMergeI18n } from '../../hooks';
import { MonthSelector } from '../MonthSelector';

export interface MonthPickerProps {
  /** Value. One of `number` or `Date`. */
  value?: Date | number;
  /** Internacionalization object */
  i18n?: TYearSelectorInlineI18n;
  /** Function called when change the currently month date. */
  onChange?: (ts: number) => void;
  /** The latest month to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest month to accept. One of `number` or `Date`. */
  minDate?: number | Date;
}

const nowDate = new Date();

export const MonthPicker: React.FC<MonthPickerProps> = ({
  value,
  i18n: userI18n = defaultYearSelectorInlineI18n,
  onChange = () => null,
  maxDate = endOfMonth(nowDate),
  minDate = startOfMonth(subMonths(nowDate, 24)),
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultYearSelectorInlineI18n,
  ) as TYearSelectorInlineI18n;
  return (
    <Grid gridTemplateColumns={'1fr 1fr 1fr'} gap={'1rem'}>
      <Grid.Item gridColumnStart={1} gridColumnEnd={4}>
        <YearSelectorInline
          value={value}
          i18n={i18n}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          minDate={minDate}
          maxDate={maxDate}
        />
      </Grid.Item>
      <MonthSelector
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(newValue) => {
          onChange(newValue);
        }}
      />
    </Grid>
  );
};
