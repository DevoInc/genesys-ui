import * as React from 'react';
import { css } from 'styled-components';
import { concat } from 'lodash';

import { ButtonSize } from '../../declarations';

import { ButtonIcon, ButtonIconProps } from '../ButtonIcon';

export interface ButtonDropdownIconProps extends ButtonIconProps {
  /** Sets padding, line-height, font-size, etc. */
  size?: ButtonSize;
}

export const ButtonDropdownIcon: React.FC<ButtonDropdownIconProps> = ({
  size = 'md',
  state = 'enabled',
  styles,
}) => {
  const baseStyles = css`
    display: block;
    transform: ${state === 'expanded' ? 'rotate(180deg)' : 'rotate(0deg)'};
  `;
  return (
    <ButtonIcon
      icon="gi-arrow_down_fat"
      hasBoldIcon
      size={size}
      state={state}
      styles={concat(baseStyles, styles)}
    />
  );
};
