import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledSrOnly } from '../../StyledTypography';

export interface SrOnlyProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const SrOnly: React.FC<SrOnlyProps> = ({ children, ...nativeProps }) => (
  <StyledSrOnly {...nativeProps}>{children}</StyledSrOnly>
);
