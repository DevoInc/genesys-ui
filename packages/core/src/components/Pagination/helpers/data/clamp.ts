export const clamp = (max: number, value: number) =>
  value < 0 ? 0 : value > max ? max : value;
