import styled, { css } from 'styled-components';
import { LayoutGridProps } from '../../declarations';
import { Box, BoxProps } from '../Box';

export interface StyledGridProps
  extends Omit<BoxProps, 'display'>,
    LayoutGridProps {}

export const StyledGrid = styled(Box)<StyledGridProps>`
  ${({
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
  }) => css`
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
  `};
`;
