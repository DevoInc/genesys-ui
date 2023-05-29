import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import { SpinnerLoader, SpinnerLoaderProps } from '../../../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonLoaderProps extends SpinnerLoaderProps {}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
  styles,
  ...restSpinnerLoaderProps
}) => {
  const square = useTheme().cmp.button.loader.size.width[size];
  const baseStyles = css`
    width: ${square};
    height: ${square};
  `;
  return (
    <SpinnerLoader
      {...restSpinnerLoaderProps}
      colorScheme={colorScheme}
      size={size}
      styles={concat(baseStyles, styles)}
    />
  );
};
