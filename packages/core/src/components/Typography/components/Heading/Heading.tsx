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
import { Resolve } from '../../../../typeFunctions';

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
}

export const Heading = React.forwardRef<HTMLElement, Resolve<HeadingProps>>(
  (
    {
      colorScheme = 'base',
      gutterBottom = '0',
      textAlign = 'left',
      truncateLine,
      size = 'h4',
      children,
      style,
      tooltip,
      ...nativeProps
    },
    ref,
  ) => (
    <StyledHeading
      {...nativeProps}
      $colorScheme={colorScheme}
      css={style}
      $truncateLine={truncateLine}
      $gutterBottom={gutterBottom}
      ref={ref}
      $size={size}
      $textAlign={textAlign}
      title={tooltip}
    >
      {children}
    </StyledHeading>
  ),
);
