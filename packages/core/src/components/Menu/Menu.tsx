import * as React from 'react';
import { VFlex, type VFlexProps } from '../VFlex';
import { MenuHeading, MenuItem, MenuSeparator } from './components';

export interface MenuProps extends Omit<VFlexProps, 'role'> {
  cmpRole?: 'menu' | 'nav';
}

const InternalMenu: React.FC<MenuProps> = ({
  as = 'nav',
  children,
  childrenFitFullWidth = true,
  cmpRole = 'menu',
  spacing = '0',
  ...restVFlexProps
}) => {
  return cmpRole === 'nav' ? (
    <VFlex
      {...restVFlexProps}
      as={as}
      spacing={spacing}
      childrenFitFullWidth={childrenFitFullWidth}
    >
      <VFlex as="ul" spacing="0" childrenFitFullWidth>
        {children}
      </VFlex>
    </VFlex>
  ) : (
    <VFlex
      {...restVFlexProps}
      as={as || 'ul'}
      role="menu"
      spacing={spacing}
      childrenFitFullWidth={childrenFitFullWidth}
    >
      {children}
    </VFlex>
  );
};

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
