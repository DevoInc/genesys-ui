import styled, { css } from 'styled-components';

import {
  isValidColor,
  getAccTextColor,
  getTokenKeyFromColorScheme,
} from '../../../../helpers';
import { getBadgeInverseModeColor } from '../../helpers';

import type { IBadgeContainer } from './declarations';

interface StyledBadgeContainerProps {
  /** Size to define padding, line-height, font-size... etc. of the Badge. */
  $size?: IBadgeContainer['size'];
  $inverse?: boolean;
  $hasAbsolutePosition?: boolean;
  /** If the Badge has content*/
  $hasContent?: boolean;
  /** If the Badge has string content, and it's longer than one character*/
  $hasLongText?: boolean;
  $colorScheme?: IBadgeContainer['colorScheme'];
}

export const StyledBadgeContainer = styled.span<StyledBadgeContainerProps>`
  ${({
    $colorScheme = 'neutral',
    $hasAbsolutePosition,
    $hasContent,
    $hasLongText,
    $inverse,
    $size = 'md',
    theme,
  }) => {
    const colorSchemeForTokens = getTokenKeyFromColorScheme($colorScheme);
    const contentType = $hasContent ? 'hasContent' : 'isEmpty';
    const cmpTokens = theme.cmp.badge;
    const squareSize = cmpTokens.size.square[contentType][$size];
    const bgColor = isValidColor($colorScheme)
      ? $colorScheme
      : cmpTokens.color.background[contentType][colorSchemeForTokens];
    const textColor = isValidColor($colorScheme)
      ? getAccTextColor($colorScheme, '#fff', cmpTokens.color.text.help)
      : cmpTokens.color.text[colorSchemeForTokens];
    return css`
      position: relative;
      flex: 0 0 auto;
      justify-content: center;
      align-items: center;
      display: inline-flex;
      overflow: hidden;
      border-radius: ${cmpTokens.shape.borderRadius};
      min-width: ${squareSize};
      width: ${$hasLongText ? 'auto' : squareSize};
      height: ${squareSize};
      padding: ${$hasLongText && `0 ${cmpTokens.space.padding.hor}`};
      font-size: ${cmpTokens.typo.fontSize[$size]};
      font-weight: bold;

      // is absolute
      ${$hasAbsolutePosition &&
      css`
        position: absolute;
        top: 0;
        right: 0;
      `}

      // background color
      background-color: ${$inverse ? textColor : bgColor};

      // color
      color: ${$inverse && !isValidColor($colorScheme)
        ? getBadgeInverseModeColor({
            colorScheme: $colorScheme,
            textColor: bgColor,
          })
        : textColor};
    `;
  }}
`;
