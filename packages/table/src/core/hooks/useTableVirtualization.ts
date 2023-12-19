import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef, SizesConfig, TableVisualOptions } from '../../declarations';
import {
  getDefaultColWidth,
  getColWidth,
  getOccupiedWidthInfo,
} from '../utils';

interface UseVirtualizationParamsRow {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  visualOptions: TableVisualOptions;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
  sizes: SizesConfig;
}

interface UseVirtualizationParamsColumn {
  columnDefs: ColDef[];
  visualOptions: TableVisualOptions;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
}

const getRowHeight = (
  sizes: SizesConfig,
  visualOptions: TableVisualOptions,
  colDefs: ColDef[],
) => {
  return sizes.row.height[
    visualOptions?.rowHeight ||
      (colDefs.find((columnDef) => columnDef.preset === 'longText')
        ? 'lg'
        : 'md')
  ];
};

const getTableWidth = (
  visualOptions: TableVisualOptions,
  ref: React.MutableRefObject<HTMLDivElement>,
) => Math.max(visualOptions?.minWidth ?? 0, ref?.current?.clientWidth ?? 0);

export const useTableVirtualizationRow = ({
  data,
  columnDefs,
  visualOptions,
  wrapperRef,
  sizes,
}: UseVirtualizationParamsRow) => {
  const rowHeight = getRowHeight(sizes, visualOptions, columnDefs);
  console.info(rowHeight);
  return useVirtualizer({
    count: data.length,
    getScrollElement: () => wrapperRef.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });
};

export const useTableVirtualizationColumn = ({
  columnDefs,
  visualOptions,
  wrapperRef,
}: UseVirtualizationParamsColumn) => {
  const tableWidth = getTableWidth(visualOptions, wrapperRef);

  const defaultColWidth = getDefaultColWidth(
    columnDefs,
    tableWidth,
    getOccupiedWidthInfo(columnDefs),
  );

  return useVirtualizer({
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
};
