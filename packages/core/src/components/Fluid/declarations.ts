import { TGlobalSpacing, HTMLTag, TLayoutSpacing } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ContainerSpacing = PickUnion<TGlobalSpacing, '0'> | TLayoutSpacing;

export type FluidProp =
  | boolean
  | {
      xs: boolean;
      sm: boolean;
      md: boolean;
      lg: boolean;
      xl: boolean;
      xxl: boolean;
    };

export type FluidAs = HTMLTag;
