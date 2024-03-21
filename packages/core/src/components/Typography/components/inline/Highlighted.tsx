import { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import * as React from 'react';

import { StyledHighlighted } from '../../StyledTypography';

export interface HighlightedProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const Highlighted: React.FC<HighlightedProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledHighlighted {...nativeProps} title={tooltip}>
    {children}
  </StyledHighlighted>
);
