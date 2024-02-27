import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  ILayoutBoxCss,
  StyledOverloadCssProps,
} from '../../declarations';

import { StyledThumbnail, StyledThumbnailProps } from './StyledThumbnail';

export interface ThumbnailProps
  extends StyledThumbnailProps,
    // native
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<ILayoutBoxCss, 'display' | 'height' | 'width'>,
    StyledOverloadCssProps {}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  size = 'md',
  disabled,
  img,
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledThumbnail
    {...nativeProps}
    alt={img ? img : 'Thumbnail image'}
    css={styles}
    disabled={disabled}
    img={img}
    size={size}
    src={img}
    title={tooltip}
  />
);
