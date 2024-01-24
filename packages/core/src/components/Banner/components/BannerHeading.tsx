import * as React from 'react';

import { StyledOverloadCssProps } from '../../../declarations';
import { Typography } from '../../Typography';

export interface BannerHeadingProps extends StyledOverloadCssProps {
  children: React.ReactNode;
}

export const BannerHeading: React.FC<BannerHeadingProps> = ({
  children,
  styles,
}) => (
  <Typography.Heading size="h5" styles={styles}>
    {children}
  </Typography.Heading>
);
