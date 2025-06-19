import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import { IconButtonStop, type IconButtonStopProps } from '../../../IconButton';

export interface ButtonGroupIconButtonStopProps extends IconButtonStopProps {}

export const ButtonGroupIconButtonStop = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupIconButtonStopProps>
>(({ ...iconButtonStopProps }, ref) => {
  const { size } = React.useContext(ButtonGroupContext);
  return <IconButtonStop ref={ref} size={size} {...iconButtonStopProps} />;
});
