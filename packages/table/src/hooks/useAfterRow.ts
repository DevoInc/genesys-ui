import * as React from 'react';
import { RowGroupingRenderer } from '../renderers';

export const useAfterRow = ({
  data: originalData,
  rowDefs: originalRowDefs,
  colDefs: originalColDefs,
  renderAfterRow,
}) => {
  const data = [];

  const [selection, setSelection] = React.useState([]);
  const [rowDefsProcess, setRowDefsProcess] = React.useState(originalRowDefs);

  const colDefs = [
    {
      id: 'rowGrouping',
      cellRenderer: RowGroupingRenderer,
      width: 46,
      context: {
        selection,
        onRowGroupingChange: (rowIndex) => {
          toggle(rowIndex);
          setRowDefsProcess(() =>
            rowDefsProcess.map((rd) => {
              if (rd.id === `afterRow-${data[rowIndex].id}`) {
                rd.hide = !rd.hide;
              }
              return rd;
            }),
          );
        },
      },
    },
    ...originalColDefs,
  ];

  for (const element of originalData) {
    data.push(element);
    data.push({
      ...element,
      id: `afterRow-${element.id}`,
    });
    rowDefsProcess.push({
      id: `afterRow-${element.id}`,
      hide: true,
      cellRenderer: renderAfterRow,
    });
  }

  const toggle = React.useCallback(
    (index: number) => {
      setSelection(() =>
        data.map((d, i) => {
          if (index === i) {
            d.rowGrouping = !d.rowGrouping;
          }
          return d;
        }),
      );
    },
    [data],
  );

  return {
    data,
    rowDefs: rowDefsProcess,
    colDefs,
  };
};
