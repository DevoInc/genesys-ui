import * as React from 'react';

import type { IMenuItem, IMenuItemBasic } from '../../declarations';
import type { Resolve } from '../../../../../../typeFunctions';
import { StyledMenuItemInner } from './StyledMenuItemInner';

export interface MenuItemInnerProps
  extends IMenuItemBasic,
    Pick<
      IMenuItem,
      | 'children'
      | 'hasExtraLeftSpace'
      | 'linkStyled'
      | 'state'
      | 'unlimitedHeight'
    > {}

export const MenuItemInner = React.forwardRef<
  HTMLButtonElement,
  Resolve<MenuItemInnerProps>
>(
  (
    {
      children,
      hasExtraLeftSpace,
      linkStyled,
      unlimitedHeight,
      state,
      style,
      tooltip,
      ...restMenuItemInnerProps
    },
    ref,
  ) => {
    return (
      <StyledMenuItemInner
        {...restMenuItemInnerProps}
        ref={ref}
        $hasExtraLeftSpace={hasExtraLeftSpace}
        $linkStyled={linkStyled}
        $unlimitedHeight={unlimitedHeight}
        $state={state}
        title={tooltip}
        css={style}
      >
        {children}
      </StyledMenuItemInner>
    );
  },
);
