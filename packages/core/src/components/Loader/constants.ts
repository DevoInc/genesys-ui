import {
  ContextualScrollLoaderSize,
  ContextualScrollLoaderType,
  LoaderSize,
} from './declarations';
import { ProgressBarSize } from '../ProgressBar/declarations';
import { SpinnerSize } from '../SpinnerLoader/constants';
import { BaseSize } from '../../declarations';
import { LoaderGradientContainerProps } from './components';
import { OverlayProps } from '../Overlay';

export const LOADER_SIZE_PROGRESS_AND_SPINNER: {
  [key in LoaderSize]: { progress: ProgressBarSize; spinner: SpinnerSize };
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
  [key in ContextualScrollLoaderType]: {
    [key in ContextualScrollLoaderSize]: BaseSize;
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
  [key in LoaderGradientContainerProps['position']]: LoaderGradientContainerProps['position'];
} = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
} as const;

export const POSITION_GRADIENT_FLEX_DIR_MAP: {
  [key in LoaderGradientContainerProps['position']]: OverlayProps['flexDirection'];
} = {
  top: 'column',
  right: 'row',
  bottom: 'column',
  left: 'row',
} as const;

export const POSITION_GRADIENT_FLEX_JUSTIFY_MAP: {
  [key in LoaderGradientContainerProps['position']]: OverlayProps['justifyContent'];
} = {
  top: 'flex-start',
  right: 'flex-end',
  bottom: 'flex-end',
  left: 'flex-start',
} as const;
