import * as React from 'react';

import { Typography } from '../../..';

import {
  StyledPanelBodyContainer,
  StyledPanelBodyContainerProps,
} from './StyledPanelBodyContainer';

export interface PanelBodyContainerProps extends StyledPanelBodyContainerProps {
  children?: React.ReactNode;
  panelBodyRef?: (node: HTMLDivElement) => void;
}

export const PanelBodyContainer: React.FC<PanelBodyContainerProps> = ({
  children,
  bodySettings,
  hasScroll,
  panelBodyRef,
  size = 'md',
}) => (
  <StyledPanelBodyContainer
    bodySettings={bodySettings}
    hasScroll={hasScroll}
    ref={panelBodyRef}
    size={size}
  >
    {typeof children === 'string' ? (
      <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
    ) : (
      children
    )}
  </StyledPanelBodyContainer>
);
