import * as React from 'react';

import type { IPaginationCommonInterface } from './declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
