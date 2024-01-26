import * as React from 'react';

import { ButtonGroupProps } from './ButtonGroup';
import { ButtonGroupItemProps } from './components';

export interface ButtonGroupContextProps {
  colorScheme?: ButtonGroupProps['colorScheme'];
  hasQuietButton?: ButtonGroupItemProps['hasQuietButton'];
  size: ButtonGroupProps['size'];
}

export const ButtonGroupContext = React.createContext<ButtonGroupContextProps>({
  size: 'md',
});
