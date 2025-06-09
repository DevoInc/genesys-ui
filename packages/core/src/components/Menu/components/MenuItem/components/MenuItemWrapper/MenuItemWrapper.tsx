import * as React from 'react';

import type { IMenuItem, IMenuItemBasic } from '../../declarations';
import { StyledMenuItemWrapper } from './StyledMenuItemWrapper';

export interface MenuItemWrapperProps
  extends Pick<IMenuItemBasic, 'as' | 'style'>,
    Pick<IMenuItem, 'children' | 'quiet' | 'state'> {}

export const MenuItemWrapper: React.FC<MenuItemWrapperProps> = ({
  as = 'li',
  children,
  quiet,
  state,
  style,
}) => (
  <StyledMenuItemWrapper
    as={as}
    role="presentation"
    $state={state}
    $quiet={quiet}
    css={style}
  >
    {children}
  </StyledMenuItemWrapper>
);
