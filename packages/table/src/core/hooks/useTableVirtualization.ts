import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef, SizesConfig, TableVisualOptions } from '../../declarations';
import {
  getDefaultColWidth,
  getColWidth,
  getOccupiedWidthInfo,
} from '../utils';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  visualOptions: TableVisualOptions;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
  sizes: SizesConfig;
}

const getRowHeight = (
  sizes: SizesConfig,
  visualOptions: TableVisualOptions,
  colDefs: ColDef[],
) =>
  sizes.row.height[
    visualOptions?.rowHeight ||
    colDefs.find((columnDef) => columnDef.type === 'longText')
      ? 'lg'
      : 'md'
  ];

const getTableWidth = (
  visualOptions: TableVisualOptions,
  ref: React.MutableRefObject<HTMLDivElement>,
) => Math.max(visualOptions?.minWidth, ref.current?.offsetWidth);

export const useTableVirtualization = ({
  data,
  columnDefs,
  visualOptions,
  wrapperRef,
  sizes,
}: UseVirtualizationParams) => {
  const rowHeight = getRowHeight(sizes, visualOptions, columnDefs);
  const tableWidth = getTableWidth(visualOptions, wrapperRef);

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
