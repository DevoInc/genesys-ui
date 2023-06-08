import styled, { css } from 'styled-components';

import { LayoutGridItemProps } from '../../../../declarations';
import { boxMixin, BoxMixinProps } from '../../../../styled/';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledGridItemProps
  extends Omit<BoxMixinProps, '$display' | '$height' | '$width' | 'theme'>,
    LayoutGridItemProps {}

export const StyledGridItem = styled.div<StyledGridItemProps>`
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
    ...boxMixinProps
  }) => css`
    ${boxMixin({ ...boxMixinProps })};
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
