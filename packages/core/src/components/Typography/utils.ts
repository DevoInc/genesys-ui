import { css, DefaultTheme } from 'styled-components';

import type {
  TTypoBodySize,
  TTypoHeadingSize,
  TTypoSize,
} from '../../declarations';
import type {
  ITypography,
  THeadingType,
  TTypoCategories,
  TTypographyFormat,
} from './declarations';
import {
  typoColorMixin,
  truncateTypoMixin,
  typoMixin,
} from '../../styled/mixins';

/**
 * Get the heading category name based in type prop
 *
 * @param typeProp h1, h2, hero-sm... etc.
 * @return category name
 */
const getCategory = (typeProp: THeadingType): TTypoCategories => {
  if (typeProp?.startsWith('hero')) return 'hero';
  if (typeProp?.startsWith('overline')) return 'overline';
  return 'heading';
};

/**
 * Get the heading type name based in type prop
 *
 * @param typeProp h1, h2, hero-sm... etc.
 * @return type name
 */
const getType = (typeProp: THeadingType): TTypoSize => {
  const hyphenPos = typeProp.indexOf('-');
  if (hyphenPos > -1) return typeProp.substring(hyphenPos + 1) as TTypoBodySize;
  return typeProp as TTypoHeadingSize;
};

/**
 * Get the Heading category and type based in its type prop to use as params for typo mixins
 *
 * @param typeProp prop type of the heading component h1, h2, hero-sm... etc.
 * @return category and type values in an object
 */
export const getHeadingCategoryAndType = (typeProp: THeadingType) => {
  return {
    category: getCategory(typeProp),
    type: getType(typeProp),
  };
};

/**
 * Get the variant and the size based in format prop
 *
 * @param formatProp body-sm, heading-h1, hero-sm... etc.
 * @return object with the variant and the size values
 */
export const getTypoVariantAndSizeFromFormat = (
  formatProp: TTypographyFormat,
): { size: TTypoSize; variant: TTypoCategories } => {
  const hyphenPos = formatProp.indexOf('-');
  if (hyphenPos > -1)
    return {
      size: formatProp.substring(hyphenPos + 1) as TTypoSize,
      variant: formatProp.substring(0, hyphenPos) as TTypoCategories,
    };
  return { size: 'md', variant: 'body' };
};

interface IGetTypoCss {
  $colorScheme?: ITypography['colorScheme'];
  $gutterBottom?: ITypography['gutterBottom'];
  $textAlign?: ITypography['textAlign'];
  $truncateLine?: ITypography['truncateLine'];
  $bold?: boolean;
  $variant?: TTypoCategories;
  theme?: DefaultTheme;
  $size?: TTypoSize;
}

/**
 * Get the typography css based in category and type of the component:
 * font-size, line-height, font-weight, color... etc.
 *
 * @param props.theme object with all the design tokens
 * @param props.variant heading, body, action, overline, hero... etc.
 * @param props.colorScheme The color for the text based in a predefined scheme
 * list.
 * @param props.size The size inside the category: h1, h2, xs, sm, md... etc.
 * @param props.truncateLine It the text has text overflow ellipsis and from
 * which number of lines.
 * @param props.textAlign The css text-align for the text.
 * @return typography styles
 */
export const getTypoCss = ({
  $bold = false,
  $variant = 'body',
  $colorScheme = 'base',
  $textAlign = 'left',
  theme,
  $truncateLine = 0,
  $size = 'md',
}: IGetTypoCss = {}) => css`
  position: relative;

  // truncated text styles
  ${$truncateLine && truncateTypoMixin({ $lineClamp: $truncateLine })};

  // text styles
  ${typoMixin({
    $bold,
    $variant,
    $textAlign,
    theme,
    $size,
  })};

  // text color styles
  ${typoColorMixin({
    $variant:
      $variant === 'heading' || $variant === 'hero' ? 'heading' : 'body',
    $colorScheme,
    theme,
  })};
`;
