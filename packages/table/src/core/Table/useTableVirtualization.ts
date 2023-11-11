import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  ref: React.MutableRefObject<undefined>;
}

export const useTableVirtualization = ({
  data,
  columnDefs,
  ref,
}: UseVirtualizationParams) => {
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 30,
  });

  const columnVirtualizer = useVirtualizer({
    count: columnDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 10,
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].id,
  });

  return { rowVirtualizer, columnVirtualizer };
};
