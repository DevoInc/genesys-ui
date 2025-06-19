import * as React from 'react';

import type { ILayoutGridCss } from '../../declarations';

import { Resolve } from '../../typeFunctions';
import { mergeStyles } from '../../helpers';
import { gridMixin } from './mixins';

import { Box, type BoxProps } from '../Box';
import { GridItem } from './components';

export interface GridProps extends ILayoutGridCss, BoxProps {}

const InternalGrid = React.forwardRef<HTMLElement, Resolve<GridProps>>(
  (
    {
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
    },
    ref,
  ) => (
    <Box
      {...restBoxProps}
      ref={ref}
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
  ),
);

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;

InternalGrid.displayName = 'Grid';
Grid.Item.displayName = 'Grid.Item';
