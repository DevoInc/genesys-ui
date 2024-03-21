import * as React from 'react';

import { IStyledOverloadCss } from '../../../declarations';
import { Typography } from '../../Typography';

export interface BannerHeadingProps extends IStyledOverloadCss {
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
