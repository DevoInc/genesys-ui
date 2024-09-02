import * as React from 'react';

import { RowGroupingRenderer } from '../../renderers';
import { TRowGroupingContext } from '../../facade';
import { updateSelection } from './selection';
import { TColDef, TRowDef } from '../../declarations';

export const useAfterRow = ({
  rowDefs,
  onRowDefsChange,
  colDefs: originalColDefs,
}: {
  rowDefs: TRowDef[];
  onRowDefsChange: (rowDefs: TRowDef[]) => void;
  colDefs: TColDef[];
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
