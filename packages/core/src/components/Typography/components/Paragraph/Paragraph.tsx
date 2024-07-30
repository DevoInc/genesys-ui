import * as React from 'react';

import { StyledParagraph, type StyledParagraphProps } from './StyledParagraph';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

export interface ParagraphProps
  extends StyledParagraphProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the Paragraph */
  children?: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  colorScheme = 'base',
  gutterBottom,
  size = 'md',
  textAlign = 'left',
  truncateLine,
  children,
  style,
  tooltip,
  ...nativeProps
}) => (
  <StyledParagraph
    {...nativeProps}
    colorScheme={colorScheme}
    style={style}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledParagraph>
);
