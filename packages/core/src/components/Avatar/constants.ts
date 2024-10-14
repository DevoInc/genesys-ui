import type { TAvatarSize } from './declarations';
import type { TBadgeSize } from '../Badge/declarations';

export const AVATAR_SIZE_DEFAULT_VALUE = 'md';
export const AVATAR_COLOR_SCHEME_DEFAULT_VALUE = 'info';
export const AVATAR_IMAGE_FIT_DEFAULT_VALUE = 'cover';
export const AVATAR_IMAGE_POSITION_DEFAULT_VALUE = 'center center';
export const AVATAR_VARIANT_DEFAULT_VALUE = 'circle';

export const AVATAR_SIZE_BADGE_MAP: {
  [key in TAvatarSize]: TBadgeSize;
} = {
  xxxs: 'sm',
  xxs: 'sm',
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md',
  xl: 'lg',
  xxl: 'lg',
  xxxl: 'lg',
};

export const REL_FOR_BLANK_TARGET = 'noopener noreferrer';
