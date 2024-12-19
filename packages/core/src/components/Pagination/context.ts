import * as React from 'react';

import type { PaginationProps } from './Pagination';
import { DEFAULT_TEXTS } from './constants';

export interface ChipGroupContextProps {
  size: PaginationProps['size'];
  texts: PaginationProps['texts'];
}

export const PaginationContext = React.createContext<ChipGroupContextProps>({
  size: 'md',
  texts: DEFAULT_TEXTS,
});
