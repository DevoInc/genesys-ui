import * as React from 'react';

import { StyledSup } from './StyledSup';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface SupProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const Sup: React.FC<SupProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledSup {...nativeProps} title={tooltip}>
    {children}
  </StyledSup>
);
