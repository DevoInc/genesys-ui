import {
  TBasicState,
  TMouseState,
  TGlobalSize,
  TUIColorScheme,
  TBaseSize,
  TAllColorScheme,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

// LINK - COLOR SCHEME -------------------------------------- //
export type LinkColorScheme =
  | PickUnion<TAllColorScheme, 'base' | 'inverse'>
  | TUIColorScheme;

// LINK - SIZE --------------------------------------------- //
export type LinkSize = TBaseSize | PickUnion<TGlobalSize, 'xs'>;

// LINK - STATE -------------------------------------------- //
export type LinkState = TBasicState | TMouseState;
