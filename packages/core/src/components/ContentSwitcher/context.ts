import * as React from 'react';

import { ContentSwitcherProps } from './ContentSwitcher';

export interface ContentSwitcherContextProps {
  wide?: ContentSwitcherProps['wide'];
  size?: ContentSwitcherProps['size'];
}

export const ContentSwitcherContext =
  React.createContext<ContentSwitcherContextProps>({});
