import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getTypoCss } from '../../utils';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledListProps {
  $colorScheme?: ITypography['colorScheme'];
  $gutterBottom?: ITypography['gutterBottom'];
  $listStyle?: ITypography['listStyle'];
  $textAlign?: ITypography['textAlign'];
  $truncateLine?: ITypography['truncateLine'];
  /** This property defines multiple styles: font-size, line-height... etc. */
  $size?: ITypography['bodySize'];
}

export const StyledList = styled.ul<StyledListProps>`
  ${({
    $colorScheme,
    $gutterBottom,
    $listStyle,
    $size,
    $textAlign,
    theme,
  }) => css`
    margin-bottom: ${getSpacingPropCss(theme)($gutterBottom)};
    // TODO: cmpTokens
    padding-left: ${theme.alias.space.cmp.md};
    ${() => {
      if ($listStyle === 'ordered')
        return css`
          list-style: decimal none outside;
        `;
      if ($listStyle === 'none')
        return css`
          list-style: none;
          padding-left: 0;
        `;
      return css`
        list-style: disc none outside;
      `;
    }};

    ${getTypoCss({
      $variant: 'body',
      $colorScheme,
      $textAlign,
      theme,
      $size,
    })};
  `}
  &:last-child {
    margin-bottom: 0;
  }
`;
