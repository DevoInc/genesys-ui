import * as React from 'react';

import { RowGroupingRenderer } from '../../renderers';
import { updateSelection } from './selection';
import { TCellRenderer, TColDef, TData, TRowDef } from '../../declarations';
import {
  addAfterRowToRowDefs,
  addPresetToRowDefs,
  deleteAfterRowToRowDefs,
  deletePresetRowDefs,
  getRowDef,
  findDataById,
  deleteAfterRowToDataById,
  addAfterRowToData,
} from '../../helpers';
import type { TRowGroupingContext } from '../../facade';

export const useRenderAfterRow = ({
  rowDefs,
  initialSelection,
  onRowDefsChange,
  colDefs: originalColDefs,
}: {
  rowDefs: TRowDef[];
  initialSelection: string[];
  onRowDefsChange: (rowDefs: TRowDef[]) => void;
  colDefs: TColDef[];
}) => {
  const [selection, setSelection] = React.useState<(string | number)[]>(
    initialSelection || [],
  );
  const colDefs = [
    {
      id: 'rowGrouping',
      cellRenderer: RowGroupingRenderer,
      width: 46,
      context: {
        selection,
        onClick: (rowId) => {
          const nextSelection = updateSelection(selection)(rowId);
          setSelection(nextSelection);
          const isOpened = nextSelection.includes(rowId);

          let rowDefSelect = getRowDef(rowDefs, rowId);
          if (!rowDefSelect) {
            rowDefs.push({ id: rowId });
          }

          onRowDefsChange(
            rowDefs.map((rowDef: TRowDef) => {
              if (rowDef.id !== `afterRow-${rowId}` && rowId === rowDef.id) {
                rowDef = isOpened
                  ? { ...rowDef, preset: 'expanded' }
                  : { ...rowDef, preset: null };
              }

              if (rowDef.id === `afterRow-${rowId}`) {
                rowDef.hide = !isOpened;
              }
              return rowDef;
            }),
          );
        },
      } as TRowGroupingContext,
    },
    ...originalColDefs,
  ];

  return {
    colDefs,
  };
};

export const useOnDemandAfterRow = ({
  rowDefs,
  initialSelection,
  onRowDefsChange,
  colDefs: originalColDefs,
  data,
  onDataChange,
  afterRowRenderer,
  afterRowHeight,
}: {
  rowDefs: TRowDef[];
  onRowDefsChange: (rowDefs: TRowDef[]) => void;
  colDefs: TColDef[];
  initialSelection: string[];
  data: TData;
  onDataChange: (data: TData) => void;
  afterRowRenderer:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode);
  afterRowHeight: number;
}) => {
  const [selection, setSelection] = React.useState<(string | number)[]>(
    initialSelection || [],
  );

  const colDefs = [
    {
      id: 'rowGrouping',
      cellRenderer: RowGroupingRenderer,
      width: 46,
      context: {
        selection,
        onClick: (rowId) => {
          const nextSelection = updateSelection(selection)(rowId);
          setSelection(nextSelection);

          onRowDefsChange(
            !getRowDef(rowDefs, `afterRow-${rowId}`)
              ? addPresetToRowDefs(
                  addAfterRowToRowDefs(
                    rowDefs,
                    rowId,
                    afterRowRenderer,
                    afterRowHeight,
                  ),
                  rowId,
                  'expanded',
                )
              : deletePresetRowDefs(
                  deleteAfterRowToRowDefs(rowDefs, rowId),
                  rowId,
                ),
          );
          onDataChange(
            findDataById(data, `afterRow-${rowId}`)
              ? deleteAfterRowToDataById(data, `afterRow-${rowId}`)
              : addAfterRowToData(data, rowId),
          );
        },
      } as TRowGroupingContext,
    },
    ...originalColDefs,
  ];

  return {
    colDefs,
  };
};
