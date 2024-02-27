import * as React from 'react';

import type { TChoiceGroupColorScheme } from './declarations';
import type { IconButtonProps } from '../IconButton';

export interface ChoiceGroupContextProps {
  colorScheme?: TChoiceGroupColorScheme;
  selectionScheme: IconButtonProps['selectionScheme'];
  size: IconButtonProps['size'];
}

export const ChoiceGroupContext = React.createContext<ChoiceGroupContextProps>({
  selectionScheme: 'multiple',
  size: 'md',
});
