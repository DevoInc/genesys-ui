import * as React from 'react';

import { ButtonGroupContext } from '../context';

import { IconButton, IconButtonProps } from '../../IconButton';

export interface ButtonGroupIconButtonProps extends IconButtonProps {}

export const ButtonGroupIconButton: React.FC<ButtonGroupIconButtonProps> = ({
  children,
  ...restIconButtonProps
}) => {
  const context = React.useContext(ButtonGroupContext);
  return (
    <IconButton {...context} {...restIconButtonProps}>
      {children}
    </IconButton>
  );
};
