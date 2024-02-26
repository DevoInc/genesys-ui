import * as React from 'react';
import { concat } from 'lodash';

import { ILayoutGridCss } from '../../declarations';
import { Box, BoxProps } from '../Box';

import { gridMixin } from './mixins';

import { GridItem } from './components';

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
  styles,
  ...restBoxProps
}) => (
  <>
    <Box
      {...restBoxProps}
      styles={concat(
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
        styles,
      )}
    >
      {children}
    </Box>
  </>
);

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;

InternalGrid.displayName = 'Grid';
Grid.Item.displayName = 'Grid.Item';
