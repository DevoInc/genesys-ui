export const clamp = (max, value) =>
  value < 0 ? 0 : value > max ? max : value;