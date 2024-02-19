import * as React from 'react';
import { VFlex, VFlexProps } from '../VFlex';
import { MenuHeading, MenuItem, MenuSeparator } from './components';

export interface MenuProps extends Omit<VFlexProps, 'role'> {
  cmpRole?: 'menu' | 'nav';
}

const InternalMenu: React.FC<MenuProps> = ({
  as,
  children,
  childrenFitFullWidth = true,
  cmpRole = 'menu',
  spacing = '0',
  ...restVFlexProps
}) => {
  return cmpRole === 'nav' ? (
    <VFlex
      {...restVFlexProps}
      as={as || 'nav'}
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
