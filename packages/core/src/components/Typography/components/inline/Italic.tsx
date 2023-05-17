import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledItalic } from '../../StyledTypography';

export interface ItalicProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Italic: React.FC<ItalicProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledItalic {...nativeProps} title={tooltip}>
    {children}
  </StyledItalic>
);
