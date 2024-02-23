import * as React from 'react';

import { PanelSize } from './declarations';

export interface PanelContextProps {
  scrolledBodyContent?: boolean;
  size?: PanelSize;
  bodyRef?: (node: HTMLElement) => void;
}

export const PanelContext = React.createContext<PanelContextProps>({});
