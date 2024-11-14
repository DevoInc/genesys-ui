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
  highlightRowOnHover,
  highlightRowOnHoverFn,
  onCellDataChange,
  data,
  id,
  resizableColumns = false,
  rowHeight = ROW_HEIGHT_MD,
  texts = { cell: { editTooltip: 'editcell'}},
  textsCell,
}) => {
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
        highlightRowOnHover,
        highlightRowOnHoverFn,
        rowHeight,
        rowDefs: mergedRowDefs,
        cellDefs,
        texts,
        textsCell,
      }}
    >
      <TableWrapper />
    </TableContext.Provider>
  );
};
