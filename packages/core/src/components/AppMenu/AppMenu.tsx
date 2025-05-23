import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IAppMenu } from './declarations';
import { useIsOverflow } from './hooks';
import { AppMenuContext } from './context';
import { mergeStyles } from '../../helpers';
import { appMenuMixin } from './helpers';
import { VFlex } from '../VFlex';
import {
  AppMenuBody,
  AppMenuFooter,
  AppMenuHeader,
  AppMenuHeading,
  AppMenuItem,
  AppMenuPopoverItem,
  AppMenuSeparator,
} from './components';

export interface AppMenuProps
  extends Pick<
    IAppMenu,
    | 'children'
    | 'collapsed'
    | 'height'
    | 'menuRole'
    | 'onCollapse'
    | 'onOpen'
    | 'style'
  > {}

const InternalAppMenu: React.FC<AppMenuProps> = ({
  children,
  collapsed,
  height,
  menuRole = 'nav',
  onCollapse,
  onOpen,
  style,
}) => {
  const theme = useTheme();
  const targetBodyRef = React.useRef<HTMLDivElement>(null);
  const { hasScroll } = useIsOverflow(targetBodyRef);
  const [intCollapsed, setIntCollapsed] = React.useState(true);
  const evalCollapsed = collapsed ?? intCollapsed;
  const evalHeight = height || theme.cmp.appMenu.size.height;
  return (
    <VFlex
      overflowX="hidden"
      childrenFitFullWidth
      height={evalHeight}
      spacing="0"
      style={mergeStyles(
        appMenuMixin({ theme, collapsed: evalCollapsed }),
        style,
      )}
    >
      <AppMenuContext.Provider
        value={{
          scrolledBodyContent: hasScroll,
          collapsed: evalCollapsed,
          bodyRef: targetBodyRef,
          menuRole,
          onChange: () => {
            setIntCollapsed(!evalCollapsed);
            if (evalCollapsed) {
              onOpen?.();
            } else {
              onCollapse?.();
            }
          },
        }}
      >
        {children}
      </AppMenuContext.Provider>
    </VFlex>
  );
};

export const AppMenu = InternalAppMenu as typeof InternalAppMenu & {
  Body: typeof AppMenuBody;
  Footer: typeof AppMenuFooter;
  Header: typeof AppMenuHeader;
  Heading: typeof AppMenuHeading;
  Item: typeof AppMenuItem;
  PopoverItem: typeof AppMenuPopoverItem;
  Separator: typeof AppMenuSeparator;
};

AppMenu.Body = AppMenuBody;
AppMenu.Footer = AppMenuFooter;
AppMenu.Header = AppMenuHeader;
AppMenu.Heading = AppMenuHeading;
AppMenu.Item = AppMenuItem;
AppMenu.PopoverItem = AppMenuPopoverItem;
AppMenu.Separator = AppMenuSeparator;

InternalAppMenu.displayName = 'AppMenu';
AppMenu.Body.displayName = 'AppMenu.Body';
AppMenu.Footer.displayName = 'AppMenu.Footer';
AppMenu.Header.displayName = 'AppMenu.Header';
AppMenu.Heading.displayName = 'AppMenu.Heading';
AppMenu.Item.displayName = 'AppMenu.Item';
AppMenu.PopoverItem.displayName = 'AppMenu.PopoverItem';
AppMenu.Separator.displayName = 'AppMenu.Separator';
