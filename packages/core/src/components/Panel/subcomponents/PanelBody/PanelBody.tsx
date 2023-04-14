import * as React from 'react';

import { Typography } from '../../../';

import { StyledPanelContent, StyledPanelContentProps } from './StyledPanelBody';

export interface PanelBodyProps extends StyledPanelContentProps {
  children?: React.ReactNode;
  panelBodyRef?: React.RefObject<HTMLDivElement>;
}

export const PanelBody: React.FC<PanelBodyProps> = ({
  children,
  bodySettings,
  hasScroll,
  panelBodyRef,
  size = 'md',
}) => (
  <StyledPanelContent
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
  </StyledPanelContent>
);
