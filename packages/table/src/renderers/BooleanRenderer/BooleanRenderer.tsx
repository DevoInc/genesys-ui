import * as React from 'react';
import { useTheme } from 'styled-components';

import { GICheckOk, GIExitClose } from '@devoinc/genesys-icons';

import { CellRendererProps } from '../declarations';

export const BooleanRenderer: React.FC<CellRendererProps> = ({ value }) => {
  const bool = typeof value === 'string' ? value === 'true' : value;
  const theme = useTheme();
  const iconColor = theme.alias.color.text.body.base;
  return bool ? (
    <GICheckOk size="22" color={iconColor} />
  ) : (
    <GIExitClose size="18" color={iconColor} />
  );
};
