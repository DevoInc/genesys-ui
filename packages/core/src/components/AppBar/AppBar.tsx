import * as React from 'react';

import {
  AppBarContainer,
  type AppBarContainerProps,
  AppBarDivider,
  AppBarHeading,
  AppBarItem,
  AppBarNavigation,
  AppBarNavigationProps,
} from './components';

interface AppBarProps extends AppBarContainerProps {
  heading?: React.ReactNode;
  /** The navigation Tabs component. */
  tabs?: AppBarNavigationProps['children'];
}

const InternalAppBar: React.FC<AppBarProps> = ({
  children,
  id,
  sticky = false,
  tabs,
  heading,
  style,
  ...restContainerProps
}) => (
  <AppBarContainer
    {...restContainerProps}
    id={id}
    sticky={sticky}
    style={style}
  >
    {heading && (
      <AppBarHeading id={id ? `${id}__heading` : null}>{heading}</AppBarHeading>
    )}
    {heading && tabs && <AppBarDivider />}
    {tabs && (
      <AppBarNavigation id={id ? `${id}__tabs` : null}>{tabs}</AppBarNavigation>
    )}
    {children}
  </AppBarContainer>
);

export const AppBar = InternalAppBar as typeof InternalAppBar & {
  Divider: typeof AppBarDivider;
  Heading: typeof AppBarHeading;
  Item: typeof AppBarItem;
  Navigation: typeof AppBarNavigation;
};

AppBar.Divider = AppBarDivider;
AppBar.Heading = AppBarHeading;
AppBar.Item = AppBarItem;
AppBar.Navigation = AppBarNavigation;

InternalAppBar.displayName = 'AppBar';
AppBar.Divider.displayName = 'AppBar.Divider';
AppBar.Heading.displayName = 'AppBar.Heading';
AppBar.Item.displayName = 'AppBar.Item';
AppBar.Navigation.displayName = 'AppBar.Navigation';
