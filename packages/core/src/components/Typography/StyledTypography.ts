import styled, { css } from 'styled-components';

import type {
  ITypography,
  TTypoCategories,
  TTypographyFormat,
} from './declarations';

import { getTypoCss } from './utils';
import { getSpacingPropCss } from '../../helpers';
import { TTypoSize } from '../../declarations';

export interface StyledTypographyProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  bold?: boolean;
  /** Definition of variant and size in the same value: hero-sm, heading-h1,
   * body-sm... etc. */
  format?: TTypographyFormat;
  size?: TTypoSize;
  variant?: TTypoCategories;
}

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${({
    bold,
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
    variant,
  }) => css`
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
    ${getTypoCss({
      bold,
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
      variant,
    })};
  `}
`;
