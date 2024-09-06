export const constrain = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value;

export const sizesToPoints = (sizes: number[]) => {
  let sum = 0;
  return sizes.map((size) => {
    sum += size;
    return sum;
  });
};

export const pointsToSizes = (points: number[]) =>
  points.map((size, idx, arr) => size - (arr[idx - 1] ?? 0));

export const resize = (
  sizes: number[],
  index: number,
  delta: number,
  min: number[] = [],
  max: number[] = [],
) =>
  pointsToSizes(
    sizesToPoints(sizes).map((p, idx, arr) =>
      idx === index
        ? constrain(
            p + delta,
            Math.max(
              min[idx] ?? Number.MIN_VALUE,
              arr[idx - 1] ?? Number.MIN_VALUE,
            ),
            Math.min(
              max[idx] ?? Number.MAX_VALUE,
              arr[idx + 1] ?? Number.MAX_VALUE,
              (arr[idx + 1] ?? Number.MAX_VALUE) - (min[idx + 1] ?? 0),
            ),
          )
        : p,
    ),
  );
