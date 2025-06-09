import * as React from 'react';

import type { TAppMenuCollapsed } from './declarations';

export interface IAppMenuContext {
  // The menu body reference where are the navigation items.
  bodyRef?: React.Ref<HTMLDivElement>;
  // If the menu is collapsed
  collapsed?: TAppMenuCollapsed;
  // The function to be launched when the menu is expanded/collapsed
  onChange?: () => void;
  // The function to be launched when the menu is collapsed
  onCollapse?: () => void;
  // The function to be launched when the menu is opened
  onOpen?: () => void;
  // If the body of the menu is scrolled
  scrolledBodyContent?: boolean;
}

export const AppMenuContext = React.createContext<IAppMenuContext>({
  collapsed: true,
  scrolledBodyContent: false,
});
