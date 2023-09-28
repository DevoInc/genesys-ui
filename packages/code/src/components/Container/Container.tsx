import * as React from 'react';
import { Box, BoxProps } from '@devoinc/genesys-ui';

export interface ActionsContainerProps extends BoxProps {
  children: React.ReactNode;
}

export const Container: React.FC<ActionsContainerProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Box position="relative" width="100%" {...boxProps}>
      {children}
    </Box>
  );
};
