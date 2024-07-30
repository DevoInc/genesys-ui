import type {
  TBasicState,
  TMouseState,
  TGlobalSize,
  TUIColorScheme,
  TBaseSize,
  TAllColorScheme,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TLinkColorScheme =
  | PickUnion<TAllColorScheme, 'base' | 'inverse'>
  | TUIColorScheme;

export type TLinkSize = TBaseSize | PickUnion<TGlobalSize, 'xs'>;

export type TLinkState = TBasicState | TMouseState;
