import {
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TUIColorScheme,
  TNeutralColorScheme,
  TBaseSize,
} from '../../declarations';

export type BadgeColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

export type BadgeSize = TBaseSize;
