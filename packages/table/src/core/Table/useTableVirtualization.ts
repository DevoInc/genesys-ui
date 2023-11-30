import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { ColDef } from '../../declarations';
import { getEstimatedColumnWidth } from '../utils';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  rowHeight: number;
  tableMinWidth: number;
}

export const useTableVirtualization = ({
  data,
  columnDefs,
  rowHeight,
  tableMinWidth,
}: UseVirtualizationParams) => {
  const ref = useRef<HTMLDivElement>();
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });

  const columnVirtualizer = useVirtualizer({
    count: columnDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) =>
      getEstimatedColumnWidth(columnDefs, tableMinWidth, index, ref),
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].id,
    overscan: 2,
  });

  return { rowVirtualizer, columnVirtualizer, ref };
};
