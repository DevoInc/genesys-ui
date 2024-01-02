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

interface BaseAppBarProps extends Omit<AppBarContainerProps, 'children'> {
  /** List of actions elements. */
  actions?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonCloseProps>
  )[];
  /** Custom content for the app bar. It excludes the rest of content props. */
  children?: React.ReactNode;
  /** Custom content to be added at the end of the app bar. */
  customContent?: React.ReactNode;
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
  StyledOverloadCssPropsWithRecord<
    'container' | 'heading' | 'divider' | 'navigation' | 'actions' | 'options'
  >;

const InternalAppBar: React.FC<AppBarProps> = ({
  actions,
  children,
  customContent,
  id,
  options,
  sticky = false,
  tabItems,
  heading,
  styles,
  subcomponentStyles,
  ...restContainerProps
}) => (
  <AppBarContainer
    {...restContainerProps}
    styles={subcomponentStyles?.container || styles}
    id={id}
    sticky={sticky}
  >
    {children || (
      <>
        {heading && (
          <AppBarHeading id={id} styles={subcomponentStyles?.heading}>
            {heading}
          </AppBarHeading>
        )}
        {heading && tabItems && (
          <AppBarDivider id={id} styles={subcomponentStyles?.divider} />
        )}
        {tabItems && (
          <AppBarNavigation id={id} styles={subcomponentStyles?.navigation}>
            <Tabs aria-label="main-nav" colorScheme="primary" contained={false}>
              {React.Children.map(tabItems, (tab) => React.cloneElement(tab))}
            </Tabs>
          </AppBarNavigation>
        )}
        {actions && (
          <AppBarActions id={id} styles={subcomponentStyles?.actions}>
            <ButtonGroup size="md">{actions}</ButtonGroup>
          </AppBarActions>
        )}
        {options && (
          <AppBarOptions id={id} styles={subcomponentStyles?.options}>
            <ButtonGroup size="md">{options}</ButtonGroup>
          </AppBarOptions>
        )}
        {customContent}
      </>
    )}
  </AppBarContainer>
);

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
