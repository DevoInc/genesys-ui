import * as React from 'react';

import { BannerContext } from '../../context';

import { Link, type LinkProps } from '../../../Link';

export interface BannerSubtleActionProps extends Omit<LinkProps, 'size'> {}

export const BannerSubtleAction: React.FC<BannerSubtleActionProps> = ({
  colorScheme,
  ...restLinkProps
}) => {
  const context = React.useContext(BannerContext);
  return (
    <Link
      {...restLinkProps}
      colorScheme={colorScheme || context.status}
      size="sm"
    />
  );
};
