import * as React from 'react';
import { useTheme } from 'styled-components';

import { GICheckOk, GIExitClose } from '@devoinc/genesys-icons';

import type { TCellRenderer } from '../../declarations';

export const BooleanRenderer: React.FC<TCellRenderer> = ({ value }) => {
  const bool = typeof value === 'string' ? value === 'true' : value;
  const cmpTokens = useTheme().cmp.table.cellBoolean;
  const iconColor = cmpTokens.color.text;

  return bool ? (
    <GICheckOk size={cmpTokens.size.square.true} color={iconColor} />
  ) : (
    <GIExitClose size={cmpTokens.size.square.false} color={iconColor} />
  );
};
