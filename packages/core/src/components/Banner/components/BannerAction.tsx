import * as React from 'react';

import { BannerContext } from '../context';

import { Button, type ButtonProps } from '../../Button';

export interface BannerActionProps extends ButtonProps {}

export const BannerAction: React.FC<BannerActionProps> = ({
  colorScheme,
  size = 'sm',
  ...restButtonProps
}) => {
  const context = React.useContext(BannerContext);
  return (
    <Button
      {...restButtonProps}
      colorScheme={colorScheme || context.status}
      size={size}
    />
  );
};
