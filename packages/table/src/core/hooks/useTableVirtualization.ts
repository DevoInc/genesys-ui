import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef, SizesConfig, TableOptionsProps } from '../../declarations';
import {
  getDefaultColWidth,
  getColWidth,
  getOccupiedWidthInfo,
} from '../utils';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  tableOptions: TableOptionsProps;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
  sizes: SizesConfig;
}

const getRowHeight = (
  sizes: SizesConfig,
  tableOptions: TableOptionsProps,
  colDefs: ColDef[],
) =>
  sizes.row.height[
    tableOptions.visualOptions?.rowHeight ||
    colDefs.find((columnDef) => columnDef.type === 'longText')
      ? 'lg'
      : 'md'
  ];

const getTableWidth = (
  tableOptions: TableOptionsProps,
  ref: React.MutableRefObject<HTMLDivElement>,
) => Math.max(tableOptions?.visualOptions?.minWidth, ref.current?.offsetWidth);

export const useTableVirtualization = ({
  data,
  columnDefs,
  tableOptions,
  wrapperRef,
  sizes,
}: UseVirtualizationParams) => {
  const rowHeight = getRowHeight(sizes, tableOptions, columnDefs);
  const tableWidth = getTableWidth(tableOptions, wrapperRef);

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
