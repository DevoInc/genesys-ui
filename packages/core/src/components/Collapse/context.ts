import * as React from 'react';

import type { TExpanded } from './definitions';

export interface CollapseContextProps {
  expanded?: TExpanded;
}

export const CollapseContext = React.createContext<CollapseContextProps>({
  expanded: false,
});
