import { useVirtualizer } from '@tanstack/react-virtual';
import { MutableRefObject, useRef } from 'react';
import { ColDef } from '../../declarations';

interface UseVirtualizationParams {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  rowHeight: number;
  tableMinWidth: number;
}

interface OccupiedWidth {
  percentage: number;
  definedColDefs: number;
}

const getOccupiedWidthInfo = (colDefs: ColDef[]): OccupiedWidth =>
  colDefs.reduce(
    (sum: OccupiedWidth, colDef: ColDef): OccupiedWidth => ({
      percentage: sum.percentage + (colDef.cellStyle?.width ?? 0),
      definedColDefs: colDef.cellStyle?.width
        ? sum.definedColDefs++
        : sum.definedColDefs,
    }),
    { percentage: 0, definedColDefs: 0 },
  );

const getEstimatedColumnWidth = (
  colDefs: ColDef[],
  tableMinWidth: number,
  colIndex: number,
  tableRef: MutableRefObject<HTMLDivElement>,
) => {
  const { percentage, definedColDefs } = getOccupiedWidthInfo(colDefs);
  const percentageToCover = (100 - percentage) / 100;
  const tableWidth = Math.max(tableMinWidth, tableRef?.current?.offsetWidth);
  const defaultColWidth =
    (percentageToCover * tableMinWidth) / (colDefs.length - definedColDefs);
  return colDefs[colIndex]?.cellStyle?.width
    ? tableWidth * (colDefs[colIndex]?.cellStyle?.width / 100)
    : defaultColWidth;
};

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

  console.debug(
    'sum is ',
    columnDefs.reduce(
      (sum: number, colDef: ColDef, index: number) =>
        sum + getEstimatedColumnWidth(columnDefs, tableMinWidth, index, ref),
      0,
    ),
  );

  return { rowVirtualizer, columnVirtualizer, ref };
};
