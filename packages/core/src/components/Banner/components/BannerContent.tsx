import * as React from 'react';

import { StyledOverloadCssProps } from '../../../declarations';
import { Typography } from '../../index';

export interface BannerContentProps extends StyledOverloadCssProps {
  children: React.ReactNode;
}

export const BannerContent: React.FC<BannerContentProps> = ({
  children,
  styles,
}) =>
  typeof children === 'string' ? (
    <Typography.Paragraph gutterBottom="0" styles={styles}>
      {children}
    </Typography.Paragraph>
  ) : React.isValidElement(children) ? (
    children
  ) : null;
