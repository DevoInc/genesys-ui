import * as React from 'react';

import { ChoiceGroupProps } from './ChoiceGroup';

export interface ChoiceGroupContextProps {
  colorScheme?: ChoiceGroupProps['colorScheme'];
  selectionScheme: ChoiceGroupProps['selectionScheme'];
  size: ChoiceGroupProps['size'];
}

export const ChoiceGroupContext = React.createContext<ChoiceGroupContextProps>({
  selectionScheme: 'multiple',
  size: 'md',
});
