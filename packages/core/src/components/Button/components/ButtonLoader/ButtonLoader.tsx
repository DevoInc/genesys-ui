import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import type { TButtonSize, TButtonState } from '../../declarations';

import { SpinnerLoader, type SpinnerLoaderProps } from '../../../SpinnerLoader';
import { ButtonIcon } from '../ButtonIcon';

import { BUTTON_LOADER_SIZE_MAP } from '../../constants';
import { getLoadingStateIcon } from '../../helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonLoaderProps extends Omit<SpinnerLoaderProps, 'size'> {
  size?: TButtonSize;
  state?: TButtonState;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
  state = 'enabled',
  styles,
  ...restSpinnerLoaderProps
}) => {
  const square = useTheme().cmp.button.loader.size.width[size];
  const baseStyles = css`
    width: ${square};
    height: ${square};
  `;
  return state === 'loading' ? (
    <SpinnerLoader
      {...restSpinnerLoaderProps}
      colorScheme={colorScheme}
      size={BUTTON_LOADER_SIZE_MAP[size]}
      styles={concat(baseStyles, styles)}
    />
  ) : (
    <ButtonIcon size={size}>{getLoadingStateIcon(state)}</ButtonIcon>
  );
};
