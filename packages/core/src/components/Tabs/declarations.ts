import * as React from 'react';
import type {
  TBaseSize,
  TBasicState,
  TSelectedState,
} from '../../declarations/commonProps';

export type TTabsColorScheme = 'base' | 'primary';
export type TTabsAlign = 'middle' | 'bottom' | 'top';
export type TTabsSize = TBaseSize;
export type TTabsItemState = TBasicState | TSelectedState;

export interface ITabs {
  /** The vertical alignment for the tabs. */
  align?: TTabsAlign;
  /** Adjust the appearance of the TabsContainer to be boxed. */
  contained?: boolean;
  /** The size which defines height, padding, font-size, line-height... etc. */
  size?: TTabsSize;
  /** The color scheme which defines the color of some Tabs elements. */
  colorScheme?: TTabsColorScheme;
  /** Distribute the whole container width between tab items. */
  wide?: boolean;
  height?: React.CSSProperties['height'];
}
