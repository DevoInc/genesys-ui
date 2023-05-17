import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledHighlighted } from '../../StyledTypography';

export interface HighlightedProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
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
