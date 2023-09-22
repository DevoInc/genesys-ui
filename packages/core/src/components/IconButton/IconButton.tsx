import * as React from 'react';

import { type Resolve, Button, type ButtonProps } from '../../index';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IconButtonProps
  extends Omit<ButtonProps, 'squared' | 'iconPosition'> {}

export const IconButton = React.forwardRef<
  HTMLElement,
  Resolve<IconButtonProps>
>(
  (
    {
      colorScheme = 'neutral',
      children,
      size = 'md',
      state = 'enabled',
      ...restButtonProps
    },
    ref,
  ) => (
    <Button
      {...restButtonProps}
      ref={ref}
      colorScheme={colorScheme}
      size={size}
      squared
      state={state}
    >
      {children}
    </Button>
  ),
);

IconButton.displayName = 'IconButton';
