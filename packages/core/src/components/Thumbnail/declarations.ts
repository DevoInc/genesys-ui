import React from 'react';
import type { ILayoutBoxCss } from '../../declarations';

export interface IThumbnail extends Pick<ILayoutBoxCss, 'display'> {
  /** Makes the thumbnail img disabled */
  disabled?: boolean;
  /** Sets how the img, should be resized to fit its container. More info in https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit */
  objectFit?: React.CSSProperties['objectFit'];
  /** Specifies the alignment of the img within the element's box. Areas of the box which aren't covered by the img object will show the element's background. More info in https://developer.mozilla.org/en-US/docs/Web/CSS/object-position */
  objectPosition?: React.CSSProperties['objectPosition'];
  /** Specifies the css border-radius or the img. */
  borderRadius?: React.CSSProperties['borderRadius'];
}
