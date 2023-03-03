import {
  LoaderSize,
  ContextualScrollLoaderSize,
  ContextualScrollLoaderType,
} from './declarations';
import { BaseSize } from '../../';
import { SpinnerSize } from '../SpinnerLoader/constants';
import { ProgressBarSize } from '../ProgressBar/declarations';

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

export const getSizeByType = (
  type: ContextualScrollLoaderType,
  size: ContextualScrollLoaderSize
): BaseSize =>
  CONTEXTUAL_SCROLL_LOADER_SIZE_MAP[type]?.[size] ||
  CONTEXTUAL_SCROLL_LOADER_SIZE_MAP.spinner.md;

export const LOADER_SIZE_PROGRESS_AND_SPINNER: {
  [key in LoaderSize]: { progress: ProgressBarSize; spinner: SpinnerSize };
} = {
  xs: {
    progress: 'sm',
    spinner: 'sm',
  },
  sm: {
    progress: 'sm',
    spinner: 'md',
  },
  md: {
    progress: 'md',
    spinner: 'lg',
  },
  lg: {
    progress: 'md',
    spinner: 'xl',
  },
} as const;

export const getSize = (
  size: LoaderSize
): { progress: ProgressBarSize; spinner: SpinnerSize } =>
  LOADER_SIZE_PROGRESS_AND_SPINNER[size || 'md'];
