import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

// components
import { VFlex } from '../VFlex';
import { MenuHeading, MenuItem, MenuSeparator } from './subcomponents';

export interface MenuProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<GlobalAttrProps, 'id'>,
    GlobalAriaProps {
  children?: React.ReactNode;
  cmpRole?: 'menu' | 'nav';
}

const InternalMenu: React.FC<MenuProps> = ({
  as = 'nav',
  children,
  cmpRole = 'menu',
  ...restNativeProps
}) => {
  return cmpRole === 'nav' ? (
    <VFlex {...restNativeProps} as={as} spacing="0" childrenFitFullWidth>
      <VFlex as="ul" spacing="0" childrenFitFullWidth>
        {children}
      </VFlex>
    </VFlex>
  ) : (
    <VFlex
      {...restNativeProps}
      as="ul"
      role="menu"
      spacing="0"
      childrenFitFullWidth
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
