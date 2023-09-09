import * as React from 'react';

import { StyledOverloadCssProps } from '../../../declarations';
import { Typography } from '../../index';

export interface BannerHeadingProps extends StyledOverloadCssProps {
  children: React.ReactNode;
}

export const BannerHeading: React.FC<BannerHeadingProps> = ({
  children,
  styles,
}) => (
  <Typography.Heading gutterBottom="cmp-sm" size="h5" styles={styles}>
    {children}
  </Typography.Heading>
);
