import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledCaptionProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const StyledCaption = styled.span<StyledCaptionProps>`
  ${({
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
  }) => css`
    display: inline-block;
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
    ${getTypoCss({
      variant: 'body',
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
    })};
  `}
`;
