import styled, { css } from 'styled-components';
import { LayoutFlexProps } from '../../declarations';

import { getSpacingPropCss } from '../../helpers';
import { boxMixin, BoxMixinProps } from '../../styled/';

export interface StyledFlexProps
  extends Omit<BoxMixinProps, '$display' | 'theme'>,
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
    ${boxMixin(theme)(boxMixinProps)};
    display: ${inline ? 'inline-flex' : 'flex'};
    align-content: ${alignContent};
    align-items: ${alignItems};
    flex: ${flex};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    gap: ${gap && getSpacingPropCss(theme)(gap)};
    column-gap: ${columnGap && getSpacingPropCss(theme)(columnGap)};
    row-gap: ${rowGap && getSpacingPropCss(theme)(rowGap)};

    ${childrenFlex &&
    css`
      > * {
        flex: ${childrenFlex};
      }
    `}
  `};
`;
