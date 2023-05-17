import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledInserted } from '../../StyledTypography';

export interface InsertedProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Inserted: React.FC<InsertedProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledInserted {...nativeProps} title={tooltip}>
    {children}
  </StyledInserted>
);
