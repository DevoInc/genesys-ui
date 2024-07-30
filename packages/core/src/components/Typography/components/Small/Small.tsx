import * as React from 'react';

import { StyledSmall } from './StyledSmall';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface SmallProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
  children?: React.ReactNode;
}

export const Small: React.FC<SmallProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledSmall {...nativeProps} title={tooltip}>
    {children}
  </StyledSmall>
);
