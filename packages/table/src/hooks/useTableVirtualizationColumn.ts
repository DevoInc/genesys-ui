import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../context/TableContext';
import {
  getDefaultColWidth,
  getColWidth,
  getOccupiedWidthInfo,
} from '../core/utils';

type UseVirtualizationParamsColumn = {
  ref: React.MutableRefObject<HTMLDivElement>;
};

export const useTableVirtualizationColumn = ({
  ref,
}: UseVirtualizationParamsColumn) => {
  const { colDefs, minWidth } = React.useContext(TableContext);
  const tableWidth = Math.max(minWidth ?? 0, ref?.current?.clientWidth ?? 0);

  const defaultColWidth = getDefaultColWidth(
    colDefs,
    tableWidth,
    getOccupiedWidthInfo(colDefs),
  );

  return useVirtualizer({
    count: colDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) =>
      getColWidth(colDefs[index].cellStyle?.width, tableWidth, defaultColWidth),
    horizontal: true,
    getItemKey: (index: number) => colDefs[index].id,
    overscan: 2,
  });
};
