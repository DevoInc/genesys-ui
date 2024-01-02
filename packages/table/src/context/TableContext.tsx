import * as React from 'react';

import { TableProps } from '../core/Table';

export const TableContext = React.createContext<TableProps>({
  density: 'default',
  data: [],
  striped: false,
  maxHeight: 'none',
  highlightColumnsOnHover: true,
  resizableColumns: false,
});
