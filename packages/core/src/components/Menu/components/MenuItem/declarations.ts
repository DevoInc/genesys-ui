import * as React from 'react';
import type {
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
  TActiveState,
  TBasicState,
  TExpandedState,
  TFeaturedState,
  TMouseState,
  TReadonlyState,
  TSelectedState,
  TSelectionScheme,
  TUIState,
} from '../../../../declarations';

export interface IMenuItemBasic
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
    Pick<IButtonAttrs, 'name' | 'value'> {}

export interface IMenuItem {
  /** Custom content to be rendered at the end all to the right of the item. */
  appendContent?: React.ReactNode;
  /** Custom content to be rendered at the bottom of the item. */
  bottomContent?: React.ReactNode;
  /** To get custom contents without using any pre-defined content prop. */
  children?: React.ReactNode;
  /** If the menu item is expandable and can show/hide other submenus, showing an expanded icon at the right. */
  expandable?: boolean;
  /** If the item has an extra left space to maintain the alignment when there are other items with icon and without. */
  hasExtraLeftSpace?: boolean;
  /** The visual content to be rendered at the beginning of the item (usually and icon). */
  icon?: React.ReactNode;
  /** If it's true, the menu item has an HTML 'li' wrapper. */
  isItem?: boolean;
  /** The main text block of the item. */
  label?: React.ReactNode;
  /** Custom content to be rendered at the beginning just after the Icon block of the item. */
  prependContent?: React.ReactNode;
  /** If it's true, the menu item has no background. */
  quiet?: boolean;
  /** If it's multiple the item behaves as a checkbox and if it's single as a radio */
  selectionScheme?: TSelectionScheme;
  /** Shortcut text for the item. */
  shortcut?: string;
  /** The state which usually affects to the styles of the item: selected, disabled, expanded... etc. */
  state?:
    | TBasicState
    | TActiveState
    | TMouseState
    | TFeaturedState
    | TReadonlyState
    | TSelectedState
    | TExpandedState
    | TUIState;
  /** Component used as submenu child of the `<li>` element. */
  subMenu?: React.ReactNode;
  /** The item adapt its height to its contents. */
  unlimitedHeight?: boolean;
}
