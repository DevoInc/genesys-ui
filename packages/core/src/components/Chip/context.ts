import * as React from 'react';

import { ChipProps } from './Chip';

export interface ChipContextProps {
  size: ChipProps['size'];
  iconId?: ChipProps['icon'];
}

export const ChipContext = React.createContext<ChipContextProps>({
  size: 'md',
});
