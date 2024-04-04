import * as React from 'react';

import type { TPanelSize } from './declarations';

export interface PanelContextProps {
  scrolledBodyContent?: boolean;
  size?: TPanelSize;
  bodyRef?: (node: HTMLElement) => void;
}

export const PanelContext = React.createContext<PanelContextProps>({});
