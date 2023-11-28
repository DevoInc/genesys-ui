import * as React from 'react';
import { MeasuresConfig, TableVisualOptions } from '../../declarations';

interface TableContextProps {
  visualOptions: TableVisualOptions;
  measures: MeasuresConfig;
}

export const TableContext = React.createContext<TableContextProps>({
  visualOptions: {
    density: 'default',
    row: { height: 'md' },
    striped: false,
    wrapper: {
      maxHeight: 'none',
    },
  },
  measures: {
    head: { height: 36 },
    row: {
      height: {
        md: 36,
        lg: 60,
        xl: 72,
        xxl: 84,
        xxxl: 96,
      },
    },
    cell: {
      horPad: 12,
      verPad: 8,
    },
  },
});
