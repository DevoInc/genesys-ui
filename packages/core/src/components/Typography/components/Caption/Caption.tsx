import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import { StyledCaption } from './StyledCaption';
import type { ITypography } from '../../declarations';

export interface CaptionProps
  extends Pick<
      ITypography,
      'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
    >,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const Caption: React.FC<CaptionProps> = ({
  colorScheme = 'base',
  gutterBottom = '0',
  size = 'sm',
  textAlign = 'left',
  truncateLine = 1,
  children,
  style,
  tooltip,
  ...nativeProps
}) => (
  <StyledCaption
    {...nativeProps}
    $colorScheme={colorScheme}
    css={style}
    $truncateLine={truncateLine}
    $gutterBottom={gutterBottom}
    $size={size}
    $textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledCaption>
);
