import * as React from 'react';

import { LayoutTransientProps } from '../../declarations';
import { GridItem } from './subcomponents';
import { StyledGrid, StyledGridProps } from './StyledGrid';

export interface GridProps extends StyledGridProps, LayoutTransientProps {}

const InternalGrid: React.FC<GridProps> = ({ children, ...styledProps }) => {
  return <StyledGrid {...styledProps}>{children}</StyledGrid>;
};

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;
