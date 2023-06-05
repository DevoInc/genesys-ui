import { GlobalSpacing, HTMLTag, LayoutSpacing } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ContainerSpacing = PickUnion<GlobalSpacing, '0'> | LayoutSpacing;

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
