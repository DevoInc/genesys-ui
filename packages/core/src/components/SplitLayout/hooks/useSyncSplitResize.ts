import * as React from 'react';
import { useThrottleFn, useUnmount } from 'ahooks';

import type { TSizes } from '../declarations';
import { resize } from '../size';

export interface UseSyncSplitResizeProps {
  setSizes: (sizes: TSizes) => void;
  min?: number[];
  max?: number[];
}

export const useSyncSplitResize = ({
  setSizes,
  min = [],
  max = [],
}: UseSyncSplitResizeProps) => {
  const initialSizes = React.useRef<number[]>(null);
  const lastSizes = React.useRef<number[]>(null);

  const { run, cancel } = useThrottleFn(
    (sizes: number[], index: number, delta: number) => {
      const nextSizes = resize(sizes, index, delta, min, max);
      if (
        nextSizes.some(
          (size, idx) =>
            Math.floor(size) !== Math.floor(lastSizes.current[idx]),
        )
      ) {
        lastSizes.current = nextSizes;
        setSizes(nextSizes);
      }
    },
    {
      wait: 5,
    },
  );

  useUnmount(() => {
    cancel();
  });

  return {
    onChange: (sizes: TSizes, index: number, delta: number, isEnd: boolean) => {
      if (!isEnd) {
        if (initialSizes.current === null) {
          initialSizes.current = sizes as number[];
          lastSizes.current = sizes as number[];
        }
        run(initialSizes.current as number[], index, delta);
      } else {
        initialSizes.current = null;
      }
    },
  };
};
