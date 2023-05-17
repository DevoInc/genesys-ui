import * as React from 'react';

import { Menu } from '../../';
import { MenuItemProps } from '../../Menu/subcomponents';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ItemProps extends MenuItemProps {}

export const Item: React.FC<ItemProps> = (menuItemProps) => {
  return <Menu.Item {...menuItemProps} />;
};
