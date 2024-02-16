import * as React from 'react';

import { LoaderContext } from '../context';
import { LOADER_SIZE_PROGRESS_AND_SPINNER } from '../constants';

import { SpinnerLoader, SpinnerLoaderProps } from '../../SpinnerLoader';
import { SpinnerColorScheme } from '../../SpinnerLoader/constants';

export const LoaderSpinner: React.FC<SpinnerLoaderProps> = ({
  colorScheme,
  size,
  ...restSpinnerLoaderProps
}) => {
  const context = React.useContext(LoaderContext);
  return (
    <SpinnerLoader
      {...restSpinnerLoaderProps}
      colorScheme={colorScheme || (context.colorScheme as SpinnerColorScheme)}
      size={LOADER_SIZE_PROGRESS_AND_SPINNER[size || context.size].spinner}
    />
  );
};
