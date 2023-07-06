import * as React from 'react';

import type { StyledOverloadCssPropsWithRecord } from '../../declarations';

import {
  ButtonGroup,
  ButtonProps,
  IconButtonCloseProps,
  Tabs,
  TabsItemProps,
} from '../';

import {
  AppBarActions,
  AppBarContainer,
  AppBarContainerProps,
  AppBarDivider,
  AppBarHeading,
  AppBarHeadingProps,
  AppBarNavigation,
  AppBarOptions,
} from './subcomponents';

interface BaseAppBarProps extends AppBarContainerProps {
  /** List of actions elements. */
  actions?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonCloseProps>
  )[];
  /** Heading content. */
  heading?: AppBarHeadingProps['children'];
  /** List of options elements. */
  options?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonCloseProps>
  )[];
  /** List of Tabs.Item elements. */
  tabItems?: React.ReactElement<TabsItemProps>[];
}

export type AppBarProps = BaseAppBarProps &
  StyledOverloadCssPropsWithRecord<'container' | 'heading'>;

const InternalAppBar: React.FC<AppBarProps> = ({
  actions,
  id,
  options,
  sticky = false,
  tabItems,
  heading,
  // styles,
  // subcomponentStyles,
  ...nativeProps
}) => {
  return (
    <AppBarContainer {...nativeProps} id={id} sticky={sticky}>
      {heading && <AppBarHeading id={id}>{heading}</AppBarHeading>}
      {heading && tabItems && <AppBarDivider id={id} />}
      {tabItems && (
        <AppBarNavigation id={id}>
          <Tabs aria-label="main-nav" colorScheme="primary" contained={false}>
            {React.Children.map(tabItems, (tab) => React.cloneElement(tab))}
          </Tabs>
        </AppBarNavigation>
      )}
      {actions && (
        <AppBarActions id={id}>
          <ButtonGroup size="md">{actions}</ButtonGroup>
        </AppBarActions>
      )}
      {options && (
        <AppBarOptions id={id}>
          <ButtonGroup size="md">{options}</ButtonGroup>
        </AppBarOptions>
      )}
    </AppBarContainer>
  );
};

export const AppBar = InternalAppBar as typeof InternalAppBar & {
  Actions: typeof AppBarActions;
  Container: typeof AppBarContainer;
  Divider: typeof AppBarDivider;
  Heading: typeof AppBarHeading;
  Navigation: typeof AppBarNavigation;
  Options: typeof AppBarOptions;
};

AppBar.Actions = AppBarActions;
AppBar.Container = AppBarContainer;
AppBar.Divider = AppBarDivider;
AppBar.Heading = AppBarHeading;
AppBar.Navigation = AppBarNavigation;
AppBar.Options = AppBarOptions;
