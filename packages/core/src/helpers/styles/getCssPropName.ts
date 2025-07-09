import { camelToKebab } from '../../utils';

/**
 * Get the class name in kebab case format from the camel case prop name. In addition, the prop names which don't match with the CSS property name are normalized.
 * @param prop - The prop object of the layout component which control a non-pre-defined CSS property value: width, height, flex, opacity... etc.
 * @returns A string with the class name
 */
export const getCssPropName = (prop: string): string => {
  if (
    [
      'cssTranslate',
      'positionBottom',
      'positionLeft',
      'positionRight',
      'positionTop',
    ].includes(prop)
  ) {
    const hyphenPos = camelToKebab(prop).indexOf('-');
    return camelToKebab(prop).substring(
      hyphenPos + 1,
      camelToKebab(prop).length,
    );
  } else {
    return camelToKebab(prop);
  }
};
