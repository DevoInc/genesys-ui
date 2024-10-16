import * as React from 'react';

import {
  StyledInputControlIcon,
  type StyledInputControlIconProps,
} from './StyledInputControlIcon';
import type {
  TFieldStatus,
  IStyledOverloadCss,
} from '../../../../declarations';
import { Icon, type IconProps } from '../../../Icon';
import { useTheme } from 'styled-components';

export interface InputControlIconProps extends IStyledOverloadCss {
  /** The Icon svg from icon library */
  icon?: IconProps['children'];
  /** This property defines the status color schema for the input */
  status?: TFieldStatus;
  /** Size of the input: height, padding, font-size... etc. */
  size?: StyledInputControlIconProps['$size'];
  /** If the icon is related with the input type */
  isTypeIcon?: boolean;
  /** The type of the parent Input */
  type?: StyledInputControlIconProps['$type'];
}

export const InputControlIcon: React.FC<InputControlIconProps> = ({
  icon,
  isTypeIcon,
  status,
  size,
  style,
  type,
}) => {
  const theme = useTheme();
  const cmpTokens = theme.cmp.inputControl.icon;
  return (
    <StyledInputControlIcon
      aria-hidden
      $size={size}
      $isTypeIcon={isTypeIcon}
      css={style}
      $type={type}
    >
      <Icon
        color={cmpTokens.color.text[status]}
        size={cmpTokens.size.square[size]}
      >
        {icon}
      </Icon>
    </StyledInputControlIcon>
  );
};
