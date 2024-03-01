import * as React from 'react';

import { GINoData } from '@devoinc/genesys-icons';
import { Icon, type IconProps } from '../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusMessageIconProps extends IconProps {}

export const StatusMessageIcon = ({
  children = <GINoData />,
  colorScheme = 'stronger',
  ...iconProps
}: StatusMessageIconProps) => {
  return (
    <Icon {...iconProps} colorScheme={colorScheme}>
      {children}
    </Icon>
  );
};
