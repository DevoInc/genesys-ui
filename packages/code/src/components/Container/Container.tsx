import * as React from 'react';
import { Box, BoxProps } from '@devoinc/genesys-ui';

export interface ContainerProps extends BoxProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Box position="relative" width="100%" height="100%" {...boxProps}>
      {children}
    </Box>
  );
};
