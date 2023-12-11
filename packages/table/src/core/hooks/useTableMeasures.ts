import { Virtualizer } from '@tanstack/react-virtual';
import { SizesConfig } from '../../declarations';

interface UseTableMeasuresParams {
  ref: React.MutableRefObject<HTMLDivElement>;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  sizes: SizesConfig;
}

export const useTableMeasures = ({
  ref,
  rowVirtualizer,
  columnVirtualizer,
  sizes,
}: UseTableMeasuresParams) => {
  const tableWrapperHeight = ref?.current?.offsetHeight;
  const tableWrapperWidth = ref?.current?.offsetWidth;
  const tableVisibleBodyHeight = tableWrapperHeight - sizes.head.height;

  const measures = {
    wrapper: {
      height: tableWrapperHeight,
      width: tableWrapperWidth,
    },
    body: {
      total: {
        height: rowVirtualizer?.getTotalSize(),
        width: columnVirtualizer?.getTotalSize(),
      },
      visible: {
        height: tableVisibleBodyHeight,
        width: tableWrapperWidth,
      },
    },
  };

  return { measures };
};
