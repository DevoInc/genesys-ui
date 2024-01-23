import { AvatarSize, AvatarVariant } from './declarations';
import { BadgeSize } from '../Badge/declarations';

export const AVATAR_SIZE_BORDER_MAP: {
  [key in AvatarSize]?: string;
} = {
  xs: '1px',
  sm: '1px',
  md: '2px',
  lg: '3px',
  xl: '4px',
};

export const AVATAR_SIZE_SQUARE_MAP: {
  [key in AvatarSize]: string;
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
  [key in AvatarSize]: BadgeSize;
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

export const VARIANT_VALUES: { [key in AvatarVariant]?: string } = {
  circle: '50%',
  rounded: '0.4rem',
};

export const REL_FOR_BLANK_TARGET = 'noopener noreferrer';
