import * as React from 'react';

import { StyledSplitLayout } from './StyledSplitLayout';
import { SplitProps } from 'react-split';

export interface SplitLayoutProps extends SplitProps {
  children: React.ReactNode;
}

export const SplitLayout: React.FC<SplitProps> = ({ children, ...rest }) => {
  return <StyledSplitLayout {...rest}>{children}</StyledSplitLayout>;
};
