import * as React from 'react';

import { INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP } from '../constants';

import { IconButton, IconButtonProps } from '../../IconButton';

import { StyledInputControlShowPassword } from '../styled/StyledInputControlShowPassword';
import { TFieldSize, StyledOverloadCssProps } from '../../../declarations';
import {
  GIEyeViewFilled,
  GIEyeVisibilityShowVisible,
} from '@devoinc/genesys-icons';

export interface InputControlShowPasswordProps
  extends StyledOverloadCssProps,
    Pick<IconButtonProps, 'onClick'> {
  showPassword?: boolean;
  size?: TFieldSize;
}

export const InputControlShowPassword: React.FC<
  InputControlShowPasswordProps
> = ({ onClick, showPassword, size, styles }) => (
  <StyledInputControlShowPassword $size={size} css={styles}>
    <IconButton
      icon={showPassword ? <GIEyeViewFilled /> : <GIEyeVisibilityShowVisible />}
      circular
      onClick={onClick}
      size={INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP[size]}
      state={showPassword ? 'selected' : 'enabled'}
    />
  </StyledInputControlShowPassword>
);
