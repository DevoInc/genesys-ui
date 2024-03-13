import { type DefaultTheme } from 'styled-components';

import type { TFieldSize } from '@devoinc/genesys-ui';

export const getInputWidth = ({
  hasMillis,
  hasSeconds,
  hasTime,
  size,
  theme,
}: {
  hasMillis: boolean;
  hasSeconds: boolean;
  hasTime: boolean;
  size: TFieldSize;
  theme: DefaultTheme;
}) =>
  theme.cmp.dateTimeRangeControl.input.size.width[
    hasMillis
      ? 'withMillis'
      : hasSeconds
        ? 'withSeconds'
        : hasTime
          ? 'withTime'
          : 'base'
  ][size];
