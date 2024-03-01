import * as React from 'react';

import { StyledInputControlIcon, StyledInputControlIconProps } from '../styled';
import {
  type FieldStatus,
  StyledOverloadCssProps,
} from '../../../declarations';
import { Icon, IconProps } from '../../Icon';
import { useTheme } from 'styled-components';

export interface InputControlIconProps
  extends StyledInputControlIconProps,
    StyledOverloadCssProps {
  /** The Icon svg from icon library */
  icon?: IconProps['children'];
  /** This property defines the status color schema for the input */
  status?: FieldStatus;
}

export const InputControlIcon: React.FC<InputControlIconProps> = ({
  icon,
  isTypeIcon,
  status,
  size,
  styles,
  type,
}) => {
  const theme = useTheme();
  const fieldTokens = theme.alias.fields;
  const fieldIconTokens = fieldTokens.icon;
  const fs = fieldIconTokens.size.square[size];
  return (
    <StyledInputControlIcon
      aria-hidden
      size={size}
      isTypeIcon={isTypeIcon}
      css={styles}
      type={type}
    >
      <Icon
        color={
          status === 'base'
            ? fieldIconTokens.color.text[status]
            : status && fieldTokens.color.border[status].enabled
        }
        size={fs}
      >
        {icon}
      </Icon>
    </StyledInputControlIcon>
  );
};
