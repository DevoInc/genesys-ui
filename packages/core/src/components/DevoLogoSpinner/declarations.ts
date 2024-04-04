import { TBaseSize, TGlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';
import { TLoaderColorScheme } from '../Loader/declarations';

export type TDevoLogoColorScheme = TLoaderColorScheme | 'brand';
export type TDevoLogoPathType = 'logoOddPath' | 'logoEvenPath';

export type TDevoLogoAnimation =
  | 'bounce'
  | 'bounce-dot'
  | 'flow'
  | 'heart-beat'
  | 'jello'
  | 'rubber-band'
  | 'shake'
  | 'swing'
  | 'tada'
  | 'wobble';

export type TDevoLogoSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xs' | 'lg' | 'xl'>;
