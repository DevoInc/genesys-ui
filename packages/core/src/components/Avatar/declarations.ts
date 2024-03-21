import { PickUnion } from '../../typeFunctions';

import type { TBaseSize, TGlobalSize } from '../../declarations';

import {
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TUIColorScheme,
  TNeutralColorScheme,
} from '../../declarations';

export type TAvatarColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

export type TAvatarSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'>;

export type TAvatarCustomSize = {
  square?: string;
  width?: string;
  height?: string;
};

export type TAvatarVariant = 'circle' | 'square' | 'rounded';

export type TAvatarFit = 'cover' | 'contain';
