import { PickUnion } from '../../typeFunctions';
import type { TBaseSize, TGlobalSize } from '../../declarations/commonProps';

export type TLabelSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xxs' | 'xs' | 'xl'>;
