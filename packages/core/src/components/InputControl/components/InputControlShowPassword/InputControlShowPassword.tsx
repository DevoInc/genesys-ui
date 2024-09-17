import * as React from 'react';

import {
  GIEyeViewFilled,
  GIEyeVisibilityShowVisible,
} from '@devoinc/genesys-icons';

import { INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP } from '../../constants';
import type { IStyledOverloadCss } from '../../../../declarations';
import { IconButton, type IconButtonProps } from '../../../IconButton';
import { StyledInputControlShowPassword } from './StyledInputControlShowPassword';
import type { IInputControlShowPassword } from './declarations';
import { type TButtonSize } from 'src/components/Button';

export interface InputControlShowPasswordProps
  extends IInputControlShowPassword,
    IStyledOverloadCss,
    Pick<IconButtonProps, 'onClick'> {}

export const InputControlShowPassword: React.FC<
  InputControlShowPasswordProps
> = ({ onClick, showPassword, size, style }) => (
  <StyledInputControlShowPassword $size={size} css={style}>
    <IconButton
      icon={showPassword ? <GIEyeViewFilled /> : <GIEyeVisibilityShowVisible />}
      circular
      onClick={onClick}
      size={INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP[size] as TButtonSize}
      state={showPassword ? 'selected' : 'enabled'}
    />
  </StyledInputControlShowPassword>
);