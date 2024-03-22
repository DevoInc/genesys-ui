import * as React from 'react';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledLead, type StyledLeadProps } from '../../StyledTypography';

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
  styles,
  textAlign = 'left',
  truncateLine,
  tooltip,
  ...nativeProps
}) => (
  <StyledLead
    {...nativeProps}
    colorScheme={colorScheme}
    css={styles}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledLead>
);
