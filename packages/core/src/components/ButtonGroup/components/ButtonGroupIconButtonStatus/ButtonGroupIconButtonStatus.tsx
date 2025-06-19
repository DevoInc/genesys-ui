import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import {
  IconButtonStatus,
  type IconButtonStatusProps,
} from '../../../IconButton';

export interface ButtonGroupIconButtonStatusProps
  extends IconButtonStatusProps {}

export const ButtonGroupIconButtonStatus = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupIconButtonStatusProps>
>(({ ...iconButtonStatusProps }, ref) => {
  const { size } = React.useContext(ButtonGroupContext);
  return <IconButtonStatus ref={ref} size={size} {...iconButtonStatusProps} />;
});
