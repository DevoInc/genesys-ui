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
  xxxs: 'xxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'md',
  xxl: 'lg',
  xxxl: 'lg',
};

export const AVATAR_SIZE_BADGE_POSITION_MAP: {
  [key in TAvatarSize]: {
    bottom: string;
    badgeSize: TBadgeSize;
    leftOffset: string;
  };
} = {
  xxxs: {
    bottom: '-0.3rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.xxxs,
    leftOffset: '1.1rem',
  },
  xxs: {
    bottom: '-0.3rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.xxs,
    leftOffset: '0.9rem',
  },
  xs: {
    bottom: '-0.2rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.xs,
    leftOffset: '1rem',
  },
  sm: {
    bottom: '-0.5rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.sm,
    leftOffset: '0.7rem',
  },
  md: {
    bottom: '-0.4rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.md,
    leftOffset: '0.4rem',
  },
  lg: {
    bottom: '-0.5rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.lg,
    leftOffset: '0rem',
  },
  xl: {
    bottom: '-0.3rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.xl,
    leftOffset: '0rem',
  },
  xxl: {
    bottom: '-0.2rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.xxl,
    leftOffset: '0rem',
  },
  xxxl: {
    bottom: '0rem',
    badgeSize: AVATAR_SIZE_BADGE_MAP.xxxl,
    leftOffset: '0rem',
  },
};

export const REL_FOR_BLANK_TARGET = 'noopener noreferrer';
