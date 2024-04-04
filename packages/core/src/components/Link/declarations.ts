import type {
  TBasicState,
  TMouseState,
  TGlobalSize,
  TUIColorScheme,
  TBaseSize,
  TAllColorScheme,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

// LINK - COLOR SCHEME -------------------------------------- //
export type TLinkColorScheme =
  | PickUnion<TAllColorScheme, 'base' | 'inverse'>
  | TUIColorScheme;

// LINK - SIZE --------------------------------------------- //
export type TLinkSize = TBaseSize | PickUnion<TGlobalSize, 'xs'>;

// LINK - STATE -------------------------------------------- //
export type TLinkState = TBasicState | TMouseState;
