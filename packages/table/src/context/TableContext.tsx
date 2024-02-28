import * as React from 'react';

import { ITable } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableContextProps extends ITable {}

export const TableContext = React.createContext<TableContextProps>({
  density: 'default',
  data: [],
  striped: false,
  maxHeight: 'none',
  highlightColumnsOnHover: true,
  resizableColumns: false,
});
