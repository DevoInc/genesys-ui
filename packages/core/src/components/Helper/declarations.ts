import { PickUnion } from '../../typeFunctions';
import type { TBaseSize, TGlobalSize } from '../../declarations/commonProps';

export type THelperSize = TBaseSize | PickUnion<TGlobalSize, 'xxs' | 'xs'>;
