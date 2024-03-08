import * as React from 'react';
import type { IBaseProgressBar } from './declarations';

export interface ProgressBarContextProps
  extends Pick<
    IBaseProgressBar,
    'colorScheme' | 'percent' | 'size' | 'status' | 'type' | 'withCustomInfo'
  > {}

export const ProgressBarContext = React.createContext<ProgressBarContextProps>({
  colorScheme: 'dark',
  percent: 0,
  size: 'md',
  status: 'progressing',
  type: 'standard',
  withCustomInfo: false,
});
