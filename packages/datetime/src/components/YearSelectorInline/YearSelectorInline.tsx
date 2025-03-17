import * as React from 'react';
import { addYears, clamp, getYear, isWithinInterval, subYears } from 'date-fns';

import { GIAngleLeft, GIAngleRight } from '@devoinc/genesys-icons';
import { HFlex, IconButton } from '@devoinc/genesys-ui';
import type { TYearSelectorInlineI18n } from './declarations';

export interface YearSelectorInlineProps {
  /** Value. One of `number` or `Date`. */
  value?: Date | number;
  /** The latest month to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest month to accept. One of `number` or `Date`. */
  minDate?: number | Date;
  /** Function called when change the currently month date. */
  onChange?: (ts: number) => void;
  /** Internacionalization object */
  i18n?: TYearSelectorInlineI18n;
}

export const YearSelectorInline: React.FC<YearSelectorInlineProps> = ({
  value,
  i18n,
  onChange,
  minDate,
  maxDate,
}) => (
  <HFlex justifyContent="center" spacing="cmp-sm">
    <IconButton
      aria-label={i18n.prevYear}
      colorScheme={'quiet'}
      hasBoldIcon
      icon={<GIAngleLeft />}
      onClick={() => {
        onChange(
          clamp(subYears(value, 1), { start: minDate, end: maxDate }).valueOf(),
        );
      }}
      size={'md'}
      state={
        isWithinInterval(
          clamp(subYears(value, 1), { start: minDate, end: maxDate }),
          {
            start: minDate,
            end: maxDate,
          },
        )
          ? 'enabled'
          : 'disabled'
      }
      tooltip={i18n.prevYear}
    />
    {getYear(value)}
    <IconButton
      aria-label={i18n.nextYear}
      colorScheme={'quiet'}
      hasBoldIcon
      icon={<GIAngleRight />}
      onClick={() => {
        onChange(
          clamp(addYears(value, 1), { start: minDate, end: maxDate }).valueOf(),
        );
      }}
      size={'md'}
      state={
        isWithinInterval(
          clamp(addYears(value, 1), { start: minDate, end: maxDate }),
          {
            start: minDate,
            end: maxDate,
          },
        )
          ? 'enabled'
          : 'disabled'
      }
      tooltip={i18n.nextYear}
    />
  </HFlex>
);
