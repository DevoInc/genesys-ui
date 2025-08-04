import type { TButtonSize } from '../Button';

export const BUTTON_GROUP_CLASS_NAME_BASE = 'button-group';
export const BUTTON_GROUP_ITEM_CLASS_NAME_BASE = `${BUTTON_GROUP_CLASS_NAME_BASE}__item`;

export const FLEX_SPACING_SIZE_MAP: { [key in TButtonSize]: TButtonSize } = {
  xxs: 'xxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'xs',
  lg: 'sm',
};
