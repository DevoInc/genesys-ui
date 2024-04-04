import * as React from 'react';

import type { TChipSize } from './declarations';

export interface ChipContextProps {
  size: TChipSize;
  icon?: React.ReactNode;
}

export const ChipContext = React.createContext<ChipContextProps>({
  size: 'md',
});
