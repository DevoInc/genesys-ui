import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import {
  getDefaultColWidth,
  getColWidth,
  getOccupiedWidthInfo,
} from '../utils';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  rowHeight: number;
  tableWidth: number;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
}

export const useTableVirtualization = ({
  data,
  columnDefs,
  rowHeight,
  tableWidth,
  wrapperRef,
}: UseVirtualizationParams) => {
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => wrapperRef.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });
  const defaultColWidth = getDefaultColWidth(
    columnDefs,
    tableWidth,
    getOccupiedWidthInfo(columnDefs),
  );

  const columnVirtualizer = useVirtualizer({
    count: columnDefs.length,
    getScrollElement: () => wrapperRef.current,
    estimateSize: (index: number) =>
      getColWidth(
        columnDefs[index].cellStyle?.width,
        tableWidth,
        defaultColWidth,
      ),
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].id,
    overscan: 2,
  });

  return { rowVirtualizer, columnVirtualizer };
};
