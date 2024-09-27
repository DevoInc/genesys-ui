import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledCaptionProps {
  $colorScheme?: ITypography['colorScheme'];
  $gutterBottom?: ITypography['gutterBottom'];
  $textAlign?: ITypography['textAlign'];
  $truncateLine?: ITypography['truncateLine'];
  /** This property defines multiple styles: font-size, line-height... etc. */
  $size?: ITypography['bodySize'];
}

export const StyledCaption = styled.span<StyledCaptionProps>`
  display: inline-block;
  margin-bottom: ${({ theme, $gutterBottom }) =>
    getSpacingPropCss(theme)($gutterBottom)};
  ${({ $colorScheme, $size, $textAlign, theme, $truncateLine }) => css`
    ${getTypoCss({
      $variant: 'body',
      $colorScheme,
      $textAlign,
      theme,
      $truncateLine,
      $size,
    })};
  `}
`;
