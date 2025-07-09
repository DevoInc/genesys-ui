/**
 * Get the mapped class names depending on a map object.
 * padding-cmp--left-md, margin-layout--right-xs... etc.
 * @param props - The props of the component to map a class name: display, overflow... etc.
 * @param map - The map object to get the class name relative to the prop value.
 * @returns A string with the class name
 */
export const getMappedClassNames = (props: object, map: object) =>
  Object.entries(props).map(([key, value]) =>
    value ? `${map[key][value]} ` : '',
  );
