// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (func: Function, ms = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};
