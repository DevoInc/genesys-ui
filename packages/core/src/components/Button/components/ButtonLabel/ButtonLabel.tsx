import * as React from 'react';

import {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledButtonLabel } from './StyledButtonLabel';

export interface ButtonLabelProps
  extends IStyledPolymorphic,
    IStyledOverloadCss {
  children: React.ReactNode;
}

export const ButtonLabel: React.FC<ButtonLabelProps> = ({
  as,
  children,
  styles,
}) => (
  <StyledButtonLabel as={as} css={styles}>
    {children}
  </StyledButtonLabel>
);
