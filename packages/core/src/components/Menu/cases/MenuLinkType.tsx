import * as React from 'react';

import { Menu, MenuProps } from '../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuLinkTypeProps extends Omit<MenuProps, 'titleLinkStyle'> {}

export const MenuLinkType: React.FC<MenuLinkTypeProps> = (props) => {
  return <Menu {...props} titleLinkStyle />;
};
