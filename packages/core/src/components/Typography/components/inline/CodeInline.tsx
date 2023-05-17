import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledCodeInline } from '../../StyledTypography';

export interface CodeInlineProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
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
