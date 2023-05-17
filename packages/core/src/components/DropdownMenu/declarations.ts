import { DOMAttributes } from 'react';

export type KeyboardEventsAction = ' ' | 'Enter' | 'Escape';
export type KeyboardEventsMove =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight';

export type TypesProp =
  | 'item'
  | 'itemSubMenu'
  | 'itemLink'
  | 'asSeparator'
  | 'itemSelectable';

export type AccessibilityRolesProp = 'menu' | 'menuitem' | 'menuitemcheckbox';

export type PopperCoordsProps =
  | 'auto'
  | 'auto-end'
  | 'auto-start'
  | 'top'
  | 'top-end'
  | 'top-start'
  | 'right'
  | 'right-end'
  | 'right-start'
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start';

export interface DropdownItem {
  icon?: string;
  action?: () => void;
  appendTag?: object;
  checked?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  highlighted?: boolean;
  href?: string;
  label: string;
  onChange?: DOMAttributes<any>['onChange'];
  shortcut?: string;
  subMenu?: object[];
  subMenuDirection?: string;
  target?: string;
  tooltip?: object;
  type?: string;
}
