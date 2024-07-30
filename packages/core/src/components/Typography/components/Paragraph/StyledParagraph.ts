import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledParagraphProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  ${({
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
    ${getTypoCss({
      variant: 'body',
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
    })};

    word-break: break-word;
    &:last-child {
      margin-bottom: 0;
    }
  `}
`;
