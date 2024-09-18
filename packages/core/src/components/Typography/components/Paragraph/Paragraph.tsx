import * as React from 'react';

import { StyledParagraph } from './StyledParagraph';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { ITypography } from '../../declarations';

export interface ParagraphProps
  extends Pick<
      ITypography,
      'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
    >,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the Paragraph */
  children?: React.ReactNode;
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
    $colorScheme={colorScheme}
    css={style}
    $truncateLine={truncateLine}
    $gutterBottom={gutterBottom}
    $size={size}
    $textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledParagraph>
);
