import * as React from 'react';

import { StyledOverloadCssProps } from '../../../declarations';
import { Typography } from '../../index';

export interface BoxMessageHeadingProps extends StyledOverloadCssProps {
  children: React.ReactNode;
}

export const BoxMessageHeading: React.FC<BoxMessageHeadingProps> = ({
  children,
  styles,
}) => (
  <Typography.Heading gutterBottom="cmp-sm" size="h5" styles={styles}>
    {children}
  </Typography.Heading>
);
