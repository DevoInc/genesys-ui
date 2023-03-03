import { CommonSpacing, LayoutSpacing } from '../../declarations';

export type ContainerSpacing = CommonSpacing | LayoutSpacing;

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
