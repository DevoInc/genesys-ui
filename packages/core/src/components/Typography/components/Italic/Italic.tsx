import * as React from 'react';

import { StyledItalic } from './StyledItalic';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface ItalicProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
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
