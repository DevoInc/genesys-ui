import styled, { css } from 'styled-components';
import { LayoutFlexProps } from '../../declarations';

import { getSpacingPropCss } from '../../utils/spacing';
import { boxMixin, BoxMixinProps } from '../../styled/';

export interface StyledFlexProps
  extends Omit<BoxMixinProps, '$display'>,
    LayoutFlexProps {}

export const StyledFlex = styled.div<StyledFlexProps>`
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
    ...boxMixinProps
  }) => css`
    ${boxMixin({ theme, ...boxMixinProps })};
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
