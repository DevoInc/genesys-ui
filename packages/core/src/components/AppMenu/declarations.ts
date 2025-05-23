import * as React from 'react';
import type {
  IImageAttrs,
  TActiveState,
  TBasicState,
  TExpandedState,
} from '../../declarations';
import type { MenuProps } from '../Menu';

export type TAppMenuCollapseLabel = string;
export type TAppMenuCollapsed = boolean;
export type TAppMenuCounter = number | string;
export type TAppMenuExpandable = boolean;
export type TAppMenuHeight = React.CSSProperties['height'];
export type TAppMenuIsBeta = boolean;
export type TAppMenuState = TBasicState | TActiveState | TExpandedState;
export type TAppMenuTooltip = string;

export interface IAppMenu
  extends Omit<MenuProps, 'cmpRole' | 'spacing' | 'children'> {
  children?: React.ReactNode;
  // If the menu is collapsed
  collapsed?: TAppMenuCollapsed;
  // The text for the 'collapse' label in the collapse button
  collapseLabel?: TAppMenuCollapseLabel;
  // The src to the logo image to be used when the menu is collapsed
  collapsedLogo?: string;
  // The text for the 'expand' label in the collapse button
  expandLabel?: TAppMenuCollapseLabel;
  // The height of the menu
  height?: TAppMenuHeight;
  // The src to the logo image
  logo: string;
  // The alt attribute for the logo image
  logoAlt: IImageAttrs['alt'];
  // If the menu has a menu role or a nav one with an HTML 'nav' wrapper, usually when the menu items are links.
  menuRole?: MenuProps['cmpRole'];
  // The function to be launched when the menu is collapsed
  onCollapse?: () => void;
  // The function to be launched when the menu is opened
  onOpen?: () => void;
}
