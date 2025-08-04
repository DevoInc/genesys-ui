import * as React from 'react';

import type { ILayoutGridItemCss } from '../../../../declarations';
import { GRID_ITEM_CLASS_NAME_BASE } from '../../constants';
import { FLEX_PROPS_CLASS_NAMES_MAP } from '../../../../constants';
import {
  getBasedCssVariablesStyle,
  getMappedClassNames,
  getVariableBasedClassNames,
} from '../../../../helpers';
import { Box, type BoxProps } from '../../../Box';

export interface GridItemProps extends ILayoutGridItemCss, BoxProps {}

export const GridItem = React.forwardRef<HTMLElement, GridItemProps>(
  (
    {
      alignSelf,
      children,
      className,
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
    },
    ref,
  ) => {
    const classNames = [
      `${GRID_ITEM_CLASS_NAME_BASE} `,
      ...getMappedClassNames(
        { alignSelf, justifySelf },
        FLEX_PROPS_CLASS_NAMES_MAP,
      ),
      ...getVariableBasedClassNames({
        gridArea,
        gridColumn,
        gridColumnEnd,
        gridColumnStart,
        gridRow,
        gridRowEnd,
        gridRowStart,
      }),
      className && `${className} `,
    ]
      .join('')
      .trim();
    const basedCssVariablesStyle = getBasedCssVariablesStyle({
      gridArea,
      gridColumn,
      gridColumnEnd,
      gridColumnStart,
      gridRow,
      gridRowEnd,
      gridRowStart,
    });
    return (
      <Box
        {...restBoxProps}
        ref={ref}
        className={classNames}
        style={{ ...basedCssVariablesStyle, ...style }}
      >
        {children}
      </Box>
    );
  },
);
