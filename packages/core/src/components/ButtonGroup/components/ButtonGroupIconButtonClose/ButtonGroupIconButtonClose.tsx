import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import {
  IconButtonClose,
  type IconButtonCloseProps,
} from '../../../IconButton';

export interface ButtonGroupIconButtonCloseProps extends IconButtonCloseProps {}

export const ButtonGroupIconButtonClose = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupIconButtonCloseProps>
>(({ ...iconButtonCloseProps }, ref) => {
  const { size } = React.useContext(ButtonGroupContext);
  return <IconButtonClose ref={ref} size={size} {...iconButtonCloseProps} />;
});
