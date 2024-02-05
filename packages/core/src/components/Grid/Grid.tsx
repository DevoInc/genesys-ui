import * as React from 'react';

import { CommonBoxProps } from '../Box';
import { GridItem } from './components';
import { StyledGrid, StyledGridProps } from './StyledGrid';

export interface GridProps extends StyledGridProps, CommonBoxProps {}

const InternalGrid: React.FC<GridProps> = ({
  children,
  styles,
  tooltip,
  ...styledProps
}) => (
  <StyledGrid {...styledProps} css={styles} title={tooltip}>
    {children}
  </StyledGrid>
);

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;
