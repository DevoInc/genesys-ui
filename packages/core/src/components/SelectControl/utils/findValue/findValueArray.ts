export const findValueArray = (val, options) => {
  let result = null;
  if (val?.__isNew__) return val;

  for (const option of options) {

    if (!result) {
      
      if (option.options) {

        result = option.options.find((option) => {
          return val instanceof Object
            ? option.value === val.value
            : option.value === val;
        });
      } else {
        result = options.find((option) => {
          return val instanceof Object
            ? option.value === val.value
            : option.value === val;
        });
      }
    }
  }

  return result;
};
