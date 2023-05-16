import * as React from 'react';

import { ButtonState } from '../../declarations';

import { StyledButtonIcon, StyledButtonIconProps } from './StyledButtonIcon';

export interface ButtonIconProps extends StyledButtonIconProps {
  /** Icon name/id  */
  icon?: string;
  /** Sets the color scheme according to component state */
  state?: ButtonState;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  as,
  icon,
  hasBoldIcon,
  size = 'md',
  state = 'enabled',
}) => (
  <StyledButtonIcon
    aria-hidden={true}
    as={as}
    className={icon || 'gi-check_thick'}
    icon={icon}
    hasBoldIcon={hasBoldIcon}
    size={size}
    state={state}
  />
);
