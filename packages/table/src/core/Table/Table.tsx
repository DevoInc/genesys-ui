import * as React from 'react';

import { ROW_HEIGHT_MD } from '../../constants';
import type { TColDef, ITable } from '../../declarations';
import { TableContext, WrapperContextProvider } from '../../context';
import { TableWrapper } from '../TableWrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableProps extends ITable {}

export const Table: React.FC<TableProps> = ({
  defaultColDef,
  colDefs = [],
  rowDefs = [], 
  columnPresets = [],
  density = 'default',
  striped = false,
  maxHeight = 'none',
  minHeight,
  minWidth,
  showFilters,
  onSort,
  onFilter,
  data,
  highlightColumnsOnHover = false,
  resizableColumns = false,
  rowHeight = ROW_HEIGHT_MD,
}) => {
  const mergedColDefs: TColDef[] = React.useMemo(
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
        onFilter,
        rowHeight,
        rowDefs,
      }}
    >
      <WrapperContextProvider>
        <TableWrapper />
      </WrapperContextProvider>
    </TableContext.Provider>
  );
};
