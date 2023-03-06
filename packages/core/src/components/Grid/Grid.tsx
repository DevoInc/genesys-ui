import * as React from 'react';

import { LayoutTransientProps } from '../../declarations';
import { GridItem } from './subcomponents';
import { StyledGrid, StyledGridProps } from './StyledGrid';

export interface GridProps extends StyledGridProps, LayoutTransientProps {}

const InternalGrid: React.FC<GridProps> = ({ children, ...styledProps }) => {
  return <StyledGrid {...styledProps}>{children}</StyledGrid>;
};

export const Grid: typeof InternalGrid & {
  Item?: typeof GridItem;
} = InternalGrid;

Grid.Item = GridItem;
