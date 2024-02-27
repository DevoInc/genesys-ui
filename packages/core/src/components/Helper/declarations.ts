import { PickUnion } from '../../typeFunctions';
import type { BaseSize, GlobalSize } from '../../declarations/commonProps';

export type HelperSize = BaseSize | PickUnion<GlobalSize, 'xxs' | 'xs'>;
