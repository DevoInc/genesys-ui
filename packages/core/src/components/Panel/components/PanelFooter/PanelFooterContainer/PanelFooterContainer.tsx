import * as React from 'react';

import {
  StyledPanelContainerFooter,
  StyledPanelFooterContainerProps,
} from './StyledPanelFooterContainer';

export interface PanelFooterContainerProps
  extends StyledPanelFooterContainerProps {
  /** Footer content */
  children?: React.ReactNode;
}

export const PanelFooterContainer: React.FC<PanelFooterContainerProps> = ({
  hasBoxShadow = false,
  bordered = false,
  hasBackground = false,
  children,
}) => {
  return (
    <StyledPanelContainerFooter
      hasBoxShadow={hasBoxShadow}
      hasBackground={hasBackground}
      bordered={bordered}
    >
      {children}
    </StyledPanelContainerFooter>
  );
};
