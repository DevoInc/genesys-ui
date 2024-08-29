import * as React from 'react';

export const useRowGrouping = ({ data, initialSelection = [] }) => {
  const [rowSelection, setRowSelection] = React.useState(initialSelection);

  const toggle = React.useCallback(
    (index: number) => {
      setRowSelection(() =>
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

  return { rowSelection, toggle };
};
