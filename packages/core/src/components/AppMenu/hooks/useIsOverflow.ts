import * as React from 'react';

export const useIsOverflow = (ref: React.RefObject<HTMLDivElement>) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useEffect(() => {
    let ro;
    if (ref.current) {
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const hasOverflow =
            entry.target.scrollHeight > entry.target.clientHeight;
          if (hasOverflow !== isOverflow) {
            setIsOverflow(hasOverflow);
          }
        }
      });

      ro.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        ro.unobserve(ref.current);
      }
    };
  }, [ref, isOverflow, setIsOverflow]);

  return { hasScroll: isOverflow };
};
