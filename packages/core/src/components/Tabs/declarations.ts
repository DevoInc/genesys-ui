import { BaseSize, BasicState, SelectedState } from '../../';

// TODO: change default to base. Pick of BodyColorScheme and BrandColorScheme
export type TabsColorScheme = 'default' | 'primary';
export type TabsItemSize = BaseSize;
export type TabsItemState = BasicState | SelectedState;
