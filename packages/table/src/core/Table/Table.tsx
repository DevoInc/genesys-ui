import * as React from 'react';

import type { TColDef, ITable, TRowDef } from '../../declarations';

import { ROW_HEIGHT_MD } from '../../constants';
import { TableContext } from '../../context';
import { TableWrapper } from '../TableWrapper';
import { mergePresets } from '../../presets';

export interface TableProps extends ITable {}

export const Table: React.FC<TableProps> = ({
  defaultColDef,
  defaultRowDef,
  colDefs = [],
  rowDefs = [],
  cellDefs = [],
  headerCellDefs = [],
  columnPresets = [],
  rowPresets = [],
  density = 'default',
  striped = false,
  stripedFn = (index) => (index + 1) % 2 === 0,
  maxHeight,
  minHeight,
  minWidth,
  showFilters,
  onSort,
  onFilter,

  onCellMouseEnter,
  onCellMouseLeave,
  onCellClick,
  onCellDoubleClick,
  onCellKeyUp,
  onCellKeyDown,

  onHeaderCellClick,
  onHeaderCellDoubleClick,
  onHeaderCellKeyUp,
  onHeaderCellKeyDown,

  onRowDoubleClick,
  onRowKeyUp,
  onRowKeyDown,

  highlightRowOnHover,
  highlightRowOnHoverFn,
  onCellDataChange,
  data,
  id,
  resizableColumns = false,
  rowHeight = ROW_HEIGHT_MD,
}) => {
  debugger;
  const mergedColDefs: TColDef[] = React.useMemo(
    mergePresets(colDefs, columnPresets, defaultColDef),
    [defaultColDef, columnPresets, colDefs],
  );
  const mergedRowDefs: TRowDef[] = React.useMemo(
    mergePresets(rowDefs, rowPresets, defaultRowDef),
    [defaultRowDef, rowPresets, rowDefs],
  );
  return (
    <TableContext.Provider
      value={{
        id,
        data,
        colDefs: mergedColDefs,
        showFilters,
        striped,
        stripedFn,
        maxHeight,
        minHeight,
        minWidth,
        density,
        resizableColumns,
        onSort,
        onFilter,

        onCellMouseEnter,
        onCellMouseLeave,
        onCellDataChange,
        onCellClick,
        onCellDoubleClick,
        onCellKeyUp,
        onCellKeyDown,

        onHeaderCellClick,
        onHeaderCellDoubleClick,
        onHeaderCellKeyUp,
        onHeaderCellKeyDown,

        onRowDoubleClick,
        onRowKeyUp,
        onRowKeyDown,

        highlightRowOnHover,
        highlightRowOnHoverFn,
        rowHeight,
        rowDefs: mergedRowDefs,
        cellDefs,
        headerCellDefs,
      }}
    >
      <TableWrapper />
    </TableContext.Provider>
  );
};
