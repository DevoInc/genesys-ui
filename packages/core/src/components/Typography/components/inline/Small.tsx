import { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import * as React from 'react';

import { StyledSmall } from '../../StyledTypography';

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
