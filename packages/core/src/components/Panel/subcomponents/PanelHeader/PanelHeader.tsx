import * as React from 'react';

import { StyledPanelHeader, StyledPanelHeaderProps } from './StyledPanelHeader';

export interface PanelHeaderProps extends StyledPanelHeaderProps {
  children: React.ReactNode;
}

export const PanelHeader: React.FC<PanelHeaderProps> = ({
  hasBoxShadow,
  bordered,
  children,
}) => {
  return (
    <StyledPanelHeader hasBoxShadow={hasBoxShadow} bordered={bordered}>
      {children}
    </StyledPanelHeader>
  );
};
