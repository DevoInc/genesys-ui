import * as React from 'react';

import { StyledInserted } from './StyledInserted';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface InsertedProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
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
