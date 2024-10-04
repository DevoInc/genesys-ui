import * as React from 'react';
import { useTheme } from 'styled-components';

import { GICheckOk, GIExitClose } from '@devoinc/genesys-icons';

import type { TCellRenderer } from '../../declarations';

export const BooleanRenderer: React.FC<TCellRenderer> = ({ value }) => {
  const bool = typeof value === 'string' ? value === 'true' : value;
  const theme = useTheme();
  const iconColor = theme.alias.color.text.body.base;
  return bool ? (
    <GICheckOk
      size={`calc(${theme.alias.size.square.icon.base.lg} - 0.2rem)`}
      color={iconColor}
    />
  ) : (
    <GIExitClose
      size={theme.alias.size.square.icon.base.sm}
      color={iconColor}
    />
  );
};
