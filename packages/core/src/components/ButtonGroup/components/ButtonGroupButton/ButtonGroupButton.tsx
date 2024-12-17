import * as React from 'react';

import { ButtonGroupContext } from '../../context';
import { Button, type ButtonProps } from '../../../Button';

export interface ButtonGroupButtonProps extends ButtonProps {}

export const ButtonGroupButton = React.forwardRef<
  HTMLElement,
  ButtonGroupButtonProps
>(({ ...restButtonProps }, ref) => {
  const { colorScheme, size } = React.useContext(ButtonGroupContext);
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      {...restButtonProps}
      ref={ref}
    />
  );
});

ButtonGroupButton.displayName = 'ButtonGroupButton';
