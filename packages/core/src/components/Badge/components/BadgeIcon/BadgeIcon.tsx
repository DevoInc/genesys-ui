import * as React from 'react';
import { GICheckThick } from '@devoinc/genesys-icons';

import { Icon, type IconProps } from '../../../Icon';

export interface BadgeIconProps extends IconProps {}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  children = <GICheckThick />,
  ...restIconProps
}) => <Icon {...restIconProps}>{children}</Icon>;
