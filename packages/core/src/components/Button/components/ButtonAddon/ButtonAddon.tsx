import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { StyledButtonAddon, StyledButtonAddonProps } from './StyledButtonAddon';

export interface ButtonAddonProps<T = Element>
  extends StyledButtonAddonProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
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
  styles,
}) => (
  <StyledButtonAddon
    as={as}
    hasSpace={hasSpace}
    id={id ? `${id}__button-addon` : null}
    isDropdown={isDropdown}
    position={position}
    size={size}
    css={styles}
  >
    {children}
  </StyledButtonAddon>
);
