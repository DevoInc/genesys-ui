import * as React from 'react';

import type { ITable } from '../declarations';

export interface ITableContext extends ITable {}

export const TableContext = React.createContext<ITableContext>({
  density: 'default',
  data: [],
  striped: false,
  maxHeight: 'none',
  highlightColumnsOnHover: true,
  resizableColumns: false,
});
