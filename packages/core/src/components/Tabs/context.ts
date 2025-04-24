import * as React from 'react';
import { ITabs, TTabsAlign, TTabsColorScheme } from './declarations';

export interface TabsContextProps extends Pick<ITabs, 'size'> {
  align?: TTabsAlign;
  colorScheme?: TTabsColorScheme;
  wide?: boolean;
}

export const TabsContext = React.createContext<TabsContextProps>({
  align: 'middle',
  colorScheme: 'base',
  size: 'md',
});
