import * as React from 'react';
import { addYears, clamp, getYear, isWithinInterval, subYears } from 'date-fns';

import { GIAngleLeft, GIAngleRight } from '@devoinc/genesys-icons';
import { HFlex, IconButton, Typography } from '@devoinc/genesys-ui';
import {
  TYearSelectorInlineI18n,
  TYearSelectorInlineSize,
} from './declarations';

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
  /** The size for each prev/next icon button and the year text. */
  size?: TYearSelectorInlineSize;
}

export const YearSelectorInline: React.FC<YearSelectorInlineProps> = ({
  value,
  i18n,
  onChange,
  minDate,
  maxDate,
  size = 'md',
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
      size={size}
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
    <Typography.Paragraph size={size} colorScheme="strong">
      {getYear(value)}
    </Typography.Paragraph>
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
      size={size}
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
