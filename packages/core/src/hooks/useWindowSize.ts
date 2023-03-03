import * as React from 'react';

const throttle = (fn: (...args) => void, delay: number) => {
  let timeout = undefined;

  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn(...args);
        timeout = undefined;
      }, delay);
    }
  };
};

export const useWindowSize = (delay = 0) => {
  const [size, setSize] = React.useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleResizeWithThrottle = React.useMemo(
    () =>
      throttle(() => setSize([window.innerWidth, window.innerHeight]), delay),
    [delay]
  );

  React.useLayoutEffect(() => {
    window.addEventListener('resize', handleResizeWithThrottle);
    return () => window.removeEventListener('resize', handleResizeWithThrottle);
  }, [handleResizeWithThrottle]);

  return size;
};
