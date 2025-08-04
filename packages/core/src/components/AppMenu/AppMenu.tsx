import * as React from 'react';

import type { IAppMenu } from './declarations';
import { APP_MENU_CLASS_NAME_BASE } from './constants';
import { useIsOverflow } from './hooks';
import { AppMenuContext } from './context';
import {
  getBasedCssVariablesStyle,
  getVariableBasedClassNames,
} from '../../helpers';
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
    | 'className'
    | 'collapsed'
    | 'height'
    | 'onCollapse'
    | 'onOpen'
    | 'style'
  > {}

const InternalAppMenu: React.FC<AppMenuProps> = ({
  children,
  className,
  collapsed,
  height,
  onCollapse,
  onOpen,
  style,
}) => {
  const targetBodyRef = React.useRef<HTMLDivElement>(null);
  const { hasScroll } = useIsOverflow(targetBodyRef);
  const [intCollapsed, setIntCollapsed] = React.useState(true);
  const evalCollapsed = collapsed ?? intCollapsed;
  const classNameBase = APP_MENU_CLASS_NAME_BASE;
  const classNames = [
    `${classNameBase} `,
    evalCollapsed ? `${classNameBase}--collapsed ` : '',
    className ? `${className} ` : '',
  ]
    .join('')
    .trim();
  return (
    <VFlex
      className={classNames}
      overflowX="hidden"
      childrenFitFullWidth
      height={height}
      spacing="0"
      style={style}
    >
      <AppMenuContext.Provider
        value={{
          scrolledBodyContent: hasScroll,
          collapsed: evalCollapsed,
          bodyRef: targetBodyRef,
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
