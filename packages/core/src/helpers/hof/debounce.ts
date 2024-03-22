export const debounce = (func: (param: any) => void, ms = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};
