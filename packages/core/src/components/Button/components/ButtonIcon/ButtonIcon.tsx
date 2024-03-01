import * as React from 'react';
import { useTheme } from 'styled-components';

import type { ButtonSize } from '../../declarations';
import { Icon, type IconProps } from '../../../Icon';

export interface ButtonIconProps extends Pick<IconProps, 'strong' | 'style'> {
  /** Sets padding, line-height, font-size, etc. */
  size?: ButtonSize;
  /** Icon name/id  */
  children?: React.ReactNode;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  size = 'md',
  strong,
  style,
}) => {
  const theme = useTheme();
  return (
    <Icon
      size={theme.cmp.button.icon.typo.fontSize[size]}
      strong={strong}
      style={{
        position: 'relative',
        transition: 'transform ease 0.15s',
        ...style,
      }}
    >
      {children}
    </Icon>
  );
};
