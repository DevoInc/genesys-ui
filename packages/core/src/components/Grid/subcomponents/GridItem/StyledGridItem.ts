import styled, { css } from 'styled-components';

import { LayoutGridItemProps } from '../../../../declarations';
import { StyledBox, StyledBoxProps } from '../../../Box/StyledBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledGridItemProps
  extends Omit<StyledBoxProps, '$display'>,
    LayoutGridItemProps {}

export const StyledGridItem = styled(StyledBox)<StyledGridItemProps>`
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
