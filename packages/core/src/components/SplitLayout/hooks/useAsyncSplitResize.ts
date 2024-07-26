import type { TSizes } from '../declarations';
import { resize } from '../size';

export interface UseAsyncSplitResizeProps {
  setSizes: (sizes: TSizes) => void;
  min?: number[];
  max?: number[];
}

export const useAsyncSplitResize = ({
  setSizes,
  min = [],
  max = [],
}: UseAsyncSplitResizeProps) => {
  return {
    onChange: (sizes: TSizes, index: number, delta: number, isEnd: boolean) => {
      if (isEnd) {
        setSizes(resize(sizes as number[], index, delta, min, max));
      }
    },
  };
};
