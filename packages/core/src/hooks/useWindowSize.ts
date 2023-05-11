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
  const [size, setSize] = React.useState([0, 0]);

  // eslint-disable-next-line consistent-return
  const handleResizeWithThrottle = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return throttle(
        () => setSize([window.innerWidth, window.innerHeight]),
        delay
      );
    }
  }, [delay]);

  // eslint-disable-next-line consistent-return
  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResizeWithThrottle);
      return () =>
        window.removeEventListener('resize', handleResizeWithThrottle);
    }
  }, [handleResizeWithThrottle]);

  return size;
};
