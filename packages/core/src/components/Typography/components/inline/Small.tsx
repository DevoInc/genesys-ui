import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledSmall } from '../../StyledTypography';

export interface SmallProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Small: React.FC<SmallProps> = ({ children, ...nativeProps }) => (
  <StyledSmall {...nativeProps}>{children}</StyledSmall>
);
