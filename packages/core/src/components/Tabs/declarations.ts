import type {
  TBaseSize,
  TBasicState,
  TSelectedState,
} from '../../declarations/commonProps';

export type TTabsColorScheme = 'default' | 'primary';
export type TTabsItemSize = TBaseSize;
export type TTabsSize = TBaseSize;
export type TTabsItemState = TBasicState | TSelectedState;

export interface ITabs {
  /** Adjust the appearance of the TabsContainer to be boxed. */
  contained?: boolean;
  /** The size which defines height, padding, font-size, line-height... etc. */
  size?: TTabsSize;
  /** The color scheme which defines the color of some elements of the Tabs. */
  colorScheme?: TTabsColorScheme;
  /** Distribute the whole container width between tab items. */
  wide?: boolean;
}
