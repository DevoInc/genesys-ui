import { PickUnion } from '../../typeFunctions';
import { BaseSize, GlobalSize } from '../../';

export type LabelSize = BaseSize | PickUnion<GlobalSize, 'xxs' | 'xs' | 'xl'>;
