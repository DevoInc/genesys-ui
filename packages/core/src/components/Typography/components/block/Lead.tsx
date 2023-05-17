import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledLead, StyledLeadProps } from '../../StyledTypography';

export interface LeadProps
  extends StyledLeadProps,
    // native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the lead */
  children?: React.ReactNode;
}

export const Lead: React.FC<LeadProps> = ({
  colorScheme = 'base',
  gutterBottom = '0',
  size = 'md',
  textAlign = 'left',
  truncateLine,
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledLead
    {...nativeProps}
    colorScheme={colorScheme}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledLead>
);
