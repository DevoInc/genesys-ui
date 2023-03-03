import {
  BasicState,
  MouseState,
  GlobalSize,
  UIColorScheme,
  BaseSize,
  AllColorScheme,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

// LINK - COLOR SCHEME -------------------------------------- //
export type LinkColorScheme =
  | PickUnion<AllColorScheme, 'base' | 'inverse'>
  | UIColorScheme;

// LINK - SIZE --------------------------------------------- //
export type LinkSize = BaseSize | PickUnion<GlobalSize, 'xs'>;

// LINK - STATE -------------------------------------------- //
export type LinkState = BasicState | MouseState;
