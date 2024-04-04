import * as React from 'react';
import { useTheme } from 'styled-components';

import { Box, type BoxProps } from '@devoinc/genesys-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActionsContainerProps extends BoxProps {}

export const ActionsContainer: React.FC<ActionsContainerProps> = ({
  children,
  position = 'absolute',
  positionBottom,
  positionRight,
  zIndex = 1,
  ...restBoxProps
}) => {
  const scrollbarsSize = useTheme().alias.space.cmp.sm;
  return (
    <Box
      {...restBoxProps}
      position={position}
      zIndex={zIndex}
      positionBottom={positionBottom || scrollbarsSize}
      positionRight={positionRight || scrollbarsSize}
    >
      {children}
    </Box>
  );
};
