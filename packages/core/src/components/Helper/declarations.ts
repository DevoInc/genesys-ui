import { PickUnion } from '../../typeFunctions';
import type { TBaseSize, TGlobalSize } from '../../declarations/commonProps';

export type HelperSize = TBaseSize | PickUnion<TGlobalSize, 'xxs' | 'xs'>;
