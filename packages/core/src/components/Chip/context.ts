import * as React from 'react';

import { ChipSize } from './declarations';

export interface ChipContextProps {
  size: ChipSize;
  iconId?: string;
}

export const ChipContext = React.createContext<ChipContextProps>({
  size: 'md',
});
