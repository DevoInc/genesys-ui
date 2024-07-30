import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TButtonSize, TButtonState } from '../../declarations';

import { SpinnerLoader, type SpinnerLoaderProps } from '../../../SpinnerLoader';
import { ButtonIcon } from '../ButtonIcon';

import { BUTTON_LOADER_SIZE_MAP } from '../../constants';
import { getLoadingStateIcon } from '../../helpers';
import { mergeStyles } from '../../../../helpers';

export interface ButtonLoaderProps extends Omit<SpinnerLoaderProps, 'size'> {
  size?: TButtonSize;
  state?: TButtonState;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
  state = 'enabled',
  style,
  ...restSpinnerLoaderProps
}) => {
  const square = useTheme().cmp.button.loader.size.width[size];
  const baseStyles = {
    width: square,
    height: square,
  };
  return state === 'loading' ? (
    <SpinnerLoader
      {...restSpinnerLoaderProps}
      colorScheme={colorScheme}
      size={BUTTON_LOADER_SIZE_MAP[size]}
      style={mergeStyles(baseStyles, style)}
    />
  ) : (
    <ButtonIcon size={size}>{getLoadingStateIcon(state)}</ButtonIcon>
  );
};
