import * as React from 'react';
import { MeasuresConfig, TableStyles } from '../../declarations';

interface TableContextProps {
  styles: TableStyles;
  measures: MeasuresConfig;
}

export const TableContext = React.createContext<TableContextProps>({
  density: 'default',
  row: { height: 'md' },
  wrapper: {
    maxHeight: 'none',
  },
});
