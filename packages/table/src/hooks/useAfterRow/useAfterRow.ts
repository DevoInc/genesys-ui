import * as React from 'react';

import { RowGroupingRenderer } from '../../renderers';
import { TRowGroupingContext } from '../../facade';
import { updateSelection } from './selection';
import { TCellRenderer, TColDef, TData, TRowDef } from '../../declarations';
import {
  addAfterRowToData,
  addAfterRowToRowDefs,
  deleteAfterRowToDataById,
  findDataById,
  getRowDef,
  setHideRowDef,
} from '../../helpers';

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
  const [selection, setSelection] = React.useState(initialSelection);

  const colDefs = [
    {
      id: 'rowGrouping',
      cellRenderer: RowGroupingRenderer,
      width: 46,
      context: {
        selection,
        onClick: (rowId) => {
          const nextSelection = updateSelection(selection)(rowId as string);
          setSelection(nextSelection);
          const isOpened = nextSelection.includes(rowId);
          onRowDefsChange(
            rowDefs.map((rowDef: TRowDef) => {
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
  data: TData[];
  onDataChange: (data: TData[]) => void;
  afterRowRenderer: React.FC<TCellRenderer>
  | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode);
  afterRowHeight: React.CSSProperties['height'];
}) => {
  const [selection, setSelection] = React.useState([]);

  const colDefs = [
    {
      id: 'rowGrouping',
      cellRenderer: RowGroupingRenderer,
      width: 46,
      context: {
        selection,
        onClick: (rowId) => {
          const nextSelection = updateSelection(selection)(rowId as string);
          setSelection(nextSelection);
          const isOpened = nextSelection.includes(rowId);

          onRowDefsChange(
            !getRowDef(rowDefs, `afterRow-${rowId}`)
              ? addAfterRowToRowDefs(
                  rowDefs,
                  rowId,
                  afterRowRenderer,
                  afterRowHeight,
                )
              : setHideRowDef(rowDefs, rowId, isOpened),
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