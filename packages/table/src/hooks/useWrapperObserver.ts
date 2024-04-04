import * as React from 'react';

import { debounce } from '../effects';
import { WrapperContext } from '../context';

export const useWrapperObserver = () => {
  const ref = React.useRef<HTMLDivElement>();
  const { setSize } = React.useContext(WrapperContext);

  React.useEffect(() => {
    let resizeObserver: ResizeObserver;

    if (ref.current) {
      resizeObserver = new ResizeObserver(
        debounce((entries: ResizeObserverEntry[]) => {
          for (const entry of entries) {
            setSize({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref };
};
