import { TBaseSize, TGlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ThumbnailSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xs' | 'xl'>
  | 'fullWidth';
