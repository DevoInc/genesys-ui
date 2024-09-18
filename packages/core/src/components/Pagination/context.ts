import * as React from 'react';

import type { IPaginationCommonInterface } from './declarations';

export interface PaginationContextProps
  extends Pick<
    IPaginationCommonInterface,
    'size' | 'texts' | 'paginationHook' | 'id'
  > {
  paginationInfoText?: string;
}

export const PaginationContext = React.createContext<PaginationContextProps>({
  size: 'md',
});
