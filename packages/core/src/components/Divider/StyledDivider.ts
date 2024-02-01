import * as React from 'react';
import styled, { css } from 'styled-components';

import { AllColorScheme, GlobalSpacing } from '../../declarations';
import { getSpacingPropCss } from '../../helpers';
import { getDividerColorTokens } from './helpers';

export interface StyledDividerProps {
  /** This property defines the status color schema for the divider */
  colorScheme?: AllColorScheme;
  /** This property defines a custom color of the divider */
  customColor?: React.CSSProperties['color'];
  /** Vertical or horizontal Css margin, depending on the Divider is vertical. */
  margin?: string | GlobalSpacing;
  /** This property defines if the divider is vertical */
  vertical?: boolean;
  /** Css height */
  $height?: React.CSSProperties['height'];
  /** Css width */
  $width?: React.CSSProperties['width'];
}

export const StyledDivider = styled.hr<StyledDividerProps>`
  ${({
  customColor,
  $height,
  margin,
  colorScheme = 'base',
  theme,
  vertical = false,
  $width,
}) => {
  const defaultSpacing = vertical
    ? `0 ${theme.alias.space.cmp.md}`
    : `${theme.alias.space.cmp.md} 0`;
  const spacing = margin ? getSpacingPropCss(theme)(margin) : defaultSpacing;
  const borderSize = theme.alias.shape.borderSize.separator.md;
  const bgColor =
      customColor ||
      getDividerColorTokens(theme.alias.color.border)[colorScheme];
  return css`
      position: relative;
      flex-shrink: 0;
      display: ${vertical ? 'inline-flex' : 'flex'};
      overflow: hidden;
      margin: ${spacing};
      border: none;
      width: ${$width || (vertical ? borderSize : '100%')};
      height: ${$height ||
      (vertical ? theme.alias.size.height.surface.xxs : borderSize)};
      background: ${bgColor};
    `;
}};
`;
