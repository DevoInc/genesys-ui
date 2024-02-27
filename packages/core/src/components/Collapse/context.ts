import * as React from 'react';

import type { StyledCollapseContainerProps } from './styled';

export interface CollapseContextProps {
  expanded?: StyledCollapseContainerProps['expanded'];
}

export const CollapseContext = React.createContext<CollapseContextProps>({
  expanded: false,
});
