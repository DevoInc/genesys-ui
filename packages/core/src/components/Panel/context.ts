import * as React from 'react';

import type { TPanelSize } from './declarations';

export interface PanelContextProps {
  scrolledBodyContent?: boolean;
  size?: TPanelSize;
  bodyRef?: React.RefObject<HTMLDivElement>;
  removeContentSpace?: boolean;
}

export const PanelContext = React.createContext<PanelContextProps>({});
