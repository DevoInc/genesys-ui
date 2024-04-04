import type {
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TUIColorScheme,
  TNeutralColorScheme,
  TBaseSize,
} from '../../declarations';

export type TBadgeColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

export type TBadgeSize = TBaseSize;
