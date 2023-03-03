import * as React from 'react';

import {
  StyledToolbarGroup,
  StyledToolbarGroupProps,
} from './StyledToolbarGroup';

export interface ToolbarGroupProps extends StyledToolbarGroupProps {
  children?: React.ReactNode;
}

export const ToolbarGroup: React.FC<ToolbarGroupProps> = ({
  children,
  padding,
  zIndex,
}) => (
  <StyledToolbarGroup padding={padding} zIndex={zIndex}>
    {children}
  </StyledToolbarGroup>
);
