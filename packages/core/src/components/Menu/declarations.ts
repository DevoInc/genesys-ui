import { BaseSize, GlobalStatus } from '../../declarations';

export type Directions = 'right' | 'left' | 'up' | 'down';

export type MenuItemSize = BaseSize;

export type MenuItemObj = {
  activated?: boolean;
  appendContent?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  extraContent?: React.ReactNode;
  focused?: boolean;
  heading?: string;
  highlighted?: boolean;
  hovered?: boolean;
  href?: string;
  icon?: string;
  isHeading?: boolean;
  mainContent?: React.ReactNode;
  meta?: string;
  onClick?: () => void;
  onFocus?: () => void;
  prependContent?: React.ReactNode;
  pressed?: boolean;
  selectable?: boolean;
  selected?: boolean;
  asSeparator?: boolean;
  shortcut?: string;
  status?: GlobalStatus;
  subMenu?: boolean;
  target?: '_blank' | '_self';
  text?: string;
  title?: string;
  tooltip?: string;
};

export type MenuItemsObj = MenuItemObj[];
