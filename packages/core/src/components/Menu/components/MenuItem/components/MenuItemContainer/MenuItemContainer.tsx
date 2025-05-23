import * as React from 'react';

import {
  IButtonAttrs,
  IDataAttrs,
  IFieldAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILayoutAttrs,
  ILinkAttrs,
  IMouseEventAttrs,
  INavigationAriaAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
} from '../../../../../../declarations';
import {
  StyledMenuItemInner,
  type StyledMenuItemInnerProps,
} from './StyledMenuItemInner';
import { StyledMenuItem } from './StyledMenuItem';
import type { Resolve } from '../../../../../../typeFunctions';

export interface MenuItemContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IDataAttrs,
    IFieldAttrs,
    IGlobalAriaAttrs,
    ITriggerAriaAttrs,
    ILayoutAttrs,
    ILinkAttrs,
    IFocusEventAttrs,
    IMouseEventAttrs,
    INavigationAriaAttrs,
    Pick<IButtonAttrs, 'name' | 'value'> {
  hasExtraLeftSpace?: StyledMenuItemInnerProps['$hasExtraLeftSpace'];
  unlimitedHeight?: StyledMenuItemInnerProps['$unlimitedHeight'];
  state?: StyledMenuItemInnerProps['$state'];
  children?: React.ReactNode;
  isItem?: boolean;
}

export const MenuItemContainer = React.forwardRef<
  HTMLButtonElement,
  Resolve<MenuItemContainerProps>
>(
  (
    {
      children,
      isItem = true,
      hasExtraLeftSpace,
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
