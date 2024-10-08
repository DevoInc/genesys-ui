import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';

export interface StyledCodeBlockProps {
  $gutterBottom?: ITypography['gutterBottom'];
  $textAlign?: ITypography['textAlign'];
  $truncateLine?: ITypography['truncateLine'];
  /** This property defines multiple styles: font-size, line-height... etc. */
  $size?: ITypography['bodySize'];
}

export const StyledCodeBlock = styled.code<StyledCodeBlockProps>`
  ${({ $size, $textAlign, theme, $truncateLine }) => css`
    ${getTypoCss({
      $variant: 'mono',
      $textAlign,
      theme,
      $truncateLine,
      $size,
    })};
  `}
  display: block;
  word-break: break-word;
`;
