import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../context/TableContext';
import { ROW_HEIGHT_MD } from '../constants';
import { getRowDef } from '../helpers';

type TUseVirtualizationParamsRow = {
  ref: React.MutableRefObject<HTMLDivElement>;
};

export const useTableVirtualizationRow = ({
  ref,
}: TUseVirtualizationParamsRow) => {
  const { rowHeight, colDefs, data, rowDefs } = React.useContext(TableContext);

  const height = React.useMemo(() => {
    const maxHeight =
      rowHeight ??
      colDefs.reduce(
        (prev: number, curr) =>
          (curr?.rowHeight ?? 0 > prev) ? curr.rowHeight : prev,
        0,
      );
    return maxHeight > 0 ? maxHeight : ROW_HEIGHT_MD;
  }, [rowHeight, colDefs]);

  return useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) => {
      const rowDef = getRowDef(rowDefs, data[index].id as string);
      const rowDefHeight = rowDef?.height ? rowDef.height : height;
      return rowDef?.hide ? 0 : rowDefHeight;
    },
    overscan: 10,
  });
};

