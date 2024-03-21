import * as React from 'react';
import {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILayoutBoxCss,
  IStyledOverloadCss,
} from '../../declarations';

import { StyledThumbnail, StyledThumbnailProps } from './StyledThumbnail';

export interface ThumbnailProps
  extends StyledThumbnailProps,
    // native
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<ILayoutBoxCss, 'display' | 'height' | 'width'>,
    IStyledOverloadCss {}

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
