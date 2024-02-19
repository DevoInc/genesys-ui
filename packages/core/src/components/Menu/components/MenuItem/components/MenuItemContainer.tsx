import * as React from 'react';

import {
  ButtonAttrProps,
  FieldAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAttrProps,
  LinkAttrProps,
  MouseEventAttrProps,
  NavigationAriaProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../../../../declarations';

import {
  StyledMenuItem,
  StyledMenuItemInner,
  StyledMenuItemInnerProps,
} from '../styled';

export interface MenuItemContainerProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    FieldAttrProps,
    GlobalAriaProps,
    TriggerAriaProps,
    LayoutAttrProps,
    LinkAttrProps,
    FocusEventAttrProps,
    MouseEventAttrProps,
    NavigationAriaProps,
    Pick<ButtonAttrProps, 'name' | 'value'>,
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
