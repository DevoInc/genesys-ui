import {
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
    GlobalAriaProps {
  /** Type of the Heading: h1-h8, hero, caps... which defines the specific styles of the heading: bold, uppercase... etc. */
  size?: HeadingType;
  /** Content of the heading */
  children?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  colorScheme = 'base',
  gutterBottom = '0',
  textAlign = 'left',
  truncateLine,
  size = 'h4',
  children,
  ...nativeProps
}) => (
  <StyledHeading
    {...nativeProps}
    colorScheme={colorScheme}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
  >
    {children}
  </StyledHeading>
);
