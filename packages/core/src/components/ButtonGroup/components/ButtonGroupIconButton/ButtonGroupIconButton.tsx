import * as React from 'react';

import { ButtonGroupContext } from '../../context';
import { IconButton, type IconButtonProps } from '../../../IconButton';

export interface ButtonGroupIconButtonProps extends IconButtonProps {}

export const ButtonGroupIconButton = React.forwardRef<
  HTMLElement,
  ButtonGroupIconButtonProps
>(({ children, ...restIconButtonProps }, ref) => {
  const context = React.useContext(ButtonGroupContext);
  return (
    <IconButton {...context} {...restIconButtonProps} ref={ref}>
      {children}
    </IconButton>
  );
});

ButtonGroupIconButton.displayName = 'ButtonGroupIconButton';
