import * as React from 'react';

import { StyledHeading } from './StyledHeading';
import type {
  IContentEditableAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { ITypographyHeading } from './declarations';

export interface HeadingProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IContentEditableAttrs,
    IGlobalAriaAttrs,
    IFocusEventAttrs,
    ITypographyHeading {
  /** Content of the heading */
  children?: React.ReactNode;
  forwardedRef?: React.Ref<HTMLElement> | null;
}

export const Heading: React.FC<HeadingProps> = ({
  colorScheme = 'base',
  forwardedRef,
  gutterBottom = '0',
  textAlign = 'left',
  truncateLine,
  size = 'h4',
  children,
  style,
  tooltip,
  ...nativeProps
}) => (
  <StyledHeading
    {...nativeProps}
    $colorScheme={colorScheme}
    css={style}
    $truncateLine={truncateLine}
    $gutterBottom={gutterBottom}
    ref={forwardedRef}
    $size={size}
    $textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledHeading>
);
