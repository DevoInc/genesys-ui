import * as React from 'react';

import { CollapseProps } from './Collapse';

export interface CollapseContextProps {
  expanded?: CollapseProps['expanded'];
}

export const CollapseContext = React.createContext<CollapseContextProps>({
  expanded: false,
});
