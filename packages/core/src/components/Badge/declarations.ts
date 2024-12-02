import {
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TUIColorScheme,
  TNeutralColorScheme,
  TBaseSize,
  TGlobalSize,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TBadgeColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

export type TBadgeSize = TBaseSize | PickUnion<TGlobalSize, 'xxs' | 'xs'>;
