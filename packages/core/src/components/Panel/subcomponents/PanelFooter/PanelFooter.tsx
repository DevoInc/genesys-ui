import * as React from 'react';

import { StyledPanelFooter, StyledPanelFooterProps } from './StyledPanelFooter';

export interface PanelFooterProps extends StyledPanelFooterProps {
  children?: React.ReactNode;
}

export const PanelFooter: React.FC<PanelFooterProps> = ({
  hasBoxShadow,
  bordered,
  hasBackground,
  children,
}) => {
  return (
    <StyledPanelFooter
      hasBoxShadow={hasBoxShadow}
      hasBackground={hasBackground}
      bordered={bordered}
    >
      {children}
    </StyledPanelFooter>
  );
};
