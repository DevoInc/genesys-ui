import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import { ButtonSize, ButtonState } from '../../declarations';

import { SpinnerLoader, SpinnerLoaderProps } from '../../../SpinnerLoader';
import { ButtonIcon } from '../ButtonIcon';

import {
  BUTTON_LOADER_SIZE_MAP,
  BUTTON_LOADING_ICON_NAME,
} from '../../constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonLoaderProps extends Omit<SpinnerLoaderProps, 'size'> {
  size?: ButtonSize;
  state?: ButtonState;
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
    <ButtonIcon icon={BUTTON_LOADING_ICON_NAME[state]} size={size} />
  );
};
