import styled, { css } from 'styled-components';
import { LayoutGridProps } from '../../declarations';
import { boxMixin, BoxMixinProps } from '../../styled/';

export interface StyledGridProps
  extends Omit<BoxMixinProps, '$display'>,
    LayoutGridProps {}

export const StyledGrid = styled.div<StyledGridProps>`
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
    ...boxMixinProps
  }) => css`
    ${boxMixin({ ...boxMixinProps })};
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
