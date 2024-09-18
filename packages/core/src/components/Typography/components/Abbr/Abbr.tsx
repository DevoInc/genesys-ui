import * as React from 'react';

import { StyledAbbr } from './StyledAbbr';
import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';

export interface AbbrProps
  // native
  extends IGlobalAttrs,
    IGlobalAriaAttrs {
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
