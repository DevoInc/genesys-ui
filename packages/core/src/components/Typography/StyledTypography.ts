import styled, { css } from 'styled-components';

import type { ITypography, TTypoCategories } from './declarations';

import { getTypoCss } from './utils';
import { getSpacingPropCss } from '../../helpers';
import { TTypoSize } from '../../declarations';

export interface StyledTypographyProps {
  $colorScheme?: ITypography['colorScheme'];
  $gutterBottom?: ITypography['gutterBottom'];
  $textAlign?: ITypography['textAlign'];
  $truncateLine?: ITypography['truncateLine'];
  $format?: ITypography['format'];
  $bold?: ITypography['bold'];
  $size?: TTypoSize;
  $variant?: TTypoCategories;
}

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${({
    $bold,
    $colorScheme,
    $gutterBottom,
    $size,
    $textAlign,
    theme,
    $truncateLine,
    $variant,
  }) => css`
    word-wrap: break-word;
    margin-bottom: ${getSpacingPropCss(theme)($gutterBottom)};
    ${getTypoCss({
      $bold,
      $colorScheme,
      $textAlign,
      theme,
      $truncateLine,
      $size,
      $variant,
    })};
  `}
`;
