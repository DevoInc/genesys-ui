import * as React from 'react';
import type {
  IContentEditableAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledHeading, type StyledHeadingProps } from '../../StyledTypography';

export interface HeadingProps
  extends StyledHeadingProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IContentEditableAttrs,
    IGlobalAriaAttrs,
    IFocusEventAttrs {
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
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledHeading
    {...nativeProps}
    colorScheme={colorScheme}
    css={styles}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    ref={forwardedRef}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledHeading>
);
