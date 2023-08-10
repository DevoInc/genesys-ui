import * as React from 'react';

import { Icon, IconProps } from '../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusMessageIconProps extends IconProps {}

export const StatusMessageIcon = ({
  colorScheme = 'stronger',
  iconId = 'gi-no_data',
  ...iconProps
}: StatusMessageIconProps) => {
  return <Icon {...iconProps} colorScheme={colorScheme} iconId={iconId} />;
};