import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledParagraph, StyledParagraphProps } from '../../StyledTypography';

export interface ParagraphProps
  extends StyledParagraphProps,
    // native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the Paragraph */
  children?: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  colorScheme = 'base',
  gutterBottom = 'cmp-md',
  size = 'md',
  textAlign = 'left',
  truncateLine,
  children,
  ...nativeProps
}) => (
  <StyledParagraph
    {...nativeProps}
    colorScheme={colorScheme}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
  >
    {children}
  </StyledParagraph>
);
