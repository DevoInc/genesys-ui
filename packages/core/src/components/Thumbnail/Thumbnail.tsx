import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutTransientProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledThumbnail, StyledThumbnailProps } from './styled';

export interface ThumbnailProps
  extends StyledThumbnailProps,
    // native
    GlobalAttrProps,
    GlobalAriaProps,
    LayoutTransientProps,
    Pick<StyledPolymorphicProps, 'className'> {}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  size = 'md',
  disabled,
  img,
  tooltip,
  ...nativeProps
}) => (
  <StyledThumbnail
    {...nativeProps}
    src={img}
    alt={img ? img : 'Thumbnail image'}
    disabled={disabled}
    img={img}
    size={size}
    title={tooltip}
  />
);
