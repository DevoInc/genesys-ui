import styled, { css } from 'styled-components';

import { getSpacingPropCss } from '../../helpers';
import { getDividerColorTokens } from './helpers';
import type { IDividerStyled } from './declarations';

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
    const defaultSpacing = $vertical
      ? `0 ${theme.alias.space.cmp.md}`
      : `${theme.alias.space.cmp.md} 0`;
    const spacing = $margin
      ? getSpacingPropCss(theme)($margin)
      : defaultSpacing;
    const borderSize = theme.alias.shape.borderSize.separator.md;
    const bgColor =
      $customColor ||
      getDividerColorTokens(theme.alias.color.border)[$colorScheme];
    return css`
      display: ${$vertical ? 'inline-flex' : 'flex'};
      margin: ${spacing};
      width: ${$width || ($vertical ? borderSize : '100%')};
      height: ${$height ||
      ($vertical ? theme.alias.size.height.surface.xxs : borderSize)};
      background: ${bgColor};
    `;
  }};
`;
