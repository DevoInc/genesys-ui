import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import { Button, type ButtonProps } from '../../../Button';

export interface ButtonGroupButtonProps extends ButtonProps {}

export const ButtonGroupButton = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupButtonProps>
>((props, ref) => {
  const { colorScheme, size } = React.useContext(ButtonGroupContext);
  return <Button colorScheme={colorScheme} size={size} {...props} ref={ref} />;
});
