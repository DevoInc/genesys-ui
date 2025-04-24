import * as React from 'react';
import { useTheme } from 'styled-components';

import { TABS_ITEM_ICON_SIZE_MAP } from '../constants';
import { Icon, type IconProps } from '../../../../../Icon';

export interface TabsItemIconProps extends IconProps {}

export const TabsItemIcon: React.FC<TabsItemIconProps> = ({
  children,
  size = 'md',
  style,
  ...restIconProps
}) => {
  const tokens = useTheme();
  return (
    <Icon
      {...restIconProps}
      size={TABS_ITEM_ICON_SIZE_MAP[size]}
      style={{
        flex: '0 0 auto',
        marginRight: tokens.cmp.tabs.item.space.margin.iconToText,
        ...style,
      }}
    >
      {children}
    </Icon>
  );
};
