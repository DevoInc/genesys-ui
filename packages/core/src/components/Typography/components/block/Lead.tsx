import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledLead, StyledLeadProps } from '../../StyledTypography';

export interface LeadProps
  extends StyledLeadProps,
    // native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
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
