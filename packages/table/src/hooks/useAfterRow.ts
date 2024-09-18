import * as React from 'react';
import { RowGroupingRenderer } from '../renderers';

export const useAfterRow = ({
  data: originalData,
  rowDefs: originalRowDefs,
  colDefs: originalColDefs,
  renderAfterRow,
}) => {
  const data = [];
  let rowDefs = [];

  const [selection, setSelection] = React.useState([]);
  const [rowDefsProcess, setRowDefsProcess] = React.useState(rowDefs);

  const colDefs = [
    {
      id: 'rowGrouping',
      cellRenderer: RowGroupingRenderer,
      width: 46,
      context: {
        selection,
        onRowGroupingChange: (rowIndex) => {
          toggle(rowIndex, rowDefs);
          setRowDefsProcess(() =>
            rowDefs.map((rd) => {
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
    rowDefs.push({
      id: `afterRow-${element.id}`,
      hide: true,
      cellRenderer: renderAfterRow,
    });
  }

  const toggle = React.useCallback(
    (index: number, rowDefs) => {
      setSelection(() =>
        data.map((d, i) => {
          if (index === i) {
            d.rowGrouping = !d.rowGrouping;
          }
          return d;
        }),
      );
      // const rd = rowDefs.find((r) => r.id === `afterRow-${data[index].id}`);
      // if (rd) {
      //   rd.hide = !rd.hide;
      // }
      // debugger;
    },
    [data],
  );

  return {
    data,
    rowDefs: rowDefsProcess,
    colDefs,
  };
};
