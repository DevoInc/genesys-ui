import * as React from 'react';

import {
  StyledPanelHeaderContainer,
  StyledPanelHeaderContainerProps,
} from './StyledPanelHeaderContainer';

export interface PanelHeaderContainerProps
  extends StyledPanelHeaderContainerProps {
  children: React.ReactNode;
}

export const PanelHeaderContainer: React.FC<PanelHeaderContainerProps> = ({
  hasBoxShadow,
  bordered,
  children,
}) => {
  return (
    <StyledPanelHeaderContainer hasBoxShadow={hasBoxShadow} bordered={bordered}>
      {children}
    </StyledPanelHeaderContainer>
  );
};
