import { css, DefaultTheme } from 'styled-components';
import type { ILayoutBox, ILayoutFlexCss } from '../../declarations';

import { getSpacingPropCss } from '../../helpers';

export interface IFlexMixin extends ILayoutFlexCss {
  display?: ILayoutBox['display'];
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Box component when it's used as a Flex component
 *
 * @return styles for Box component
 */
export const flexMixin = ({
  alignContent,
  alignItems,
  childrenFlex,
  columnGap,
  display,
  flex,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
  inline = false,
  rowGap,
  theme,
}: IFlexMixin) => css`
  display: ${display || (inline ? 'inline-flex' : 'flex')};
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
  `
      > * {
        flex: ${childrenFlex};
      }
    `};
`;
