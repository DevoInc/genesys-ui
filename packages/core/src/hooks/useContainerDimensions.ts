import * as React from 'react';
import { throttle } from 'lodash';
import { ClientSize } from '../declarations/dom';

const DEFAULT_PROPS = { delay: 0 };

export const useContainerDimensions = ({ delay } = DEFAULT_PROPS) => {
  const [size, setSize] = React.useState<ClientSize>(null);
  const nodeRef = React.useRef<Element | null>(null);

  const updateSize = React.useCallback(() => {
    if (nodeRef?.current) {
      const HTMLElement: Partial<Element> = nodeRef?.current;
      setSize({
        ...HTMLElement.getBoundingClientRect?.(),
        clientHeight: HTMLElement.clientHeight,
        clientWidth: HTMLElement.clientWidth,
        scrollHeight: HTMLElement.scrollHeight,
        scrollWidth: HTMLElement.scrollWidth,
      });
    }
  }, []);

  const handleResize = React.useMemo(
    () => throttle(() => updateSize(), delay),
    [updateSize, delay]
  );

  const resizeObserver = React.useMemo(
    () => new ResizeObserver(handleResize),
    [handleResize]
  );

  /**
   * The callback ref will be called only when the component mounts and
   * unmounts.
   * Note that we pass [resizeObserver] as a dependency array to useCallback.
   * This ensures that our ref callback doesn’t change between the re-renders,
   * only if resizeObserver has changed and so React won’t call it
   * unnecessarily.
   */
  const setRef = React.useCallback(
    (node) => {
      //Component unmount
      if (nodeRef.current) {
        setSize(null);
        resizeObserver.unobserve(nodeRef.current);
      }

      nodeRef.current = node;

      //Component mount
      if (nodeRef.current) {
        updateSize();
        resizeObserver.observe(nodeRef.current);
      }
    },
    [updateSize, resizeObserver]
  );

  return { setRef, size, nodeRef };
};
