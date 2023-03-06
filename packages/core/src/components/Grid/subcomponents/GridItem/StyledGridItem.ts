import styled, { css } from 'styled-components';

import { LayoutGridItemProps } from '../../../../declarations';
import { Box, BoxProps } from '../../../';

export interface StyledGridItemProps
  extends Omit<BoxProps, 'display'>,
    LayoutGridItemProps {}

export const StyledGridItem = styled(Box)<StyledGridItemProps>`
  ${({
    alignSelf,
    gridArea,
    gridColumn,
    gridColumnEnd,
    gridColumnStart,
    gridRow,
    gridRowEnd,
    gridRowStart,
    justifySelf,
  }) => css`
    align-self: ${alignSelf};
    grid-area: ${gridArea};
    grid-column: ${gridColumn};
    grid-column-start: ${gridColumnStart};
    grid-column-end: ${gridColumnEnd};
    grid-row: ${gridRow};
    grid-row-start: ${gridRowStart};
    grid-row-end: ${gridRowEnd};
    justify-self: ${justifySelf};
  `};
`;
