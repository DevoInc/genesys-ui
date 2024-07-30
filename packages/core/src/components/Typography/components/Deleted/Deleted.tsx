import * as React from 'react';

import { StyledDeleted } from './StyledDeleted';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface DeletedProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const Deleted: React.FC<DeletedProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledDeleted {...nativeProps} title={tooltip}>
    {children}
  </StyledDeleted>
);
