import { LoaderSize } from './declarations';
import { ProgressBarSize } from '../ProgressBar/declarations';
import { SpinnerSize } from '../SpinnerLoader/constants';

export const LOADER_SIZE_MAP: {
  [key in LoaderSize]: {
    progress: ProgressBarSize;
    spinner: SpinnerSize;
  };
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
