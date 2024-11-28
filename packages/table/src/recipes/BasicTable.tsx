import * as React from 'react';

import { Table, type TableProps } from '../core';
import { listColumnPresets, listRowPresets, mergePresets } from '../presets';
import { useCellDefs } from '../hooks';
import { TColDef } from '../declarations';
import { useHeaderCellDefs } from '../hooks/useHeaderCellDefs';
import { updatedCellDef } from '../helpers/cellDefs';

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
  onSort,
  onCellDataChange,
  id,
  ...props
}) => {
  const { newCellDefs, selectedCells, setCellDefs } = useCellDefs(cellDefs);

  const { newHeaderCellDefs, selectedHeaderCell } =
    useHeaderCellDefs(headerCellDefs);

  const newColumnPresets = [
    ...(columnPresets ?? []),
    ...Object.values(listColumnPresets),
  ];

  const mergedColDefs: TColDef[] = React.useMemo(
    mergePresets(colDefs, newColumnPresets, defaultColDef),
    [defaultColDef, newColumnPresets, colDefs],
  );

  const OnCellClickAway = (prop) => {
    setCellDefs(
      newCellDefs.map((cell) => {
        return { ...cell, [prop]: false };
      }),
    );
  };
  return (
    <Table
      id={id}
      {...props}
      colDefs={mergedColDefs}
      onCellDataChange={onCellDataChange}
      cellDefs={newCellDefs}
      headerCellDefs={newHeaderCellDefs}
      onCellClickAway={OnCellClickAway}
      onCellClick={({ event, colDef, rowDef, rowIndex }) => {
        selectedCells({ event, colDef, rowDef, rowIndex });
        if (onCellClick) {
          onCellClick({ event, colDef, rowDef, rowIndex });
        }
      }}
      onCellDoubleClick={({ colDef, rowDef, rowIndex }) => {
        if (colDef.editable) {
          setCellDefs(
            updatedCellDef(
              newCellDefs.map((cell) => {
                return { ...cell, isEditMode: false };
              }),
              {
                colId: colDef.id,
                rowId: rowDef?.id || String(rowIndex),
                isEditMode: true,
              },
            ),
          );
        } else if (colDef.isExpandable) {
          setCellDefs(
            updatedCellDef(
              newCellDefs.map((cell) => {
                return { ...cell, isExpanded: false };
              }),
              {
                colId: colDef.id,
                rowId: rowDef?.id || String(rowIndex),
                isExpanded: true,
              },
            ),
          );
        }
        if (onCellDoubleClick) {
          onCellDoubleClick({ colDef, rowDef, rowIndex });
        }
      }}
      onCellKeyDown={({ event, colDef, rowDef, rowIndex }) => {
        if (event.key === 'Enter') {
          if (colDef.editable) {
            setCellDefs(
              updatedCellDef(newCellDefs, {
                colId: colDef.id,
                rowId: rowDef?.id || String(rowIndex),
                isEditMode: true,
              }),
            );
          } else if (colDef.isExpandable) {
            setCellDefs(
              updatedCellDef(newCellDefs, {
                colId: colDef.id,
                rowId: rowDef?.id || String(rowIndex),
                isExpanded: true,
              }),
            );
          }
        }

        if (onCellKeyDown) {
          onCellKeyDown({ event, colDef, rowDef, rowIndex });
        }
      }}
      onCellKeyUp={({ event }) => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
          //await navigator.clipboard.writeText(newCellDefs);
        }
      }}
      onHeaderCellClick={({ colDef, filter }) => {
        if (colDef.sortable && !filter) {
          onSort(colDef);
        }
        selectedHeaderCell({
          colId: colDef.id,
        });
      }}
      onHeaderCellKeyDown={({ event, colDef }) => {
        if (event.key === 'Enter') {
          onSort(colDef);
        }
      }}
      columnPresets={newColumnPresets}
      rowPresets={[...(rowPresets ?? []), ...Object.values(listRowPresets)]}
      highlightRowOnHoverFn={
        highlightRowOnHoverFn || ((rowDef) => rowDef.preset !== 'isAfterRow')
      }
    />
  );
};
