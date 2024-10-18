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
    Pick<IButtonAttrs, 'name' | 'value'>,
    StyledMenuItemInnerProps {
  children?: React.ReactNode;
  isItem?: boolean;
}

export const MenuItemContainer = React.forwardRef<
  HTMLButtonElement,
  MenuItemContainerProps
>(({ children, isItem = true, ...restMenuItemContainerProps }, ref) => {
  const innerContent = (
    <StyledMenuItemInner {...restMenuItemContainerProps} ref={ref}>
      {children}
    </StyledMenuItemInner>
  );
  return isItem ? (
    <StyledMenuItem role="presentation">{innerContent}</StyledMenuItem>
  ) : (
    innerContent
  );
});

MenuItemContainer.displayName = 'MenuItemContainer';
