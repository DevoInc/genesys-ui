import * as React from 'react';

import type { ILayoutGridCss } from '../../declarations';
import { Box, type BoxProps } from '../Box';

import { gridMixin } from './mixins';

import { GridItem } from './components';
import { mergeStyles } from '../../helpers';

export interface GridProps extends ILayoutGridCss, BoxProps {}

const InternalGrid: React.FC<GridProps> = ({
  alignContent,
  alignItems,
  gridTemplateAreas,
  gridTemplateColumns,
  gridAutoFlow,
  gap,
  columnGap,
  inline,
  justifyContent,
  justifyItems,
  gridTemplateRows,
  rowGap,
  children,
  style,
  ...restBoxProps
}) => (
  <Box
    {...restBoxProps}
    style={mergeStyles(
      gridMixin({
        alignContent,
        alignItems,
        gridTemplateAreas,
        gridTemplateColumns,
        gridAutoFlow,
        gap,
        columnGap,
        inline,
        justifyContent,
        justifyItems,
        gridTemplateRows,
        rowGap,
      }),
      style,
    )}
  >
    {children}
  </Box>
);

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;

InternalGrid.displayName = 'Grid';
Grid.Item.displayName = 'Grid.Item';
