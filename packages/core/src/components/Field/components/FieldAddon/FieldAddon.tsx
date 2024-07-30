import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { IField, TFieldAddonPosition } from '../../declarations';
import { StyledFieldAddon } from './StyledFieldAddon';

export interface FieldAddonProps
  extends IStyledPolymorphic,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    Pick<IField, 'size'> {
  children: React.ReactNode;
  /** If the addon belongs to a disabled field */
  disabled?: IField['disabled'];
  /** The position on the form field */
  position?: TFieldAddonPosition;
}

export const FieldAddon: React.FC<FieldAddonProps> = ({
  children,
  position = 'left',
  disabled,
  size = 'md',
  style,
  ...styledProps
}) => (
  <StyledFieldAddon
    {...styledProps}
    $disabled={disabled}
    $position={position}
    size={size}
    css={style}
  >
    {children}
  </StyledFieldAddon>
);
