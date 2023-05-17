import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledDeleted } from '../../StyledTypography';

export interface DeletedProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
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
