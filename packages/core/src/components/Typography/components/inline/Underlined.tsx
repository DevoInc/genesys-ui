import { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import * as React from 'react';

import { StyledUnderlined } from '../../StyledTypography';

export interface UnderlinedProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const Underlined: React.FC<UnderlinedProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledUnderlined {...nativeProps} title={tooltip}>
    {children}
  </StyledUnderlined>
);
