import * as React from 'react';
import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import type { TBadgeColorScheme, TBadgeSize } from '../../declarations';
import { isValidColor, getAccTextColor } from '../../../../helpers';
import { getBadgeInverseModeColor } from '../../helpers';

export interface StyledBadgeContainerProps {
  /** Size to define padding, line-height, font-size... etc. of the Badge. */
  size?: TBadgeSize;
  /** If the color scheme is inverse: text color becomes background color and vice versa */
  inverse?: boolean;
  /** If the badge is used with position absolute inside another component
   * as a marker */
  hasAbsolutePosition?: boolean;
  /** If the Badge has content*/
  hasContent?: boolean;
  /** If the Badge has string content, and it's longer than one character*/
  hasLongText?: boolean;
  /** It defines the color schema for the background and text color.
   * There are predefined types: primary, secondary... etc.
   * It's possible to use a custom color used for the background color and
   * auto-generated for the text based on this one to maintain AA accessible contrast.*/
  $colorScheme?: TBadgeColorScheme | React.CSSProperties['backgroundColor'];
}

export const StyledBadgeContainer = styled.span<StyledBadgeContainerProps>`
  ${({
    $colorScheme = 'neutral',
    hasAbsolutePosition,
    hasContent,
    hasLongText,
    inverse,
    size = 'md',
    theme,
  }) => {
    const colorSchemeForTokens = camelCase($colorScheme);
    const contentType = hasContent ? 'hasContent' : 'isEmpty';
    const cmpTokens = theme.cmp.badge;
    const squareSize = cmpTokens.size.square[contentType][size];
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
      width: ${hasLongText ? 'auto' : squareSize};
      height: ${squareSize};
      padding: ${hasLongText && `0 ${cmpTokens.space.padding.hor}`};
      font-size: ${cmpTokens.typo.fontSize[size]};
      font-weight: bold;

      // is absolute
      ${hasAbsolutePosition &&
      css`
        position: absolute;
        top: 0;
        right: 0;
      `}

      // background color
      background-color: ${inverse ? textColor : bgColor};

      // color
      color: ${inverse && !isValidColor($colorScheme)
        ? getBadgeInverseModeColor({
            colorScheme: $colorScheme,
            textColor: bgColor,
          })
        : textColor};
    `;
  }}
`;
