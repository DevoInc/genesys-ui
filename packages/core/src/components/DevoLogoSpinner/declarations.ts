import { TBaseSize, TGlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';
import { LoaderColorScheme } from '../Loader/declarations';

export type DevoLogoColorScheme = LoaderColorScheme | 'brand';
export type DevoLogoPathType = 'logoOddPath' | 'logoEvenPath';

export type DevoLogoAnimation =
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

export type DevoLogoSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xs' | 'lg' | 'xl'>;
