import * as React from 'react';

import { INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP } from '../constants';

import { IconButton, IconButtonProps } from '../../IconButton';

import { StyledInputControlShowPassword } from '../styled/StyledInputControlShowPassword';
import { FieldSize, StyledOverloadCssProps } from '../../../declarations';

export interface InputControlShowPasswordProps
  extends StyledOverloadCssProps,
    Pick<IconButtonProps, 'onClick'> {
  showPassword?: boolean;
  size?: FieldSize;
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
