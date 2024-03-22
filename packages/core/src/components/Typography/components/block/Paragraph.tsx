import * as React from 'react';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import {
  StyledParagraph,
  type StyledParagraphProps,
} from '../../StyledTypography';

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
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledParagraph
    {...nativeProps}
    colorScheme={colorScheme}
    css={styles}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledParagraph>
);
