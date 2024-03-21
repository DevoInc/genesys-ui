import { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import * as React from 'react';

import { StyledStrong } from '../../StyledTypography';

export interface StrongProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
  bolder?: boolean;
}

export const Strong: React.FC<StrongProps> = ({
  bolder = false,
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledStrong {...nativeProps} bolder={bolder} title={tooltip}>
    {children}
  </StyledStrong>
);
