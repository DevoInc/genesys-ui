import * as React from 'react';

import { Typography } from '../../../Typography';

export interface KeyValueUnitProps {
  children: React.ReactNode;
}

export const KeyValueUnit: React.FC<KeyValueUnitProps> = ({ children }) => (
  <Typography.Caption
    size="xs"
    as="span"
    colorScheme="weakest"
    style="vertical-align: middle; margin-left: 4px;"
  >
    {children}
  </Typography.Caption>
);
