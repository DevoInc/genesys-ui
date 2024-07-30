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
  customSize,
  size,
}: {
  customSize: TAvatarCustomSize;
  size: TAvatarSize;
}): {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
} => {
  const square = customSize?.square || AVATAR_SIZE_SQUARE_MAP[size];
  const width = customSize?.width || square;
  const height = customSize?.height || square;
  return {
    width: width,
    height: height,
  };
};

/**
 * Get the width and the height for the Avatar
 *
 * @param initialsInfo Object with:
 *          initials  - The prop initials for the Avatar
 *          name      - The prop name for the Avatar
 * @return The evaluated initials
 */
export const getAvatarInitials = ({
  initials,
  name,
}: {
  initials: string;
  name: string;
}): string => {
  if (initials) return initials.toUpperCase().substring(0, 2);
  const nameArr = name?.split(' ');
  const firstNameInitials = nameArr?.length > 0 ? nameArr[0].charAt(0) : '';
  const secondNameInitials = nameArr?.length > 1 ? nameArr[1].charAt(0) : '';
  const nameInitials =
    nameArr?.length > 0 ? firstNameInitials + secondNameInitials : '';
  return nameInitials.toUpperCase().substring(0, 2);
};

export const getVariantValue = (variant: TAvatarVariant) =>
  variant ? (VARIANT_VALUES[variant] ?? undefined) : undefined;
