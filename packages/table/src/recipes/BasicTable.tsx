import * as React from 'react';
import { useClickAway } from 'ahooks';

import { Table, type TableProps } from '../core';
import { listColumnPresets, listRowPresets, mergePresets } from '../presets';
import { CellEditModeWrapper } from '../wrapper/CellEditModeWrapper';
import { useCellDefs } from '../hooks';
import { TColDef } from '../declarations';
import { useHeaderCellDefs } from '../hooks/useHeaderCellDefs';

export const BasicTable: React.FC<TableProps> = ({
  columnPresets,
  rowPresets,
  highlightRowOnHoverFn,
  colDefs,
  headerCellDefs = [],
  onCellClick,
  onCellDoubleClick,
  onCellKeyDown,
  cellDefs = [],
  defaultColDef,
  onSorting,
  onCellDataChange,
  id,
  ...props
}) => {
  const {
    newCellDefs,
    selectedCells,
    setEditModeCell,
    setKeyEditModeCell,
    cancellAllEditModeCell,
  } = useCellDefs(cellDefs);

  const { newHeaderCellDefs, selectedHeaderCell, sortColumn } =
    useHeaderCellDefs(headerCellDefs);

  const newColumnPresets = [
    ...(columnPresets ?? []),
    ...Object.values(listColumnPresets),
  ];

  const mergedColDefs: TColDef[] = React.useMemo(
    mergePresets(colDefs, newColumnPresets, defaultColDef),
    [defaultColDef, newColumnPresets, colDefs],
  );
  // const ref = React.useRef<HTMLDivElement>();

  // useClickAway(
  //   () => {
  //     cancellAllEditModeCell();
  //   },
  //   () => document.getElementById('test'),
  // );
  return (
    <Table
      id={id}
      {...props}
      colDefs={mergedColDefs.map((col) =>
        col.editable && !col.cellWrapper
          ? { ...col, cellWrapper: CellEditModeWrapper }
          : { ...col },
      )}
      onCellDataChange={onCellDataChange}
      cellDefs={newCellDefs}
      headerCellDefs={newHeaderCellDefs}
      onCellClick={({ event, colDef, rowDef, rowIndex }) => {
        debugger;
        selectedCells({ event, colDef, rowDef, rowIndex });
        if (onCellClick) {
          onCellClick({ event, colDef, rowDef, rowIndex });
        }
      }}
      onCellDoubleClick={({ colDef, rowDef, rowIndex }) => {
        setEditModeCell({ colDef, rowDef, rowIndex });
        if (onCellDoubleClick) {
          onCellDoubleClick({ colDef, rowDef, rowIndex });
        }
      }}
      onCellKeyDown={({ event, colDef, rowDef, rowIndex }) => {
        setKeyEditModeCell({
          event,
          key: 'Enter',
          colDef,
          rowDef,
          rowIndex,
        });
        if (onCellKeyDown) {
          onCellKeyDown({ event, colDef, rowDef, rowIndex });
        }
      }}
      onCellKeyUp={({ event }) => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
          console.log({ newCellDefs });
          //await navigator.clipboard.writeText(newCellDefs);
        }
      }}
      onHeaderCellClick={({ colDef }) => {
        selectedHeaderCell({
          colId: colDef.id,
        });
      }}
      onHeaderCellKeyDown={({ event, colDef }) => {
        sortColumn({ event, key: 'Enter', colDef, onSort: onSorting });
      }}
      columnPresets={newColumnPresets}
      rowPresets={[...(rowPresets ?? []), ...Object.values(listRowPresets)]}
      highlightRowOnHoverFn={
        highlightRowOnHoverFn || ((rowDef) => rowDef.preset !== 'isAfterRow')
      }
    />
  );
};
