import * as React from 'react';
import {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IImageAttrs,
  ILayoutBoxCss,
  IStyledOverloadCss,
} from '../../declarations';
import type { IThumbnail } from './declarations';

import { StyledThumbnail } from './StyledThumbnail';

export interface ThumbnailProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<ILayoutBoxCss, 'display'>,
    IStyledOverloadCss,
    Omit<IImageAttrs, 'alt'>,
    Required<Pick<IImageAttrs, 'alt'>>,
    IThumbnail {}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  alt,
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  borderRadius,
  display = 'block',
  height,
  id,
  loading,
  referrerPolicy,
  objectFit = 'cover',
  objectPosition,
  role,
  src,
  srcSet,
  disabled,
  styles,
  tooltip,
  useMap,
  width,
}) => (
  <StyledThumbnail
    $disabled={disabled}
    alt={alt}
    aria-describedby={ariaDescribedBy}
    aria-details={ariaDetails}
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    borderRadius={borderRadius}
    css={styles}
    display={display}
    height={height}
    id={id}
    loading={loading}
    objectFit={objectFit}
    objectPosition={objectPosition}
    referrerPolicy={referrerPolicy}
    role={role}
    srcSet={srcSet}
    src={src}
    title={tooltip}
    useMap={useMap}
    width={width}
  />
);
