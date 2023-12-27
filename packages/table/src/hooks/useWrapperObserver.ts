import * as React from 'react';

import { Size } from '../declarations';
import { debounce } from '../effects';

export const useWrapperOberver = () => {
  const ref = React.useRef<HTMLDivElement>();
  const [wrapperSize, setWrapperSize] = React.useState<Size>();

  React.useEffect(() => {
    let resizeObserver: ResizeObserver;

    if (ref.current) {
      resizeObserver = new ResizeObserver(
        debounce((entries: ResizeObserverEntry[]) => {
          for (const entry of entries) {
            setWrapperSize({
              width: entry.contentRect.width,
              height: entry.contentRect.height,
            });
          }
        }, 50),
      );
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { ref, wrapperSize };
};
