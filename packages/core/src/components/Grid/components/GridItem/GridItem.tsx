import * as React from 'react';
import { concat } from 'lodash';

import { ILayoutGridItemCss } from '../../../../declarations';
import { gridItemMixin } from './mixins';
import { Box, BoxProps } from '../../../Box';

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
  styles,
  ...restBoxProps
}) => (
  <Box
    {...restBoxProps}
    styles={concat(
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
      styles,
    )}
  >
    {children}
  </Box>
);
