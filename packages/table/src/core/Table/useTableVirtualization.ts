import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { ColDef } from '../../declarations';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
}

export const useTableVirtualization = ({
  data,
  columnDefs,
}: UseVirtualizationParams) => {
  const ref = useRef();
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 100,
  });

  const columnVirtualizer = useVirtualizer({
    count: columnDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 100,
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].id,
  });

  return { rowVirtualizer, columnVirtualizer, ref };
};
