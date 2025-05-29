import * as React from 'react';

import type { IMenuItem, IMenuItemBasic } from '../../declarations';
import type { Resolve } from '../../../../../../typeFunctions';
import { StyledMenuItemInner } from './StyledMenuItemInner';
import { StyledMenuItem } from './StyledMenuItem';

export interface MenuItemContainerProps
  extends IMenuItemBasic,
    Pick<
      IMenuItem,
      | 'children'
      | 'hasExtraLeftSpace'
      | 'isItem'
      | 'linkStyled'
      | 'quiet'
      | 'state'
      | 'unlimitedHeight'
    > {}

export const MenuItemContainer = React.forwardRef<
  HTMLButtonElement,
  Resolve<MenuItemContainerProps>
>(
  (
    {
      children,
      isItem = true,
      hasExtraLeftSpace,
      linkStyled,
      quiet,
      unlimitedHeight,
      state,
      style,
      tooltip,
      ...restMenuItemContainerProps
    },
    ref,
  ) => {
    const innerContent = (
      <StyledMenuItemInner
        {...restMenuItemContainerProps}
        ref={ref}
        $hasExtraLeftSpace={hasExtraLeftSpace}
        $linkStyled={linkStyled}
        $quiet={quiet}
        $unlimitedHeight={unlimitedHeight}
        $state={state}
        title={tooltip}
        css={style}
      >
        {children}
      </StyledMenuItemInner>
    );
    return isItem ? (
      <StyledMenuItem>{innerContent}</StyledMenuItem>
    ) : (
      innerContent
    );
  },
);
