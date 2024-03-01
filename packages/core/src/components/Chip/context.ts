import * as React from 'react';

import { ChipSize } from './declarations';

export interface ChipContextProps {
  size: ChipSize;
  icon?: React.ReactNode;
}

export const ChipContext = React.createContext<ChipContextProps>({
  size: 'md',
});
