import * as React from 'react';

import { LayoutTransientProps } from '../../declarations';
import { StyledGridItem, StyledGridItemProps } from './StyledGridItem';

export interface GridItemProps
  extends StyledGridItemProps,
    LayoutTransientProps {
  /** Children */
  children?: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  ...styledProps
}) => {
  return <StyledGridItem {...styledProps}>{children}</StyledGridItem>;
};
