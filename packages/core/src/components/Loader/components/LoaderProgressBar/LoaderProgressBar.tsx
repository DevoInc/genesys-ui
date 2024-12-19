import * as React from 'react';

import { LoaderContext } from '../../context';
import { LOADER_SIZE_PROGRESS_AND_SPINNER } from '../../constants';
import type { TProgressBarColorScheme } from '../../../ProgressBar/declarations';
import { ProgressBar, type ProgressBarProps } from '../../../ProgressBar';

export interface LoaderProgressBarProps
  extends Omit<ProgressBarProps, 'showStatus' | 'type'> {}

export const LoaderProgressBar: React.FC<LoaderProgressBarProps> = ({
  colorScheme = 'dark',
  size = 'md',
  ...restProgressBarProps
}) => {
  const context = React.useContext(LoaderContext);
  return (
    <ProgressBar
      {...restProgressBarProps}
      colorScheme={
        colorScheme || (context.colorScheme as TProgressBarColorScheme)
      }
      showStatus
      size={LOADER_SIZE_PROGRESS_AND_SPINNER[size || context.size].progress}
      type="circular"
    />
  );
};
