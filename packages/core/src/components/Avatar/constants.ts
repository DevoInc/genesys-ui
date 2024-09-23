import type { TAvatarSize, TAvatarVariant } from './declarations';
import type { TBadgeSize } from '../Badge/declarations';

export const AVATAR_SIZE_DEFAULT_VALUE = 'md';
export const AVATAR_COLOR_SCHEME_DEFAULT_VALUE = 'info';
export const AVATAR_IMAGE_FIT_DEFAULT_VALUE = 'cover';
export const AVATAR_IMAGE_POSITION_DEFAULT_VALUE = 'center center';
export const AVATAR_VARIANT_DEFAULT_VALUE = 'circle';

export const AVATAR_SIZE_BORDER_MAP: {
  [key in TAvatarSize]?: string;
} = {
  xxxs: '0.1rem',
  xxs: '0.1rem',
  xs: '0.1rem',
  sm: '0.1rem',
  md: '0.2rem',
  lg: '0.2rem',
  xl: '0.3rem',
  xxl: '0.3rem',
  xxxl: '0.3rem',
};

export const AVATAR_SIZE_SQUARE_MAP: {
  [key in TAvatarSize]: string;
} = {
  xxxs: '2rem',
  xxs: '2.4rem',
  xs: '2.8rem',
  sm: '3.2rem',
  md: '4rem',
  lg: '4.8rem',
  xl: '5.6rem',
  xxl: '6.4rem',
  xxxl: '7.2rem',
};

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

export const VARIANT_VALUES: { [key in TAvatarVariant]?: string } = {
  circle: '50%',
  rounded: '0.4rem',
};

export const REL_FOR_BLANK_TARGET = 'noopener noreferrer';
