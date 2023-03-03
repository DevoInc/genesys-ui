import {
  BlendColorScheme,
  BrandColorScheme,
  DataColorScheme,
  UIColorScheme,
  NeutralColorScheme,
  BaseSize,
} from '../../declarations';

export type BadgeColorScheme =
  | BrandColorScheme
  | NeutralColorScheme
  | BlendColorScheme
  | UIColorScheme
  | DataColorScheme;

export type BadgeSize = BaseSize;
