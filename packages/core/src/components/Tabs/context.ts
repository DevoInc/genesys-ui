import * as React from 'react';
import { ITabs, TTabsColorScheme } from './declarations';

export interface TabsContextProps extends Pick<ITabs, 'size'> {
  colorScheme?: TTabsColorScheme;
  wide?: boolean;
}

export const TabsContext = React.createContext<TabsContextProps>({
  colorScheme: 'default',
  size: 'md',
});
