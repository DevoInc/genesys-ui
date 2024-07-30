import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledLeadProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const StyledLead = styled.p<StyledLeadProps>`
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
      variant: 'lead',
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
    })};
    &:last-child {
      margin-bottom: 0;
    }
  `}
`;
