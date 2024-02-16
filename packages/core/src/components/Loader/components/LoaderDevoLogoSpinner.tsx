import * as React from 'react';

import { LoaderContext } from '../context';
import { DevoLogoColorScheme } from '../../DevoLogoSpinner/declarations';
import { DevoLogoSpinner, DevoLogoSpinnerProps } from '../../DevoLogoSpinner';

export const LoaderDevoLogoSpinner: React.FC<DevoLogoSpinnerProps> = ({
  colorScheme,
  size,
  ...restDevoLogoProps
}) => {
  const context = React.useContext(LoaderContext);
  return (
    <DevoLogoSpinner
      {...restDevoLogoProps}
      colorScheme={colorScheme || (context.colorScheme as DevoLogoColorScheme)}
      size={size || context.size}
    />
  );
};
