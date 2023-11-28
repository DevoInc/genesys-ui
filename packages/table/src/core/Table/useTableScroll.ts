import { Virtualizer } from '@tanstack/react-virtual';
import { useEffect, useState } from 'react';

export const useTableScroll = (
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>,
  wrapperRef: React.MutableRefObject<HTMLDivElement>,
) => {
  const [bodyHeight] = useState(rowVirtualizer?.getTotalSize() || 0);
  const [totalHeight] = useState(wrapperRef?.current?.clientHeight || 0);
  const [headHeight] = useState(
    wrapperRef?.current?.querySelector('thead')?.clientHeight || 0,
  );

  const [hasScroll, setHasScroll] = useState(
    bodyHeight > totalHeight - headHeight,
  );

  useEffect(() => {
    setHasScroll(bodyHeight > totalHeight - headHeight);
  }, [bodyHeight, totalHeight, headHeight]);

  return { hasScroll };
};
