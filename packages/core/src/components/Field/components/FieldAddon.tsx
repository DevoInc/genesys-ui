import * as React from 'react';
import { StyledFieldAddon, StyledFieldAddonProps } from './StyledFieldAddon';

export interface FieldAddonProps extends StyledFieldAddonProps {
  children: React.ReactNode;
}

export const FieldAddon: React.FC<FieldAddonProps> = ({
  children,
  position = 'left',
  size = 'md',
  ...styledProps
}) => (
  <StyledFieldAddon {...styledProps} position={position} size={size}>
    {children}
  </StyledFieldAddon>
);
