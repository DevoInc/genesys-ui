import { BaseSize, GlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ThumbnailSize =
  | BaseSize
  | PickUnion<GlobalSize, 'xs' | 'xl'>
  | 'fullWidth';
