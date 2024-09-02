import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import { StyledLead } from './StyledLead';
import type { ITypography } from '../../declarations';

export interface LeadProps
  extends Pick<
      ITypography,
      'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
    >,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the lead */
  children?: React.ReactNode;
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
    $colorScheme={colorScheme}
    css={style}
    $truncateLine={truncateLine}
    $gutterBottom={gutterBottom}
    $size={size}
    $textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledLead>
);
