import * as React from 'react';

import {
  GIEyeViewFilled,
  GIEyeVisibilityShowVisible,
} from '@devoinc/genesys-icons';

import { INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP } from '../../constants';
import type { TFieldSize, IStyledOverloadCss } from '../../../../declarations';
import { IconButton, type IconButtonProps } from '../../../IconButton';
import { StyledInputControlShowPassword } from './StyledInputControlShowPassword';

export interface InputControlShowPasswordProps
  extends IStyledOverloadCss,
    Pick<IconButtonProps, 'onClick'> {
  showPassword?: boolean;
  size?: TFieldSize;
}

export const InputControlShowPassword: React.FC<
  InputControlShowPasswordProps
> = ({ onClick, showPassword, size, style }) => (
  <StyledInputControlShowPassword $size={size} css={style}>
    <IconButton
      icon={showPassword ? <GIEyeViewFilled /> : <GIEyeVisibilityShowVisible />}
      circular
      onClick={onClick}
      size={INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP[size]}
      state={showPassword ? 'selected' : 'enabled'}
    />
  </StyledInputControlShowPassword>
);
