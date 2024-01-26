import * as React from 'react';

import { ChipGroupProps } from './ChipGroup';

export interface ChipGroupContextProps {
  name?: ChipGroupProps['name'];
  selectionScheme?: ChipGroupProps['selectionScheme'];
  size: ChipGroupProps['size'];
}

export const ChipGroupContext = React.createContext<ChipGroupContextProps>({
  size: 'md',
});
