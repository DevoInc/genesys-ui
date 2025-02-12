export const findValueArray = (val, options) => {
  if (val?.__isNew__) return val;

  return options.find((option) => {
    if (option.options) {
      return option.options.find((option) => {
        return val instanceof Object
          ? option.value === val.value
          : option.value === val;
      });
    } else {
      return val instanceof Object
        ? option.value === val.value
        : option.value === val;
    }
  });
};
