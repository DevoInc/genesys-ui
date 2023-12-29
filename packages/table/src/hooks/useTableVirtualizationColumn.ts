import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { WrapperContext, TableContext } from '../context';

type UseVirtualizationParamsColumn = {
  ref: React.MutableRefObject<HTMLDivElement>;
};

const getPixelsFromPercentage =
  (totalWidth: number) => (value: string | number) =>
    typeof value === 'number'
      ? value
      : (Number(value.substring(0, value.length - 1)) * totalWidth) / 100;

export const useTableVirtualizationColumn = ({
  ref,
}: UseVirtualizationParamsColumn) => {
  const { colDefs, minWidth } = React.useContext(TableContext);
  const { width: wrapperWidth } = React.useContext(WrapperContext);

  const colsWidth = React.useMemo(() => {
    // get the width of the table
    const tableWidth = Math.max(minWidth ?? 0, wrapperWidth);
    const getPixels = getPixelsFromPercentage(tableWidth);

    const colWidths = [];
    const colMinWidths: { [key: number]: number } = {};
    let filled = 0;
    let filledCounter = 0;
    for (let index = 0; index < colDefs.length; index++) {
      const col = colDefs[index];
      const width = col?.width
        ? Math.max(getPixels(col.width), getPixels(col?.minWidth ?? 0))
        : null;
      colWidths[index] = width;
      if (width !== null) {
        filled += width ?? 0;
        filledCounter++;
      } else if (col?.minWidth ?? false) {
        colMinWidths[index] = getPixels(col?.minWidth);
      }
    }

    let partition =
      Math.max(tableWidth - filled, 0) / (colDefs.length - filledCounter);

    let found = true;
    while (found) {
      found = false;
      for (const [index, minWidth] of Object.entries(colMinWidths)) {
        if (minWidth > partition) {
          colWidths[Number(index)] = minWidth;
          filled += minWidth;
          filledCounter++;
          partition =
            Math.max(tableWidth - filled, 0) / (colDefs.length - filledCounter);
          delete colMinWidths[Number(index)];
          found = true;
          break;
        }
      }
    }

    const result = colWidths.map((width) =>
      width !== null ? width : partition,
    );
    return result;
  }, [colDefs, minWidth, wrapperWidth]);

  return useVirtualizer({
    count: colDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: (index: number) => colsWidth[index],
    horizontal: true,
    getItemKey: (index: number) => colDefs[index].id,
    overscan: 2,
  });
};
