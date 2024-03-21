import * as React from 'react';

import { IStyledOverloadCss } from '../../../declarations';
import { Typography } from '../../Typography';

export interface BannerContentProps extends IStyledOverloadCss {
  children: React.ReactNode;
}

export const BannerContent: React.FC<BannerContentProps> = ({
  children,
  styles,
}) =>
  typeof children === 'string' ? (
    <Typography.Paragraph styles={styles}>{children}</Typography.Paragraph>
  ) : React.isValidElement(children) ? (
    children
  ) : null;
