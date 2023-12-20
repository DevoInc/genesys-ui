import * as React from 'react';
import { merge } from 'lodash';
import {
  ColDef,
  MeasuresConfig,
  SizesConfig,
  TableOptionsProps,
} from '../../declarations';

export interface TableContextProps
  extends Pick<TableOptionsProps, 'visualOptions' | 'texts'> {
  measures: MeasuresConfig;
  sizes: SizesConfig;
  colDefs: ColDef[];
  showFilters: boolean;
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
      editorTextLabel: 'Edit this text content',
    },
  },
  measures: {
    wrapper: {
      height: 500,
      width: 1200,
    },
    body: {
      total: {
        height: 500,
        width: 1200,
      },
      visible: {
        height: 500,
        width: 1200,
      },
    },
  },
  sizes: {
    head: { height: 42 },
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
  colDefs: [],
  showFilters: false,
};

export const TableContext =
  React.createContext<TableContextProps>(defaultTableContext);

export const TableContextProvider = ({
  children,
  value,
}: TableContextProviderProps) => {
  const [context, setContext] = React.useState({
    ...merge({}, defaultTableContext, value),
  });

  React.useEffect(() => {
    setContext(merge({}, defaultTableContext, value));
  }, [value]);

  return (
    <TableContext.Provider value={context}>{children}</TableContext.Provider>
  );
};
