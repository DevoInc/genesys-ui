import * as React from 'react';

import type { ILayoutGridItemCss } from '../../../../declarations';
import { gridItemMixin } from './mixins';
import { Box, type BoxProps } from '../../../Box';
import { mergeStyles } from '../../../../helpers';

export interface GridItemProps extends ILayoutGridItemCss, BoxProps {}

export const GridItem: React.FC<GridItemProps> = ({
  alignSelf,
  children,
  gridArea,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  justifySelf,
  style,
  ...restBoxProps
}) => (
  <Box
    {...restBoxProps}
    style={mergeStyles(
      gridItemMixin({
        alignSelf,
        gridArea,
        gridColumn,
        gridColumnEnd,
        gridColumnStart,
        gridRow,
        gridRowEnd,
        gridRowStart,
        justifySelf,
      }),
      style,
    )}
  >
    {children}
  </Box>
);
