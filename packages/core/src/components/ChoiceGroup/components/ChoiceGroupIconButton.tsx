import * as React from 'react';

import { ChoiceGroupContext } from '../context';

import { IconButton, IconButtonProps } from '../../IconButton';

export interface ChoiceGroupIconButtonProps
  extends Omit<IconButtonProps, 'colorScheme'> {
  colorScheme?: 'neutral' | 'quiet';
}

export const ChoiceGroupIconButton: React.FC<ChoiceGroupIconButtonProps> = ({
  children,
  ...restIconButtonProps
}) => {
  const context = React.useContext(ChoiceGroupContext);
  return (
    <IconButton {...context} {...restIconButtonProps}>
      {children}
    </IconButton>
  );
};
