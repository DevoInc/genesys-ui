import * as React from 'react';

import type { ITable } from '../declarations';

export interface ITableContext extends ITable {}

export const TableContext = React.createContext<ITableContext>({
  id: '',
  density: 'default',
  data: [],
  striped: false,
  resizableColumns: false,
});
