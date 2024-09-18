import { css } from 'styled-components';

import type { ILayoutGridItemCss } from '../../../../declarations';

/**
 * Get the specific styles for Box component when it's used as a Grid.Item component
 *
 * @return styles for Box component
 */
export const gridItemMixin = ({
  alignSelf,
  gridArea,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  justifySelf,
}: ILayoutGridItemCss) => css`
  align-self: ${alignSelf};
  grid-area: ${gridArea};
  grid-column: ${gridColumn};
  grid-column-start: ${gridColumnStart};
  grid-column-end: ${gridColumnEnd};
  grid-row: ${gridRow};
  grid-row-start: ${gridRowStart};
  grid-row-end: ${gridRowEnd};
  justify-self: ${justifySelf};
`;
