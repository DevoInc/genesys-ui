import * as React from 'react';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledLead, type StyledLeadProps } from './StyledLead';

export interface LeadProps
  extends StyledLeadProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the lead */
  children?: React.ReactNode;
}

export const Lead: React.FC<LeadProps> = ({
  children,
  colorScheme = 'base',
  gutterBottom = '0',
  size = 'md',
  style,
  textAlign = 'left',
  truncateLine,
  tooltip,
  ...nativeProps
}) => (
  <StyledLead
    {...nativeProps}
    colorScheme={colorScheme}
    style={style}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledLead>
);
