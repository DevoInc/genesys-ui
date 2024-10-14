import * as React from 'react';

import { TAvatarSize, TAvatarVariant, TAvatarCustomSize } from './declarations';
import { DefaultTheme } from 'styled-components';

/**
 * Get the width and the height for the Avatar
 *
 * @param sizeInfo object with:
 *    customSize  - object with the custom width and height
 *    size        - The pre-defined size of the Avatar
 * @return Object with the final width and height
 */
export const getAvatarSizeConfig = ({
  $customSize,
  $size,
  theme,
}: {
  $customSize: TAvatarCustomSize;
  $size: TAvatarSize;
  theme: DefaultTheme;
}): {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
} => {
  const square = $customSize?.square || getAvatarSquareSize({ $size, theme });
  const width = $customSize?.width || square;
  const height = $customSize?.height || square;
  return {
    width: width,
    height: height,
  };
};

/**
 * Get the square size of the Avatar container
 *
 * @param theme Object with the design tokens
 * @param $size The pre-defined size of the Avatar
 * @return The square (same width and height) for the Avatar
 */

export const getAvatarSquareSize = ({
  $size,
  theme,
}: {
  $size: TAvatarSize;
  theme: DefaultTheme;
}) => theme.cmp.avatar.size.square[$size];

/**
 * Get the radius for Avatar
 *
 * @param theme Object with the design tokens
 * @param $variant The pre-defined variant of the Avatar
 * @return The square (same width and height) for the Avatar
 */
export const getBorderRadius = ({
  theme,
  $variant,
}: {
  theme: DefaultTheme;
  $variant: TAvatarVariant;
}) =>
  $variant === 'square' ? 0 : theme.cmp.avatar.shape.borderRadius[$variant];
