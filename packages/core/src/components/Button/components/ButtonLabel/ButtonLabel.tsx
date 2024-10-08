import * as React from 'react';

import type {
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
  style,
}) => (
  <StyledButtonLabel as={as} style={style}>
    {children}
  </StyledButtonLabel>
);
