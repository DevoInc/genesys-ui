import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, type IconProps } from '../../../../../Icon';
import { mergeStyles } from '../../../../../../helpers';

export interface TabsItemIconProps extends IconProps {}

export const TabsItemIcon: React.FC<TabsItemIconProps> = ({
  children,
  style,
  ...restIconProps
}) => {
  const marginRight = useTheme().cmp.tabs.item.space.margin.iconToText;
  return (
    <Icon {...restIconProps} style={mergeStyles({ marginRight }, style)}>
      {children}
    </Icon>
  );
};
