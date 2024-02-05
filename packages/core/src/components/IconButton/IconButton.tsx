import * as React from 'react';

import { type Resolve } from '../../typeFunctions';

import { Button, type ButtonProps } from '../Button';
import {
  ButtonBadge,
  ButtonIcon,
  ButtonLoader,
  ButtonSelection,
} from '../Button/components';
import { IconButtonContainer } from './components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IconButtonProps
  extends Omit<ButtonProps, 'squared' | 'iconPosition'> {}

export const InternalIconButton = React.forwardRef<
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

export const IconButton = InternalIconButton as typeof InternalIconButton & {
  _Badge: typeof ButtonBadge;
  _Container: typeof IconButtonContainer;
  _Icon: typeof ButtonIcon;
  _Loader: typeof ButtonLoader;
  _Selection: typeof ButtonSelection;
};

IconButton._Badge = ButtonBadge;
IconButton._Container = IconButtonContainer;
IconButton._Icon = ButtonIcon;
IconButton._Loader = ButtonLoader;
IconButton._Selection = ButtonSelection;

InternalIconButton.displayName = 'IconButton';
