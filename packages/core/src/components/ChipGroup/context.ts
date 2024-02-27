import * as React from 'react';

import type { ChipProps } from '../Chip';
import type { FormGroupProps } from '../Form';

export interface ChipGroupContextProps {
  name?: FormGroupProps['name'];
  selectionScheme?: ChipProps['selectionScheme'];
  size: ChipProps['size'];
}

export const ChipGroupContext = React.createContext<ChipGroupContextProps>({
  size: 'md',
});
