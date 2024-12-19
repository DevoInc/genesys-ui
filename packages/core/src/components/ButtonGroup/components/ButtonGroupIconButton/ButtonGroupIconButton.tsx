import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import { IconButton, type IconButtonProps } from '../../../IconButton';

export interface ButtonGroupIconButtonProps extends IconButtonProps {}

export const ButtonGroupIconButton: React.FC<
  Resolve<ButtonGroupIconButtonProps>
> = ({ children, ref, ...restIconButtonProps }) => {
  const { colorScheme, size } = React.useContext(ButtonGroupContext);
  return (
    <IconButton
      colorScheme={colorScheme}
      size={size}
      {...restIconButtonProps}
      ref={ref}
    >
      {children}
    </IconButton>
  );
};
