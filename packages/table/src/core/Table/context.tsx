import * as React from 'react';
import {
  MeasuresConfig,
  TableVisualOptions,
  TextsType,
} from '../../declarations';

interface TableContextProps {
  visualOptions?: TableVisualOptions;
  texts?: TextsType;
  measures: MeasuresConfig;
}

interface TableContextProviderProps {
  children: React.ReactNode;
  value: TableContextProps;
}

const defaultTableContext: TableContextProps = {
  visualOptions: {
    density: 'default',
    rowHeight: 'md',
    striped: false,
    maxHeight: 'none',
  },
  texts: {
    general: {
      noData: 'No data available.',
      noResults: 'No results found.',
    },
    cell: {
      editTooltip: 'Double click to edit this cell',
      editSaveTooltip: 'Click outside to save the changes',
    },
    editor: {
      editorTextLabel: 'Edit this text content.',
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
};

export const TableContext =
  React.createContext<TableContextProps>(defaultTableContext);

export const TableContextProvider = ({
  children,
  value,
}: TableContextProviderProps) => {
  const [context] = React.useState({
    ...defaultTableContext,
    ...value,
  });

  return (
    <TableContext.Provider value={context}>{children}</TableContext.Provider>
  );
};
