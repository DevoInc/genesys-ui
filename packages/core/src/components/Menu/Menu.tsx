import * as React from 'react';

import { VFlex, type VFlexProps } from '../VFlex';
import { MenuHeading, MenuItem, MenuSeparator } from './components';

export interface MenuProps extends VFlexProps {}

const InternalMenu: React.FC<MenuProps> = ({
  as = 'nav',
  children,
  childrenFitFullWidth = true,
  spacing = '0',
  ...restVFlexProps
}) => (
  <VFlex
    {...restVFlexProps}
    as={as}
    childrenFitFullWidth={childrenFitFullWidth}
    spacing="0"
  >
    <VFlex
      as="ul"
      role="menu"
      spacing={spacing}
      childrenFitFullWidth={childrenFitFullWidth}
    >
      {children}
    </VFlex>
  </VFlex>
);

export const Menu = InternalMenu as typeof InternalMenu & {
  Heading: typeof MenuHeading;
  Item: typeof MenuItem;
  Separator: typeof MenuSeparator;
};

Menu.Heading = MenuHeading;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;

InternalMenu.displayName = 'Menu';
Menu.Heading.displayName = 'Menu.Heading';
Menu.Item.displayName = 'Menu.Item';
Menu.Separator.displayName = 'Menu.Separator';
