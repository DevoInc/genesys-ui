import * as React from 'react';
import { StyledFieldAddon, StyledFieldAddonProps } from './StyledFieldAddon';
import { StyledOverloadCssProps } from '../../../declarations';

export interface FieldAddonProps
  extends StyledFieldAddonProps,
    StyledOverloadCssProps {
  children: React.ReactNode;
  /** If the addon belongs to a disabled field */
  disabled?: boolean;
}

export const FieldAddon: React.FC<FieldAddonProps> = ({
  children,
  position = 'left',
  disabled,
  size = 'md',
  styles,
  ...styledProps
}) => (
  <StyledFieldAddon
    {...styledProps}
    $disabled={disabled}
    position={position}
    size={size}
    css={styles}
  >
    {children}
  </StyledFieldAddon>
);
