import { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import * as React from 'react';

import { StyledSrOnly } from '../../StyledTypography';

export interface SrOnlyProps
  // native
  extends Pick<IGlobalAttrs, 'role' | 'id'>,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const SrOnly: React.FC<SrOnlyProps> = ({ children, ...nativeProps }) => (
  <StyledSrOnly {...nativeProps}>{children}</StyledSrOnly>
);
