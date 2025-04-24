import type { TButtonSize } from '../../../../Button';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../../../IconButton/constants';
import type { TTabsAlign, TTabsSize } from '../../../declarations';
import type { IconProps } from '../../../../Icon';
import { FlexProps } from '../../../../Flex';

export const TABS_ITEM_CLOSABLE_BUTTON_SIZE: TButtonSize =
  ICON_BUTTON_REDUCED_SIZE_PROP_MAP['xs'];

export const TABS_ITEM_ICON_SIZE_MAP: {
  [key in TTabsSize]: IconProps['size'];
} = {
  sm: 'xxxs',
  md: 'xxs',
  lg: 'xs',
};

export const TABS_ALIGN_FLEX_MAP: {
  [key in TTabsAlign]: FlexProps['alignItems'];
} = {
  middle: 'center',
  bottom: 'flex-end',
  top: 'flex-start',
};
