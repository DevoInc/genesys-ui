import * as React from 'react';
import { useSize } from 'ahooks';

export const useIsOverflow = (ref: React.RefObject<HTMLDivElement>) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);
  const size = useSize(ref);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [ref, size?.width, size?.height]);

  return { hasScroll: isOverflow };
};
