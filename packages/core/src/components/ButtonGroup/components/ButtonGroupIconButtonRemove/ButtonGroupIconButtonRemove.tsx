import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import {
  IconButtonRemove,
  type IconButtonRemoveProps,
} from '../../../IconButton';

export interface ButtonGroupIconButtonRemoveProps
  extends IconButtonRemoveProps {}

export const ButtonGroupIconButtonRemove = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupIconButtonRemoveProps>
>(({ ...iconButtonCollapseProps }, ref) => {
  const { size } = React.useContext(ButtonGroupContext);
  return (
    <IconButtonRemove ref={ref} size={size} {...iconButtonCollapseProps} />
  );
});
