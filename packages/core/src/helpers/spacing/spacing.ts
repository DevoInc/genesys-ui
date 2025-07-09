import { DefaultTheme } from 'styled-components';

import type { TGlobalSpacing } from '../../declarations';
import { marginAndPaddingToArray } from '../styles';
import { camelToKebab } from '../../utils';

/**
 * Get the map with spacing prop alias values and prop css values (tokens)
 * based in the theme object.
 */
export const getSpacingValuesMap = (
  theme: DefaultTheme,
): { [key in TGlobalSpacing]: string } => ({
  '0': '0',
  auto: 'auto',
  inherit: 'inherit',
  'cmp-xxs': theme.alias.space.cmp.xxs,
  'cmp-xs': theme.alias.space.cmp.xs,
  'cmp-sm': theme.alias.space.cmp.sm,
  'cmp-md': theme.alias.space.cmp.md,
  'cmp-lg': theme.alias.space.cmp.lg,
  'cmp-xl': theme.alias.space.cmp.xl,
  'cmp-xxl': theme.alias.space.cmp.xxl,
  'cmp-xxxl': theme.alias.space.cmp.xxxl,
  'layout-xxs': theme.alias.space.layout.xxs,
  'layout-xs': theme.alias.space.layout.xs,
  'layout-sm': theme.alias.space.layout.sm,
  'layout-md': theme.alias.space.layout.md,
  'layout-lg': theme.alias.space.layout.lg,
  'layout-xl': theme.alias.space.layout.xl,
  'layout-xxl': theme.alias.space.layout.xxl,
  'layout-xxxl': theme.alias.space.layout.xxxl,
});

/**
 * Get the spacing value translated into css units
 * cmp-md -> Xrem, ...
 * could be composed as: 'cmp-sm cmp-md' for margin or padding attributes (for
 * example)
 */
export const getSpacingPropCss = (theme: DefaultTheme) => (spacing: string) => {
  const valuesArr = spacing?.split(' ');
  const spacingMap = getSpacingValuesMap(theme);
  const cssValuesArr = valuesArr?.map((val) => spacingMap[val]);
  return cssValuesArr?.join(' ');
};

/**
 * Get the class names which manage the spacing for layout components: Box, Flex... etc.
 * padding-cmp--left-md, margin-layout--right-xs... etc.
 * @param value - the spacing prop value: inherit, none, cmp-xs, layout-lg... etc.
 * @param property - the css property to be used: margin, padding, gap... etc.
 * @param side - the side of the box where will be the space applied: all, left... etc.
 * @returns A string with the class name
 */
export const getSpacingClassName = ({
  value = 'cmp-xs',
  property = 'padding',
  side,
}: {
  value?: string;
  property?: string;
  side?: string;
}) => {
  const valuesArr = marginAndPaddingToArray(value);
  let mapLength: number;
  if (valuesArr.every((val) => val === valuesArr[0])) {
    mapLength = 1;
  } else if (valuesArr[0] === valuesArr[2] && valuesArr[1] === valuesArr[3]) {
    mapLength = 2;
  } else if (valuesArr[1] === valuesArr[3]) {
    mapLength = 3;
  } else {
    mapLength = valuesArr.length;
  }
  let classValuesArr: string[] = [];

  for (let idx: number = 0; idx < mapLength; idx++) {
    const val: string = valuesArr[idx];
    const evalSide: string = side
      ? `${side}-`
      : mapLength === 1
        ? ''
        : idx === 0
          ? 'top-'
          : idx === 1
            ? 'right-'
            : idx === 2
              ? 'bottom-'
              : 'left-';
    const hyphenPos = val.indexOf('-');
    if (hyphenPos === -1) {
      classValuesArr.push(`${property}--cmp-${evalSide}-${val}`);
    } else {
      const spacingType = val.substring(0, hyphenPos);
      const spacingModifier = val.substring(hyphenPos + 1, val.length);
      classValuesArr.push(
        `${property}-${spacingType}--${evalSide}${spacingModifier}`,
      );
    }
  }
  return classValuesArr?.join(' ');
};

/**
 * Get the array with all the class names which manage the spacing for layout components: Box, Flex... etc.
 * @param spacingProps - Object with all the spacing props.
 * @returns Array with all the spacing class names
 */
export const getSpacingClassNames = (spacingProps: object) => {
  return Object.entries(spacingProps)
    .filter(([_, value]) => value)
    .map(([key, value]) => {
      const kebabKey = camelToKebab(key);
      const hyphenPos = kebabKey.indexOf('-');
      const convertAfterHyphen = !(
        kebabKey.includes('gap') || hyphenPos === -1
      );
      const property = convertAfterHyphen
        ? kebabKey.substring(0, hyphenPos)
        : kebabKey;
      const side = convertAfterHyphen
        ? kebabKey.substring(hyphenPos + 1, kebabKey.length)
        : undefined;
      return `${getSpacingClassName({ value, property, side })} `;
    });
};
