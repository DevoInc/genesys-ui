import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import {
  IconButtonCollapse,
  type IconButtonCollapseProps,
} from '../../../IconButton';

export interface ButtonGroupIconButtonCollapseProps
  extends IconButtonCollapseProps {}

export const ButtonGroupIconButtonCollapse = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupIconButtonCollapseProps>
>(({ ...iconButtonCollapseProps }, ref) => {
  const { size } = React.useContext(ButtonGroupContext);
  return (
    <IconButtonCollapse ref={ref} size={size} {...iconButtonCollapseProps} />
  );
});
