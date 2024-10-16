import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import type { IDividerStyled } from './declarations';
import { getSpacingPropCss } from '../../helpers';

export interface StyledDividerProps extends IDividerStyled {}

export const StyledDivider = styled.hr<StyledDividerProps>`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border: none;
  ${({
    $customColor,
    $height,
    $margin,
    $colorScheme = 'base',
    theme,
    $vertical = false,
    $width,
  }) => {
    const cmpTokens = theme.cmp.divider;
    const colorSchemeForTokens = camelCase($colorScheme);
    const defaultSpacing =
      cmpTokens.space.margin[$vertical ? 'vertical' : 'base'];
    const spacing = $margin
      ? getSpacingPropCss(theme)($margin)
      : defaultSpacing;
    const borderSize = cmpTokens.shape.borderSize;
    const bgColor = $customColor || cmpTokens.color.fill[colorSchemeForTokens];
    return css`
      display: ${$vertical ? 'inline-flex' : 'flex'};
      margin: ${spacing};
      width: ${$width || ($vertical ? borderSize : '100%')};
      height: ${$height ||
      ($vertical ? cmpTokens.size.height.vertical : borderSize)};
      background: ${bgColor};
    `;
  }};
`;
