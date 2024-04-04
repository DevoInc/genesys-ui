import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, type IconProps } from '../../../../Icon';
import { menuItemSizeConfig } from '../constants';

import { StyledMenuItemIcon } from '../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuItemIconProps extends Omit<IconProps, 'role'> {}

export const MenuItemIcon: React.FC<MenuItemIconProps> = ({
  children,
  size,
  ...restIconProps
}) => {
  const theme = useTheme();
  const defaultIconSize = menuItemSizeConfig(theme).iconSize;

  return (
    <StyledMenuItemIcon>
      <Icon {...restIconProps} size={size || defaultIconSize}>
        {children}
      </Icon>
    </StyledMenuItemIcon>
  );
};
