import * as React from 'react';
import { useTheme } from 'styled-components';

import { Box, type BoxProps, ButtonGroup } from '@devoinc/genesys-ui';
import { ActionsContainerItem } from './ActionsContainerItem';

export interface ActionsContainerProps extends Omit<BoxProps, 'children'> {
  /** Array of actions to be added to the editor. */
  children?: React.ReactNode | React.ReactNode[];
}

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
      {Array.isArray(children) ? (
        <ButtonGroup>
          {children.map((child, idx) => (
            <ActionsContainerItem key={idx}>{child}</ActionsContainerItem>
          ))}
        </ButtonGroup>
      ) : (
        children
      )}
    </Box>
  );
};
