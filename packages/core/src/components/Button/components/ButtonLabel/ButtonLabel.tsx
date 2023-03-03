import * as React from 'react';

import { StyledButtonLabel } from './StyledButtonLabel';

export interface ButtonLabelProps {
  children: React.ReactNode;
}

export const ButtonLabel: React.FC<ButtonLabelProps> = ({ children }) => (
  <StyledButtonLabel>{children}</StyledButtonLabel>
);
