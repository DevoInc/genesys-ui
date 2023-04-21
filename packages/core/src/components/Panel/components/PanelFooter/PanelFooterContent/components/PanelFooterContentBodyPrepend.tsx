import * as React from 'react';

import {
  StyledPanelFooterContentPrepend,
  StyledPanelFooterContentPrependProps,
} from './StyledPanelFooterContentBodyPrepend';

export interface PanelFooterContentBodyPrependProps
  extends StyledPanelFooterContentPrependProps {
  children: React.ReactNode;
}

export const PanelFooterContentBodyPrepend: React.FC<
  PanelFooterContentBodyPrependProps
> = ({ children, size }) => (
  <StyledPanelFooterContentPrepend size={size}>
    {children}
  </StyledPanelFooterContentPrepend>
);
