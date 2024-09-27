import * as React from 'react';

import { GINoData } from '@devoinc/genesys-icons';

import { Icon, type IconProps } from '../../../Icon';

export interface StatusMessageIconProps extends IconProps {}

export const StatusMessageIcon: React.FC<StatusMessageIconProps> = ({
  children = <GINoData />,
  colorScheme = 'stronger',
  ...restIconProps
}) => (
  <Icon {...restIconProps} colorScheme={colorScheme}>
    {children}
  </Icon>
);
