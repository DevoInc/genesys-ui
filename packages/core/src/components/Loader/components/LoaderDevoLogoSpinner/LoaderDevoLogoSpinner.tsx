import * as React from 'react';

import { LoaderContext } from '../../context';
import type { TDevoLogoColorScheme } from '../../../DevoLogoSpinner/declarations';
import {
  DevoLogoSpinner,
  type DevoLogoSpinnerProps,
} from '../../../DevoLogoSpinner';

export const LoaderDevoLogoSpinner: React.FC<DevoLogoSpinnerProps> = ({
  colorScheme,
  size,
  ...restDevoLogoProps
}) => {
  const context = React.useContext(LoaderContext);
  return (
    <DevoLogoSpinner
      {...restDevoLogoProps}
      colorScheme={colorScheme || (context.colorScheme as TDevoLogoColorScheme)}
      size={size || context.size}
    />
  );
};
