import styled, { css } from 'styled-components';

import { LayoutGridItemProps } from '../../../../declarations';
import { boxMixin, BoxMixinProps } from '../../../../styled/';

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
    theme,
    ...boxMixinProps
  }) => css`
    ${boxMixin(theme)(boxMixinProps)};
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
