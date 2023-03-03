import * as React from 'react';

import { SpinnerColorScheme } from '../../../SpinnerLoader/constants';

import { SpinnerLoader } from '../../../../';

import {
  StyledButtonLoader,
  StyledButtonLoaderProps,
} from './StyledButtonLoader';

export interface ButtonLoaderProps extends StyledButtonLoaderProps {
  /** ColorScheme */
  colorScheme?: SpinnerColorScheme;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
}) => (
  <SpinnerLoader
    as={StyledButtonLoader}
    colorScheme={colorScheme}
    size={size}
  />
);
