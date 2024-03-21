import { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import * as React from 'react';

import { StyledSub } from '../../StyledTypography';

export interface SubProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const Sub: React.FC<SubProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledSub {...nativeProps} title={tooltip}>
    {children}
  </StyledSub>
);
