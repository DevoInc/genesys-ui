import * as React from 'react';

import type { IAvatar } from './declarations';
import {
  AVATAR_IMAGE_FIT_DEFAULT_VALUE,
  AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
  AVATAR_SIZE_DEFAULT_VALUE,
  AVATAR_VARIANT_DEFAULT_VALUE,
} from './constants';

export interface AvatarContextProps
  extends Pick<
    IAvatar,
    'imageFit' | 'imagePosition' | 'imageSrc' | 'size' | 'variant'
  > {}

export const AvatarContext = React.createContext<AvatarContextProps>({
  size: AVATAR_SIZE_DEFAULT_VALUE,
  variant: AVATAR_VARIANT_DEFAULT_VALUE,
  imageFit: AVATAR_IMAGE_FIT_DEFAULT_VALUE,
  imagePosition: AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
});
