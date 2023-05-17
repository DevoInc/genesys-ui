import {
  ContentEditableAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { HeadingType } from '../../constants';
import { StyledHeading, StyledHeadingProps } from '../../StyledTypography';

export interface HeadingProps
  extends StyledHeadingProps,
    // native
    StyledPolymorphicProps,
    GlobalAttrProps,
    ContentEditableAttrProps,
    GlobalAriaProps,
    FocusEventAttrProps {
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
  tooltip,
  ...nativeProps
}) => (
  <StyledHeading
    {...nativeProps}
    colorScheme={colorScheme}
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
