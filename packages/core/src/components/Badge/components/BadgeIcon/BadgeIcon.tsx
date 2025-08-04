import * as React from 'react';
import { GICheckThick } from '@devoinc/genesys-icons';

import { Icon, type IconProps } from '../../../Icon';
import { isValidColor } from '../../../../helpers';
import { BADGE_ICON_CLASS_NAME_BASE } from '../../constants';

export interface BadgeIconProps extends Omit<IconProps, 'size'> {
  size?: string | number;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  children = <GICheckThick />,
  className,
  size = 12,
  style,
  ...restIconProps
}) => {
  const classNames = [
    `${BADGE_ICON_CLASS_NAME_BASE} `,
    className && `${className}`,
  ]
    .join('')
    .trim();
  return (
    <Icon
      {...restIconProps}
      className={classNames}
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
