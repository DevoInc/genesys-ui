import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IAvatar } from '../../declarations';
import { AvatarContext } from '../../context';
import { getAvatarSizeConfig } from '../../utils';
import { Thumbnail, type ThumbnailProps } from '../../../Thumbnail';

export interface AvatarImageProps
  extends Pick<ThumbnailProps, 'alt' | 'style'>,
    Pick<
      IAvatar,
      | 'customSize'
      | 'imageFit'
      | 'imagePosition'
      | 'imageSrc'
      | 'size'
      | 'variant'
    > {}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  alt,
  customSize,
  imageFit,
  imagePosition,
  imageSrc,
  size,
  style,
  variant,
}) => {
  const context = React.useContext(AvatarContext);
  const evalVariant = variant || context.variant;
  const evalSize = size || context.size;
  const evalSrc = imageSrc || context.imageSrc;
  const evalImageFit = imageFit || context.imageFit;
  const evalImagePosition = imagePosition || context.imagePosition;
  const theme = useTheme();
  const borderRadius =
    theme.alias.shape.borderRadius[
      evalVariant === 'circle' ? 'full' : evalVariant === 'rounded' ? 'md' : '0'
    ];
  return (
    <Thumbnail
      alt={alt}
      width={
        getAvatarSizeConfig({ $customSize: customSize, $size: evalSize }).width
      }
      height={
        getAvatarSizeConfig({ $customSize: customSize, $size: evalSize }).height
      }
      objectFit={evalImageFit}
      objectPosition={evalImagePosition}
      borderRadius={borderRadius}
      src={evalSrc}
      style={style}
    />
  );
};
