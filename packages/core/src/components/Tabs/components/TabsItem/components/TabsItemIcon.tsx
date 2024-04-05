import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, type IconProps } from '../../../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsItemIconProps extends IconProps {}

export const TabsItemIcon: React.FC<TabsItemIconProps> = ({
  children,
  style,
  ...restIconProps
}) => {
  const marginRight = useTheme().cmp.tabs.item.space.margin.iconToText;
  return (
    <Icon {...restIconProps} style={{ marginRight: marginRight, ...style }}>
      {children}
    </Icon>
  );
};
