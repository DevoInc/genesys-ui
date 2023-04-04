import styled, { css } from 'styled-components';
import { LayoutFlexProps } from '../../declarations';

import { getSpacingPropCss } from '../../utils/spacing';
import { StyledBox, StyledBoxProps } from '../Box/StyledBox';

export interface StyledFlexProps
  extends Omit<StyledBoxProps, '$display'>,
    LayoutFlexProps {}

export const StyledFlex = styled(StyledBox)<StyledFlexProps>`
  ${({
    alignContent,
    alignItems,
    childrenFlex,
    columnGap,
    flex,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,
    inline = false,
    rowGap,
    theme,
  }) => css`
    display: ${inline ? 'inline-flex' : 'flex'};
    align-content: ${alignContent};
    align-items: ${alignItems};
    flex: ${flex};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    gap: ${gap && getSpacingPropCss(gap, theme)};
    column-gap: ${columnGap && getSpacingPropCss(columnGap, theme)};
    row-gap: ${rowGap && getSpacingPropCss(rowGap, theme)};

    ${childrenFlex &&
    css`
      > * {
        flex: ${childrenFlex};
      }
    `}
  `};
`;
