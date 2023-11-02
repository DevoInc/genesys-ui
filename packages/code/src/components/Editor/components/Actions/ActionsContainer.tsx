import * as React from 'react';
import { StyledActionsContainer } from './StyledActionsContainer';
import { BoxProps } from '@devoinc/genesys-ui';

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
