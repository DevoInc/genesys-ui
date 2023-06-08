import * as React from 'react';

import { CommonBoxProps } from '../../../Box';
import { StyledGridItem, StyledGridItemProps } from './StyledGridItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GridItemProps extends StyledGridItemProps, CommonBoxProps {}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  height,
  tooltip,
  width,
  ...styledProps
}) => {
  return (
    <StyledGridItem
      {...styledProps}
      title={tooltip}
      $width={width}
      $height={height}
    >
      {children}
    </StyledGridItem>
  );
};
