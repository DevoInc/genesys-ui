import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../context/TableContext';
import { ROW_HEIGHT_MD } from '../constants';

type TUseVirtualizationParamsRow = {
  ref: React.MutableRefObject<HTMLDivElement>;
};

export const useTableVirtualizationRow = ({
  ref,
}: TUseVirtualizationParamsRow) => {
  const { rowHeight, colDefs, data, rowDefs } =
    React.useContext(TableContext);

  const height = React.useMemo(() => {
    let maxHeight;
    const rowHth: number[] = [];
    for (const element of data) {
      const elementData = rowDefs.find((r) => {
        return r.id === element.id;
      });
      if (elementData?.hide) {
        rowHth.push(0);
      } else {
        maxHeight =
          rowHeight ??
          colDefs.reduce(
            (prev: number, curr) =>
              (curr?.rowHeight ?? 0 > prev) ? curr.rowHeight : prev,
            0,
          );
          rowHth.push(maxHeight > 0 ? maxHeight : ROW_HEIGHT_MD);
      }
    }

    return rowHth;
  }, [rowHeight, colDefs, rowDefs]);

  return useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) => height[index],
    overscan: 10,
  });
};
