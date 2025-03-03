import * as React from 'react';

import { LoaderContext } from '../../context';
import { LOADER_SIZE_PROGRESS_AND_SPINNER } from '../../constants';
import { SpinnerLoader, type SpinnerLoaderProps } from '../../../SpinnerLoader';
import type { TSpinnerColorScheme } from '../../../SpinnerLoader/declarations';

export const LoaderSpinner: React.FC<SpinnerLoaderProps> = ({
  colorScheme,
  size = 'md',
  ...restSpinnerLoaderProps
}) => {
  const context = React.useContext(LoaderContext);
  return (
    <SpinnerLoader
      {...restSpinnerLoaderProps}
      colorScheme={colorScheme || (context.colorScheme as TSpinnerColorScheme)}
      size={LOADER_SIZE_PROGRESS_AND_SPINNER[size || context.size].spinner}
    />
  );
};
