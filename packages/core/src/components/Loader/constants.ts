import type {
  ContextualScrollLoaderSize,
  ContextualScrollLoaderType,
  LoaderSize,
  TLoaderGradientPosition,
} from './declarations';
import type { TProgressBarSize } from '../ProgressBar/declarations';
import type { SpinnerSize } from '../SpinnerLoader/constants';
import type { BaseSize } from '../../declarations';
import type { OverlayProps } from '../Overlay';

export const LOADER_SIZE_PROGRESS_AND_SPINNER: {
  [key in LoaderSize]: { progress: TProgressBarSize; spinner: SpinnerSize };
} = {
  sm: {
    progress: 'sm',
    spinner: 'md',
  },
  md: {
    progress: 'md',
    spinner: 'lg',
  },
} as const;

export const CONTEXTUAL_SCROLL_LOADER_SIZE_MAP: {
  [key1 in ContextualScrollLoaderType]: {
    [key2 in ContextualScrollLoaderSize]: BaseSize;
  };
} = {
  progress: {
    md: 'md',
    lg: 'sm',
  },
  spinner: {
    md: 'md',
    lg: 'lg',
  },
} as const;

export const POSITION_GRADIENT_DIR_MAP: {
  [key in TLoaderGradientPosition]: TLoaderGradientPosition;
} = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
} as const;

export const POSITION_GRADIENT_FLEX_DIR_MAP: {
  [key in TLoaderGradientPosition]: OverlayProps['flexDirection'];
} = {
  top: 'column',
  right: 'row',
  bottom: 'column',
  left: 'row',
} as const;

export const POSITION_GRADIENT_FLEX_JUSTIFY_MAP: {
  [key in TLoaderGradientPosition]: OverlayProps['justifyContent'];
} = {
  top: 'flex-start',
  right: 'flex-end',
  bottom: 'flex-end',
  left: 'flex-start',
} as const;
