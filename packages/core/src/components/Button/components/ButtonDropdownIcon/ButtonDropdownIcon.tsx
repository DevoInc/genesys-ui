import * as React from 'react';

import { ButtonSize } from '../../declarations';

import { ButtonIcon } from '../ButtonIcon';

import {
  StyledButtonDropdownIcon,
  StyledButtonDropdownIconProps,
} from './StyledButtonDropdownIcon';

export interface ButtonDropdownIconProps extends StyledButtonDropdownIconProps {
  /** Sets padding, line-height, font-size, etc. */
  size?: ButtonSize;
}

export const ButtonDropdownIcon: React.FC<ButtonDropdownIconProps> = ({
  size = 'md',
  state = 'enabled',
}) => (
  <ButtonIcon
    as={StyledButtonDropdownIcon}
    icon="arrow_down_fat"
    hasBoldIcon
    size={size}
    state={state}
  />
);
