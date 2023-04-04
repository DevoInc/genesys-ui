import * as React from 'react';

import { CommonBoxProps } from '../Box';
import { GridItem } from './subcomponents';
import { StyledGrid, StyledGridProps } from './StyledGrid';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GridProps extends StyledGridProps, CommonBoxProps {}

const InternalGrid: React.FC<GridProps> = ({ children, ...styledProps }) => {
  return <StyledGrid {...styledProps}>{children}</StyledGrid>;
};

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;
