export const validateRange = (range: (Date | number)[]) => {
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
