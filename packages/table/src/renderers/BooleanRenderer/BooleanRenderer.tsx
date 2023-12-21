import * as React from 'react';

import { Icon } from '@devoinc/genesys-ui';
import { GICheckOk, GIExitClose } from '@devoinc/genesys-icons';

import { CellRendererProps } from '../declarations';

export const BooleanRenderer: React.FC<CellRendererProps> = ({ value }) => {
  const bool = typeof value === 'string' ? value === 'true' : value;
  return bool ? (
    <Icon>
      <GICheckOk />
    </Icon>
  ) : (
    <Icon>
      <GIExitClose />
    </Icon>
  );
};
