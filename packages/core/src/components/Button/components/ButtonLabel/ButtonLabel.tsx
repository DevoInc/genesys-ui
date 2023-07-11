import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { StyledButtonLabel } from './StyledButtonLabel';

export interface ButtonLabelProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {
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
