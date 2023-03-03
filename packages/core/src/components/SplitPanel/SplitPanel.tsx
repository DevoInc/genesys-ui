import * as React from 'react';

import { SplitterLayout, SplitterLayoutProps } from './SplitterLayout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SplitPanelProps extends SplitterLayoutProps {}

export const SplitPanel: React.FC<SplitPanelProps> = (props) => {
  return <SplitterLayout {...props} />;
};
