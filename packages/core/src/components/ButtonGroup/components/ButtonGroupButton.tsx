import * as React from 'react';

import { ButtonGroupContext } from '../context';

import { Button, type ButtonProps } from '../../Button';

export interface ButtonGroupButtonProps extends ButtonProps {}

export const ButtonGroupButton: React.FC<ButtonGroupButtonProps> = ({
  ...restButtonProps
}) => {
  const context = React.useContext(ButtonGroupContext);
  return <Button {...context} {...restButtonProps} />;
};

ButtonGroupButton.displayName = 'ButtonGroupButton';
