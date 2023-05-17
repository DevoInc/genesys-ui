import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledAbbr } from '../../StyledTypography';

export interface AbbrProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the Abbr */
  children?: React.ReactNode;
}

export const Abbr: React.FC<AbbrProps> = ({
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledAbbr {...nativeProps} title={tooltip}>
    {children}
  </StyledAbbr>
);
