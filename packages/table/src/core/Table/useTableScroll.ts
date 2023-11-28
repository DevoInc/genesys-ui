import * as React from 'react';
import { Virtualizer } from '@tanstack/react-virtual';

export const useTableScroll = (
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>,
  wrapperRef: React.MutableRefObject<HTMLDivElement>,
) => {
  const [bodyHeight] = React.useState(rowVirtualizer?.getTotalSize() || 0);
  const [totalHeight] = React.useState(wrapperRef?.current?.clientHeight || 0);
  const [headHeight] = React.useState(
    wrapperRef?.current?.querySelector('thead')?.clientHeight || 0,
  );
  console.info('bodyHeight: ', bodyHeight);
  console.info('totalHeight: ', totalHeight);
  console.info('headHeight: ', headHeight);
  const [hasScroll, setHasScroll] = React.useState(
    bodyHeight > totalHeight - headHeight,
  );

  React.useEffect(() => {
    setHasScroll(bodyHeight > totalHeight - headHeight);
  }, [bodyHeight, totalHeight, headHeight]);

  return { hasScroll };
};
