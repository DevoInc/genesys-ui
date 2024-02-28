import * as React from 'react';

import { type BoxProps } from '@devoinc/genesys-ui';
import { StyledActionsContainer } from './StyledActionsContainer';

export interface ActionsContainerProps extends BoxProps {
  children: React.ReactNode;
}

export const ActionsContainer: React.FC<ActionsContainerProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <StyledActionsContainer {...boxProps}>{children}</StyledActionsContainer>
  );
};
