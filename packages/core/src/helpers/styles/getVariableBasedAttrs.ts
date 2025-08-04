import { getCssPropName } from './getCssPropName';

/**
 * Get the style based in CSS variables depending on the value of non-pre-defined CSS property values.
 @param props - The props object of the layout component which control a non-pre-defined CSS property value: width, height, flex, opacity... etc.
 * @returns A object with the style
 */
export const getBasedCssVariablesStyle = (props: object) => {
  return Object.fromEntries(
    Object.entries(props)
      .filter(([_, value]) => value)
      .map(([key, value]) => [`--box-${getCssPropName(key)}`, value]),
  );
};

/**
 * Get the class name which manages the props with non-pre-defined CSS property value.
 * @param props - The props object of the layout component which control a non-pre-defined CSS property value: width, height, flex, opacity... etc.
 * @param selector - The selector suffix to be added at the end: --before, --after... etc.
 * @returns A string with the class name
 */
export const getVariableBasedClassNames = (
  props: object,
  selector: string = null,
) => {
  const evalProps: string[] = Object.entries(props)
    .filter(([_, value]) => value)
    .map(([key]) => getCssPropName(key));
  const evalSelector = selector ? `--${selector}` : '';
  return evalProps.map(
    (prop: string): string => `${prop}-[var(--box-${prop})]${evalSelector} `,
  );
};
