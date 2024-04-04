import * as React from 'react';

import type { TButtonSize, TButtonState } from '../../declarations';

import { ButtonIcon, type ButtonIconProps } from '../ButtonIcon';
import { GIAngleDown } from '@devoinc/genesys-icons';

export interface ButtonDropdownIconProps extends ButtonIconProps {
  /** Sets padding, line-height, font-size, etc. */
  size?: TButtonSize;
  state?: TButtonState;
}

export const ButtonDropdownIcon: React.FC<ButtonDropdownIconProps> = ({
  size = 'md',
  state = 'enabled',
}) => (
  <ButtonIcon
    strong
    size={size}
    style={{
      display: 'block',
      transform: state === 'expanded' ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
  >
    <GIAngleDown />
  </ButtonIcon>
);
