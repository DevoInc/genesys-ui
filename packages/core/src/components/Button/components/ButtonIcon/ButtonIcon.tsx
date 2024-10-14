import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TButtonSize } from '../../declarations';
import { Icon, type IconProps } from '../../../Icon';

export interface ButtonIconProps extends Pick<IconProps, 'strong' | 'style'> {
  /** Sets padding, line-height, font-size, etc. */
  size?: TButtonSize;
  /** Icon name/id  */
  children?: React.ReactNode;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  size = 'md',
  strong,
  style,
}) => {
  const cmpTokens = useTheme().cmp.button;
  return (
    <Icon
      size={cmpTokens.icon.typo.fontSize[size]}
      strong={strong}
      style={{
        position: 'relative',
        transition: `transform ease ${cmpTokens.mutation.transitionDuration}`,
        ...style,
      }}
    >
      {children}
    </Icon>
  );
};
