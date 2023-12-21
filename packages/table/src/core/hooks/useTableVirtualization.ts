import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef, SizesConfig, TableVisualOptions } from '../../declarations';
import {
  getDefaultColWidth,
  getColWidth,
  getOccupiedWidthInfo,
} from '../utils';

interface UseVirtualizationParamsRow {
  data: { [key: string]: unknown }[];
  colDefs: ColDef[];
  visualOptions: TableVisualOptions;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
  sizes: SizesConfig;
}

interface UseVirtualizationParamsColumn {
  colDefs: ColDef[];
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
      (colDefs.find((colDef) => colDef.preset === 'longText') ? 'lg' : 'md')
  ];
};

const getTableWidth = (
  visualOptions: TableVisualOptions,
  ref: React.MutableRefObject<HTMLDivElement>,
) => Math.max(visualOptions?.minWidth ?? 0, ref?.current?.clientWidth ?? 0);

export const useTableVirtualizationRow = ({
  data,
  colDefs,
  visualOptions,
  wrapperRef,
  sizes,
}: UseVirtualizationParamsRow) => {
  const rowHeight = getRowHeight(sizes, visualOptions, colDefs);
  return useVirtualizer({
    count: data.length,
    getScrollElement: () => wrapperRef.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });
};

export const useTableVirtualizationColumn = ({
  colDefs,
  visualOptions,
  wrapperRef,
}: UseVirtualizationParamsColumn) => {
  const tableWidth = getTableWidth(visualOptions, wrapperRef);

  const defaultColWidth = getDefaultColWidth(
    colDefs,
    tableWidth,
    getOccupiedWidthInfo(colDefs),
  );

  return useVirtualizer({
    count: colDefs.length,
    getScrollElement: () => wrapperRef.current,
    estimateSize: (index: number) =>
      getColWidth(colDefs[index].cellStyle?.width, tableWidth, defaultColWidth),
    horizontal: true,
    getItemKey: (index: number) => colDefs[index].id,
    overscan: 2,
  });
};
