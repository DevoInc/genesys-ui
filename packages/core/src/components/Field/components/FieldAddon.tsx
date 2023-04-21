import * as React from 'react';
import { StyledFieldAddon, StyledFieldAddonProps } from './StyledFieldAddon';

export interface FieldAddonProps extends StyledFieldAddonProps {
  children: React.ReactNode;
  /** If the addon belongs to a disabled field */
  disabled?: boolean;
}

export const FieldAddon: React.FC<FieldAddonProps> = ({
  children,
  position = 'left',
  disabled,
  size = 'md',
  ...styledProps
}) => (
  <StyledFieldAddon
    {...styledProps}
    $disabled={disabled}
    position={position}
    size={size}
  >
    {children}
  </StyledFieldAddon>
);
