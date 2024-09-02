import styled, { css } from 'styled-components';

import { getHeadingCategoryAndType, getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';
import { ITypographyHeadingStyled } from './declarations';

export interface StyledHeadingProps extends ITypographyHeadingStyled {}

export const StyledHeading = styled.div<StyledHeadingProps>`
  ${({
    $colorScheme,
    $gutterBottom,
    $size = 'h4',
    $textAlign,
    theme,
    $truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(theme)($gutterBottom)};
    ${getTypoCss({
      $variant: getHeadingCategoryAndType($size).category,
      $colorScheme,
      $textAlign,
      theme,
      $truncateLine,
      $size: getHeadingCategoryAndType($size).type,
    })};
  `}
`;
