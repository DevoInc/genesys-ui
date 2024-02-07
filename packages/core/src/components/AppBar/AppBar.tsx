import * as React from 'react';

import { FlexItem } from '../Flex/components';
import {
  AppBarContainer,
  AppBarContainerProps,
  AppBarDivider,
  AppBarHeading,
  AppBarNavigation,
  AppBarNavigationProps,
} from './components';

interface AppBarProps extends AppBarContainerProps {
  heading?: React.ReactNode;
  tabs?: AppBarNavigationProps['tabs'];
}

const InternalAppBar: React.FC<AppBarProps> = ({
  children,
  id,
  sticky = false,
  tabs,
  heading,
  styles,
  ...restContainerProps
}) => (
  <AppBarContainer
    {...restContainerProps}
    id={id}
    sticky={sticky}
    styles={styles}
  >
    {heading && (
      <AppBarHeading id={id ? `${id}__heading` : null}>{heading}</AppBarHeading>
    )}
    {heading && tabs && <AppBarDivider />}
    {tabs && <AppBarNavigation id={id ? `${id}__tabs` : null} tabs={tabs} />}
    {children}
  </AppBarContainer>
);

export const AppBar = InternalAppBar as typeof InternalAppBar & {
  Divider: typeof AppBarDivider;
  Heading: typeof AppBarHeading;
  Item: typeof FlexItem;
  Navigation: typeof AppBarNavigation;
};

AppBar.Divider = AppBarDivider;
AppBar.Heading = AppBarHeading;
AppBar.Item = FlexItem;
AppBar.Navigation = AppBarNavigation;

InternalAppBar.displayName = 'AppBar';
