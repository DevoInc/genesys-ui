import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import { Button, type ButtonProps } from '../../../Button';

export interface ButtonGroupButtonProps extends ButtonProps {}

export const ButtonGroupButton: React.FC<Resolve<ButtonGroupButtonProps>> = ({
  ref,
  ...restButtonProps
}) => {
  const { colorScheme, size } = React.useContext(ButtonGroupContext);
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      {...restButtonProps}
      ref={ref}
    />
  );
};
