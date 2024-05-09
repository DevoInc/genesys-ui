import * as React from 'react';

import {
  StyledAvatarImage,
  type StyledAvatarImageProps,
} from '../styled/StyledAvatarImage';
import { AvatarContext } from '../context';
import { IStyledOverloadCss } from '../../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarImageProps
  extends IStyledOverloadCss,
    StyledAvatarImageProps {}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  alt,
  customSize,
  imageFit,
  imagePosition,
  src,
  size,
  styles,
  variant,
}) => {
  const context = React.useContext(AvatarContext);
  const evalVariant = variant || context.variant;
  const evalSize = size || context.size;
  const evalSrc = src || context.imageSrc;
  return (
    <StyledAvatarImage
      alt={alt}
      css={styles}
      customSize={customSize}
      imageFit={imageFit}
      imagePosition={imagePosition}
      src={evalSrc}
      size={evalSize}
      variant={evalVariant}
    />
  );
};
