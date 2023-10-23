import * as React from 'react';

import { StyledContainer, StyledContainerProps } from './StyledContainer';

export interface ContainerProps extends StyledContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  bordered,
  readOnly,
  children,
  ...boxProps
}) => {
  return (
    <StyledContainer bordered={bordered} readOnly={readOnly} {...boxProps}>
      {children}
    </StyledContainer>
  );
};
