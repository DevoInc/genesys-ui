import {
  ContentEditableAttrProps,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import * as React from 'react';

import { HeadingType } from '../../constants';
import { StyledHeading, StyledHeadingProps } from '../../StyledTypography';

export interface HeadingProps
  extends StyledHeadingProps,
    // native
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    ContentEditableAttrProps,
    IGlobalAriaAttrs,
    IFocusEventAttrs {
  /** Type of the Heading: h1-h8, hero, caps... which defines the specific styles of the heading: bold, uppercase... etc. */
  size?: HeadingType;
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
