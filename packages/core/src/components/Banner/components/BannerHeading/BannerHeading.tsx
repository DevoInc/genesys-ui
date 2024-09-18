import * as React from 'react';

import type { IStyledOverloadCss } from '../../../../declarations';
import type { IBanner } from '../../declarations';
import { BannerContext } from '../../context';
import { Typography } from '../../../Typography';

export interface BannerHeadingProps
  extends IStyledOverloadCss,
    Pick<IBanner, 'subtle' | 'children'> {}

export const BannerHeading: React.FC<BannerHeadingProps> = ({
  children,
  style,
  subtle,
}) => {
  const context = React.useContext(BannerContext);
  const evalSubtle = subtle || context.subtle;
  return (
    <Typography.Heading size={evalSubtle ? 'h6' : 'h5'} style={style}>
      {children}
    </Typography.Heading>
  );
};
