import { TDatetime } from '../declarations';

export const validateRange = (range: TDatetime[]) => {
  if (range.length < 2) {
    return false;
  }
  for (let i = 1; i < range.length; i++) {
    if (range[i] <= range[i - 1]) {
      return false;
    }
  }
  return true;
};
