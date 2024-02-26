import { css } from 'styled-components';
import { ILayoutGridCss } from '../../declarations';

/**
 * Get the specific styles for Box component when it's used as a Grid component
 *
 * @return styles for Box component
 */
export const gridMixin = ({
  alignContent,
  alignItems,
  gridTemplateAreas,
  gridTemplateColumns,
  gridAutoFlow,
  gap,
  columnGap,
  inline = false,
  justifyContent,
  justifyItems,
  gridTemplateRows,
  rowGap,
}: ILayoutGridCss) => css`
  display: ${inline ? 'inline-grid' : 'grid'};
  align-content: ${alignContent};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  justify-items: ${justifyItems};
  grid-auto-flow: ${gridAutoFlow};
  grid-template-areas: ${gridTemplateAreas};
  grid-template-columns: ${gridTemplateColumns};
  grid-template-rows: ${gridTemplateRows};
  gap: ${gap};
  column-gap: ${columnGap};
  row-gap: ${rowGap};
`;
