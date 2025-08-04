import * as React from 'react';

import {
  FLEX_PROPS_CLASS_NAMES_MAP,
  GRID_PROPS_CLASS_NAMES_MAP,
} from '../../constants';
import { GRID_CLASS_NAME_BASE } from './constants';
import type { ILayoutGridCss } from '../../declarations';
import {
  getBasedCssVariablesStyle,
  getMappedClassNames,
  getSpacingClassNames,
  getVariableBasedClassNames,
} from '../../helpers';
import { Box, type BoxProps } from '../Box';
import { GridItem } from './components';

export interface GridProps extends ILayoutGridCss, BoxProps {}

const InternalGrid = React.forwardRef<HTMLElement, GridProps>(
  (
    {
      alignContent,
      alignItems,
      className,
      display,
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
  ) => {
    const classNames = [
      `${GRID_CLASS_NAME_BASE} `,
      ...getSpacingClassNames({
        columnGap,
        gap,
        rowGap,
      }),
      ...getMappedClassNames(
        {
          alignContent,
          alignItems,
          justifyContent,
          justifyItems,
        },
        FLEX_PROPS_CLASS_NAMES_MAP,
      ),
      ...getMappedClassNames(
        {
          gridAutoFlow,
        },
        GRID_PROPS_CLASS_NAMES_MAP,
      ),
      ...getVariableBasedClassNames({
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
      }),
      className && `${className} `,
    ]
      .join('')
      .trim();
    const basedCssVariablesStyle = getBasedCssVariablesStyle({
      gridTemplateAreas,
      gridTemplateColumns,
      gridTemplateRows,
    });
    return (
      <Box
        {...restBoxProps}
        ref={ref}
        className={classNames}
        display={display || (inline ? 'inline-grid' : 'grid')}
        style={{ ...basedCssVariablesStyle, ...style }}
      >
        {children}
      </Box>
    );
  },
);

export const Grid = InternalGrid as typeof InternalGrid & {
  Item: typeof GridItem;
};

Grid.Item = GridItem;

InternalGrid.displayName = 'Grid';
Grid.Item.displayName = 'Grid.Item';
