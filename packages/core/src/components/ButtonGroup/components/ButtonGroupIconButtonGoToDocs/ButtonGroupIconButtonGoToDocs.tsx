import * as React from 'react';

import { type Resolve } from '../../../../typeFunctions';
import { ButtonGroupContext } from '../../context';
import {
  IconButtonGoToDocs,
  type IconButtonGoToDocsProps,
} from '../../../IconButton';

export interface ButtonGroupIconButtonGoToDocsProps
  extends IconButtonGoToDocsProps {}

export const ButtonGroupIconButtonGoToDocs = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonGroupIconButtonGoToDocsProps>
>(({ ...iconButtonGoToDocsProps }, ref) => {
  const { size } = React.useContext(ButtonGroupContext);
  return (
    <IconButtonGoToDocs
      ref={ref}
      size={size === 'lg' ? 'md' : size}
      {...iconButtonGoToDocsProps}
    />
  );
});
