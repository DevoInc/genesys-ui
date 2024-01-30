import * as React from 'react';

import {
  ColDef,
  Data,
  DefaultColDef,
  Density,
  Preset,
  TextsType,
} from '../../declarations';
import { TableContext, WrapperContextProvider } from '../../context';
import { TableWrapper } from '../TableWrapper';
import { ROW_HEIGHT_MD } from '../../constants';

export type TableProps = {
  data: Data;
  colDefs?: ColDef[];
  defaultColDef?: DefaultColDef;
  columnPresets?: Preset[];
  context?: {
    [key: string]: unknown;
  };
  density?: Density;
  striped?: boolean;
  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  minHeight?: number;
  rowHeight?: number;
  resizableColumns?: boolean;
  highlightColumnsOnHover?: boolean;
  texts?: TextsType;
  showFilters?: boolean;
  onSort?: (colDef: ColDef) => void;
};

export const Table: React.FC<TableProps> = ({
  defaultColDef,
  colDefs = [],
  columnPresets = [],
  density = 'default',
  striped = false,
  maxHeight = 'none',
  minHeight,
  minWidth,
  showFilters,
  onSort,
  data,
  highlightColumnsOnHover = false,
  resizableColumns = false,
  rowHeight = ROW_HEIGHT_MD,
}) => {
  const mergedColDefs: ColDef[] = React.useMemo(
    () =>
      colDefs.map((column) => {
        const preset = columnPresets.find(
          (element) => element.id === column.preset,
        );
        return { ...defaultColDef, ...preset, ...column };
      }),
    [defaultColDef, columnPresets, colDefs],
  );

  return (
    <TableContext.Provider
      value={{
        data,
        colDefs: mergedColDefs,
        showFilters,
        striped,
        maxHeight,
        minHeight,
        minWidth,
        density,
        highlightColumnsOnHover,
        resizableColumns,
        onSort,
        rowHeight,
      }}
    >
      <WrapperContextProvider>
        <TableWrapper />
      </WrapperContextProvider>
    </TableContext.Provider>
  );
};
