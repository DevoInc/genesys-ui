import * as React from 'react';
import { GICheckThick } from '@devoinc/genesys-icons';

import { Icon, type IconProps } from '../../../Icon';

export interface BadgeIconProps extends Omit<IconProps, 'size'> {
  size?: string | number;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  children = <GICheckThick />,
  size = 12,
  style,
  ...restIconProps
}) => {
  return (
    <Icon
      {...restIconProps}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {children}
    </Icon>
  );
};
