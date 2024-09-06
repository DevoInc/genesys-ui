export const interpolateItems = (
  arr: unknown[],
  interpolatedFunc: (prevIdx: number, nextIdx: number) => unknown,
  wrapperFunc: (item: unknown, idx: number) => unknown = (x) => x,
) => {
  const limit = arr.length - 1;
  return arr.reduce(
    (prev: unknown[], currItem, idx) =>
      idx < limit
        ? prev.concat([
            wrapperFunc(currItem, idx),
            interpolatedFunc(idx, idx + 1),
          ])
        : prev.concat([wrapperFunc(currItem, idx)]),
    [],
  );
};
