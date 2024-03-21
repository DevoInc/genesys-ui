import { PickUnion } from '../../typeFunctions';
import type { TBaseSize, TGlobalSize } from '../../declarations/commonProps';

export type LabelSize = TBaseSize | PickUnion<TGlobalSize, 'xxs' | 'xs' | 'xl'>;
