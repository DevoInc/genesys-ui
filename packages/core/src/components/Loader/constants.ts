import type {
  TContextualScrollLoaderSize,
  TContextualScrollLoaderType,
  TLoaderSize,
  TLoaderGradientPosition,
} from './declarations';
import type { TProgressBarSize } from '../ProgressBar/declarations';
import type { TSpinnerSize } from '../SpinnerLoader/declarations';
import type { TBaseSize } from '../../declarations';
import type { OverlayProps } from '../Overlay';

export const LOADER_SIZE_PROGRESS_AND_SPINNER: {
  [key in TLoaderSize]: { progress: TProgressBarSize; spinner: TSpinnerSize };
} = {
  sm: {
    progress: 'sm',
    spinner: 'md',
  },
  md: {
    progress: 'md',
    spinner: 'lg',
  },
};

export const CONTEXTUAL_SCROLL_LOADER_SIZE_MAP: {
  [key1 in TContextualScrollLoaderType]: {
    [key2 in TContextualScrollLoaderSize]: TBaseSize;
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
};

export const POSITION_GRADIENT_DIR_MAP: {
  [key in TLoaderGradientPosition]: TLoaderGradientPosition;
} = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

export const POSITION_GRADIENT_FLEX_DIR_MAP: {
  [key in TLoaderGradientPosition]: OverlayProps['flexDirection'];
} = {
  top: 'column',
  right: 'row',
  bottom: 'column',
  left: 'row',
};

export const POSITION_GRADIENT_FLEX_JUSTIFY_MAP: {
  [key in TLoaderGradientPosition]: OverlayProps['justifyContent'];
} = {
  top: 'flex-start',
  right: 'flex-end',
  bottom: 'flex-end',
  left: 'flex-start',
};
