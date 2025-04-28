import * as React from 'react';

import { Box, type BoxProps } from '@devoinc/genesys-ui';

export interface ActionsContainerItemProps
  extends Omit<BoxProps, 'elevation'> {}

export const ActionsContainerItem: React.FC<ActionsContainerItemProps> = ({
  children,
  ...restBoxProps
}) => (
  <Box {...restBoxProps} elevation="activated">
    {children}
  </Box>
);
