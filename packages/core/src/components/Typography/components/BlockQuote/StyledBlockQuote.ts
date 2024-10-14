import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledBlockQuoteProps {
  $textAlign?: ITypography['textAlign'];
  $gutterBottom?: ITypography['gutterBottom'];
  /** This property defines multiple styles: font-size, line-height... etc. */
  $size?: ITypography['bodySize'];
}

export const StyledBlockQuote = styled.blockquote<StyledBlockQuoteProps>`
  ${({ $size, $textAlign, theme }) => css`
    ${getTypoCss({ $variant: 'lead', $textAlign, theme, $size })};
  `}

  ${({ $textAlign, theme }) => css`
    // TODO: cmpTokens
    padding: ${$textAlign === 'right'
      ? `0 ${theme.alias.space.cmp.xxl} 0 0`
      : `0 0 0 ${theme.alias.space.cmp.xxl}`};
  `}

  ${({ $gutterBottom, theme }) => css`
    margin-bottom: ${getSpacingPropCss(theme)($gutterBottom)};
  `}
  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '"';
    position: absolute;
    left: ${({ $textAlign }) => ($textAlign === 'right' ? 'auto' : '0')};
    right: ${({ $textAlign }) => $textAlign === 'right' && '0'};
    top: 0;
    font-size: 7.8rem;
    text-align: ${({ $textAlign }) => $textAlign};
    font-family: cursive;
    line-height: 1;
    // TODO: cmpTokens
    color: ${({ theme }) => rgba(theme.alias.color.text.body.weakest, 0.3)};
  }
`;
