import * as React from 'react';

import { DEFAULT_TEXTS } from './constants';
import type { IPaginationCommonInterface } from './declarations';

export interface ChipGroupContextProps {
  size: IPaginationCommonInterface['size'];
  texts: IPaginationCommonInterface['texts'];
}

export const PaginationContext = React.createContext<ChipGroupContextProps>({
  size: 'md',
  texts: DEFAULT_TEXTS,
});
