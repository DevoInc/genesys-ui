import * as React from 'react';

import type { IStyledOverloadCss } from '../../../../declarations';
import type { IBanner } from '../../declarations';
import { BannerContext } from '../../context';
import { Typography } from '../../../Typography';

export interface BannerContentProps
  extends IStyledOverloadCss,
    Pick<IBanner, 'children' | 'subtle'> {}

export const BannerContent: React.FC<BannerContentProps> = ({
  children,
  style,
  subtle,
}) => {
  const context = React.useContext(BannerContext);
  const evalSubtle = subtle || context.subtle;
  return typeof children === 'string' ? (
    <Typography.Paragraph
      size={evalSubtle ? 'sm' : undefined}
      truncateLine={evalSubtle ? 1 : undefined}
      colorScheme={evalSubtle ? 'weak' : undefined}
      style={style}
    >
      {children}
    </Typography.Paragraph>
  ) : React.isValidElement(children) ? (
    children
  ) : null;
};
