import { PickUnion } from '../../typeFunctions';
import type { BaseSize, GlobalSize } from '../../declarations/commonProps';

export type LabelSize = BaseSize | PickUnion<GlobalSize, 'xxs' | 'xs' | 'xl'>;
