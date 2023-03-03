import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledAbbr } from '../../StyledTypography';

export interface AbbrProps
  // native
  extends GlobalAttrProps,
    GlobalAriaProps {
  /** Tooltip to be shown */
  tooltip?: string;
  /** Content of the Abbr */
  children?: React.ReactNode;
}

export const Abbr: React.FC<AbbrProps> = ({
  children,
  tooltip = null,
  ...nativeProps
}) => (
  <StyledAbbr {...nativeProps} data-tip={tooltip}>
    {children}
  </StyledAbbr>
);
