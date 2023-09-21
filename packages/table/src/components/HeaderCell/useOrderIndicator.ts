import { useMemo } from 'react';
import { ColDef } from '../Cell/declarations';

interface Sorter {
  colId: string;
  direction: string;
}

interface UseOrderIndicatorParams {
  column: ColDef;
  sorterUpdater: ({ column, isAcumulative }) => void;
  sorters: Sorter[];
}

export const useOrderIndicator = ({
  column,
  sorterUpdater,
  sorters = [],
}: UseOrderIndicatorParams) =>
  useMemo(() => {
    const sortActionWithOrder = column.sort?.direction;

    const onOrder = (evt: MouseEvent) =>
      sorterUpdater({
        column,
        isAcumulative: evt.ctrlKey || evt.metaKey,
      });

    if (sortActionWithOrder) {
      sorters.push({
        colId: column.colId,
        direction: column.sort?.direction,
      });
      return {
        orderDirection: sortActionWithOrder.toLowerCase(),
        onOrder,
      };
    } else {
      const sorterIndex = sorters?.findIndex(
        (srt) => srt.colId === column.colId,
      );
      if (sorterIndex === -1) {
        return {
          orderDirection: 'neutral',
          orderFactor: -1,
          onOrder,
        };
      } else {
        return {
          orderDirection: sorters?.[sorterIndex].direction.toLowerCase(),
          orderFactor: sorterIndex,
          onOrder,
        };
      }
    }
  }, [column, sorterUpdater, sorters]);
