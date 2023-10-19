import * as React from 'react';

import { StyledContainer, StyledContainerProps } from './StyledContainer';

export interface ContainerProps extends StyledContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  bordered,
  children,
  ...boxProps
}) => {
  return (
    <StyledContainer bordered={bordered} {...boxProps}>
      {children}
    </StyledContainer>
  );
};
