import { useVirtualizer } from '@tanstack/react-virtual';
import { MutableRefObject, useRef } from 'react';
import { ColDef } from '../../declarations';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
}

const getEstimateColumnSize = (
  colDefs: ColDef[],
  colIndex: number,
  tableRef: MutableRefObject<HTMLDivElement>,
) =>
  colDefs[colIndex]?.cellStyle?.width ??
  tableRef?.current?.offsetWidth / colDefs.length ??
  300;

export const useTableVirtualization = ({
  data,
  columnDefs,
}: UseVirtualizationParams) => {
  const ref = useRef<HTMLDivElement>();
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 100,
    overscan: 10,
  });

  const columnVirtualizer = useVirtualizer({
    count: columnDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) =>
      getEstimateColumnSize(columnDefs, index, ref),
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].id,
    overscan: 2,
  });

  return { rowVirtualizer, columnVirtualizer, ref };
};
