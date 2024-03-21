import * as React from 'react';

import { SplitterLayout, type SplitterLayoutProps } from './SplitterLayout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SplitPaneProps extends SplitterLayoutProps {}

export const SplitPane: React.FC<SplitPaneProps> = (props) => {
  return <SplitterLayout {...props} />;
};
