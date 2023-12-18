import * as React from 'react';
import { Virtualizer } from '@tanstack/react-virtual';

export const useTableScroll = (
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>,
  wrapperRef: React.MutableRefObject<HTMLDivElement>,
) => {
  const [dataHeight, setDataHeight] = React.useState<number>(0);
  const [wrapperHeight, setWrapperHeight] = React.useState<number>(0);
  const [headHeight, setHeadHeight] = React.useState<number>(0);
  const [hasScroll, setHasScroll] = React.useState<boolean>(false);
  React.useEffect(() => {
    console.debug(rowVirtualizer.getTotalSize());
    setDataHeight(rowVirtualizer.getTotalSize());
    setWrapperHeight(
      wrapperRef.current?.querySelector<HTMLElement>('table')?.offsetHeight,
    );
    setHeadHeight(
      wrapperRef.current?.querySelector<HTMLElement>('table thead')
        ?.offsetHeight,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.debug(
      'dataHeight, wrapperHeight, headHeight',
      dataHeight,
      wrapperHeight,
      headHeight,
    );
    console.debug('hasScroll', dataHeight > wrapperHeight - headHeight);
    setHasScroll(dataHeight > wrapperHeight - headHeight);
  }, [dataHeight, wrapperHeight, headHeight]);

  return { hasScroll };
};
