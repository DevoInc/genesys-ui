import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getHeadingCategoryAndType, getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledHeadingProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['headingSize'];
}

export const StyledHeading = styled.div<StyledHeadingProps>`
  ${({
    colorScheme,
    gutterBottom,
    size = 'h4',
    textAlign,
    theme,
    truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
    ${getTypoCss({
      variant: getHeadingCategoryAndType(size).category,
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size: getHeadingCategoryAndType(size).type,
    })};
  `}
`;
