import * as React from 'react';

import { AVATAR_SIZE_SQUARE_MAP, VARIANT_VALUES } from './constants';
import { TAvatarSize, TAvatarVariant, TAvatarCustomSize } from './declarations';

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
}: {
  $customSize: TAvatarCustomSize;
  $size: TAvatarSize;
}): {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
} => {
  const square = $customSize?.square || AVATAR_SIZE_SQUARE_MAP[$size];
  const width = $customSize?.width || square;
  const height = $customSize?.height || square;
  return {
    width: width,
    height: height,
  };
};

export const getVariantValue = (variant: TAvatarVariant) =>
  variant ? (VARIANT_VALUES[variant] ?? undefined) : undefined;
