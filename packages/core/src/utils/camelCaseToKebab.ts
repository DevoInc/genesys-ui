/**
 * Transform a camel case to kebab case
 * @param str A string to transform
 * @return The transformed string
 */
export const camelToKebab = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
