import * as React from 'react';

import { StyledCodeInline } from './StyledCodeInline';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface CodeInlineProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const CodeInline: React.FC<CodeInlineProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledCodeInline {...nativeProps} title={tooltip}>
    {children}
  </StyledCodeInline>
);
