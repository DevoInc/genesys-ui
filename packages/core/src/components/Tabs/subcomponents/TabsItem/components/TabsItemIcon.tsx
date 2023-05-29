import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, IconProps } from '../../../../Icon';
import { concat } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsItemIconProps extends IconProps {}

export const TabsItemIcon: React.FC<TabsItemIconProps> = ({
  styles,
  ...restIconProps
}) => {
  const marginRight = useTheme().cmp.tabs.item.space.margin.iconToText;
  return (
    <Icon
      {...restIconProps}
      styles={concat(`margin-right: ${marginRight}`, styles)}
    />
  );
};
