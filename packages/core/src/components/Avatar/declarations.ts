import { PickUnion } from '../../typeFunctions';

import type { TBaseSize, TGlobalSize } from '../../declarations';

import {
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TUIColorScheme,
  TNeutralColorScheme,
} from '../../declarations';
import type { TBadgeColorScheme, TBadgeSize } from '../Badge';
import * as React from 'react';

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

export type TAvatarBadgeFn = (props: {
  colorScheme: TBadgeColorScheme;
  size: TBadgeSize;
}) => React.ReactNode;
