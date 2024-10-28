import * as React from 'react';

import type { TExpanded } from './declarations';

export interface CollapseContextProps {
  expanded?: TExpanded;
}

export const CollapseContext = React.createContext<CollapseContextProps>({
  expanded: false,
});
