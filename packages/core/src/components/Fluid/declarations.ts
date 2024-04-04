import { TGlobalSpacing, HTMLTag, TLayoutSpacing } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TContainerSpacing = PickUnion<TGlobalSpacing, '0'> | TLayoutSpacing;

export type TFluidAs = HTMLTag;
