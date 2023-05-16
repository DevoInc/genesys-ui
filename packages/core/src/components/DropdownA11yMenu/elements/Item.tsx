import * as React from 'react';

import { Menu } from '../../';
import { MenuItemProps } from '../../Menu/subcomponents';

export interface ItemProps extends MenuItemProps {}

export const Item: React.FC<ItemProps> = (menuItemProps) => {
  return <Menu.Item {...menuItemProps} />;
};
