import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../../context';
import { ROW_HEIGHT_MD } from '../../constants';
import { getRowDef, getRowHeightFromColDefs } from '../../helpers';

export const useTableVirtualizationRow = ({
  ref,
}: {
  ref: React.MutableRefObject<HTMLDivElement>;
}) => {
  const { rowHeight, colDefs, data, rowDefs } = React.useContext(TableContext);

  // The rowHeight from the colDefs is the same for each row
  const colDefsRowHeight = React.useMemo(
    () => getRowHeightFromColDefs(colDefs),
    [colDefs],
  );

  return useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) => {
      const rowDef = getRowDef(rowDefs, data[index].id as string);
      // The height is a preference of: rowDef, colDef, table:rowHeight or the
      // default size
      const height =
        rowDef?.height || colDefsRowHeight || rowHeight || ROW_HEIGHT_MD;
      return rowDef?.hide ? 0 : height;
    },
    overscan: 10,
  });
};
