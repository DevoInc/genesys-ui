import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledSup } from '../../StyledTypography';

export interface SupProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Sup: React.FC<SupProps> = ({ children, ...nativeProps }) => (
  <StyledSup {...nativeProps}>{children}</StyledSup>
);
