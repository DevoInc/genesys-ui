import * as React from 'react';
import { SplitProps } from 'react-split';

import type { IDataAttrs } from '../../declarations';
import { StyledSplitLayout } from './StyledSplitLayout';

export interface SplitLayoutProps extends IDataAttrs, SplitProps {
  children: React.ReactNode;
}

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  children,
  ...rest
}) => {
  return <StyledSplitLayout {...rest}>{children}</StyledSplitLayout>;
};
