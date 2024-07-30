import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledBlockQuoteProps
  extends Pick<ITypography, 'gutterBottom' | 'textAlign'> {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const StyledBlockQuote = styled.blockquote<StyledBlockQuoteProps>`
  ${({ gutterBottom, size, textAlign, theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    return css`
      ${getTypoCss({ variant: 'lead', textAlign, theme, size })};

      padding: ${textAlign === 'right'
        ? `0 ${spacingTokens.cmp.xxl} 0 0`
        : `0 0 0 ${spacingTokens.cmp.xxl}`};
      margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};

      &:last-child {
        margin-bottom: 0;
      }

      &:before {
        content: '"';
        position: absolute;
        left: ${textAlign === 'right' ? 'auto' : '0'};
        right: ${textAlign === 'right' && '0'};
        top: 0;
        font-size: 7.8rem;
        text-align: ${textAlign};
        font-family: cursive;
        line-height: 1;
        color: ${rgba(aliasTokens.color.text.body.weakest, 0.3)};
      }
    `;
  }}
`;
