import { PickUnion } from '../../typeFunctions';
import { BaseSize, GlobalSize } from '../../';

export type HelperSize = BaseSize | PickUnion<GlobalSize, 'xxs' | 'xs'>;

export type FloatingHelperSize = BaseSize;
