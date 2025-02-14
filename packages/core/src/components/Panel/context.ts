import * as React from 'react';

import type { TPanelSize } from './declarations';

export interface PanelContextProps {
  scrolledBodyContent?: boolean;
  size?: TPanelSize;
  bodyRef?: React.Ref<HTMLDivElement>;
  removeContentSpace?: boolean;
}

export const PanelContext = React.createContext<PanelContextProps>({});
