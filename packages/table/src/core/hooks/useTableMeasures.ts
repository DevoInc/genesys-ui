import React, { useEffect } from 'react';
import { Virtualizer } from '@tanstack/react-virtual';
import { MeasuresConfig, SizesConfig } from '../../declarations';

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
  const [measures, setMeasures] = React.useState<MeasuresConfig>();

  useEffect(() => {
    setMeasures({
      wrapper: {
        height: ref?.current?.offsetHeight,
        width: ref?.current?.offsetWidth,
      },
      body: {
        total: {
          height: rowVirtualizer?.getTotalSize(),
          width: columnVirtualizer?.getTotalSize(),
        },
        visible: {
          height: ref?.current?.offsetHeight - sizes.head.height,
          width: ref?.current?.offsetWidth,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current?.offsetHeight, ref.current?.offsetWidth]);

  return { measures };
};
