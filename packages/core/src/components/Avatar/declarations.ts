import { PickUnion } from '../../typeFunctions';

import type { BaseSize, GlobalSize } from '../../declarations';

import {
  BlendColorScheme,
  BrandColorScheme,
  DataColorScheme,
  UIColorScheme,
  NeutralColorScheme,
} from '../../declarations';

export type TAvatarColorScheme =
  | BrandColorScheme
  | NeutralColorScheme
  | BlendColorScheme
  | UIColorScheme
  | DataColorScheme;

export type TAvatarSize =
  | BaseSize
  | PickUnion<GlobalSize, 'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'>;

export type TAvatarCustomSize = {
  square?: string;
  width?: string;
  height?: string;
};

export type TAvatarVariant = 'circle' | 'square' | 'rounded';

export type TAvatarFit = 'cover' | 'contain';
