import * as React from 'react';
import { LayoutTransientProps } from '../../declarations';

import { StyledGrid, StyledGridProps } from './StyledGrid';

export interface GridProps extends StyledGridProps, LayoutTransientProps {}

export const Grid: React.FC<GridProps> = ({ children, ...styledProps }) => {
  return <StyledGrid {...styledProps}>{children}</StyledGrid>;
};
