import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledCaption, StyledCaptionProps } from '../../StyledTypography';

export interface CaptionProps
  extends StyledCaptionProps,
    //native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Caption: React.FC<CaptionProps> = ({
  colorScheme = 'base',
  gutterBottom = '0',
  size = 'sm',
  textAlign = 'left',
  truncateLine = 1,
  children,
  ...nativeProps
}) => (
  <StyledCaption
    {...nativeProps}
    colorScheme={colorScheme}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
  >
    {children}
  </StyledCaption>
);
