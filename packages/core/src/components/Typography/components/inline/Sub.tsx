import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledSub } from '../../StyledTypography';

export interface SubProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Sub: React.FC<SubProps> = ({ children, ...nativeProps }) => (
  <StyledSub {...nativeProps}>{children}</StyledSub>
);
