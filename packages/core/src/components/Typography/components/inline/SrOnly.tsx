import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledSrOnly } from '../../StyledTypography';

export interface SrOnlyProps
  // native
  extends Pick<GlobalAttrProps, 'role' | 'id'>,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const SrOnly: React.FC<SrOnlyProps> = ({ children, ...nativeProps }) => (
  <StyledSrOnly {...nativeProps}>{children}</StyledSrOnly>
);
