import styled, { css } from 'styled-components';

import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';
import { ITypographyHeadingStyled } from './declarations';
import { getCategory, getType } from './utils';

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
    margin-right: ${getSpacingPropCss(theme)('cmp-xs')};
    ${getTypoCss({
      $variant: getCategory($size),
      $colorScheme,
      $textAlign,
      theme,
      $truncateLine,
      $size: getType($size),
    })};
  `}
`;
