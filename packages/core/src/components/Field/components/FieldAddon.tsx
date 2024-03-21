import * as React from 'react';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../declarations';
import type { IField } from '../declarations';
import {
  StyledFieldAddon,
  type StyledFieldAddonProps,
} from './StyledFieldAddon';

export interface FieldAddonProps
  extends IStyledPolymorphic,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    Pick<StyledFieldAddonProps, 'position' | 'size'> {
  children: React.ReactNode;
  /** If the addon belongs to a disabled field */
  disabled?: IField['disabled'];
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
