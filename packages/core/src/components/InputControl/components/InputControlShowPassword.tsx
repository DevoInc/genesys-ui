import * as React from 'react';

import { InputControlProps } from '../InputControl';
import { INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP } from '../constants';

import { IconButton, IconButtonProps } from '../../IconButton';

import { StyledInputControlShowPassword } from '../styled/StyledInputControlShowPassword';

export interface InputControlShowPasswordProps
  extends Pick<InputControlProps, 'size' | 'styles'>,
    Pick<IconButtonProps, 'onClick'> {
  showPassword?: boolean;
}

export const InputControlShowPassword: React.FC<
  InputControlShowPasswordProps
> = ({ onClick, showPassword, size, styles }) => (
  <StyledInputControlShowPassword $size={size} css={styles}>
    <IconButton
      icon={
        showPassword ? 'gi-eye_view_filled' : 'gi-eye_visibility_show_visible'
      }
      circular
      onClick={onClick}
      size={INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP[size]}
      state={showPassword ? 'selected' : 'enabled'}
    />
  </StyledInputControlShowPassword>
);
