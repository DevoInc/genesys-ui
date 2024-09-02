import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledButtonAddon } from './StyledButtonAddon';
import type { IButtonAddon } from './declarations';

export interface ButtonAddonProps<T = Element>
  extends IButtonAddon,
    IStyledPolymorphic,
    IStyledOverloadCss {
  children: React.ReactNode;
  id?: AllHTMLAttributes<T>['id'];
}

export const ButtonAddon: React.FC<ButtonAddonProps> = ({
  as,
  children,
  hasSpace,
  id,
  isDropdown,
  position,
  size = 'md',
  style,
}) => (
  <StyledButtonAddon
    as={as}
    $hasSpace={hasSpace}
    id={id ? `${id}__button-addon` : null}
    $isDropdown={isDropdown}
    $position={position}
    $size={size}
    css={style}
  >
    {children}
  </StyledButtonAddon>
);
