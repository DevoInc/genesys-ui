import * as React from 'react';
import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { isValidColor } from '../functions';
import { TypoVariant } from './declarations';
import { TypoSize } from '../../declarations';
import { TypoColorScheme } from '../../components/Typography/constants';

/* -------------------------------------------------------------------------- */
/*                           TYPOGRAPHY - BASE - UTILS                        */
/* -------------------------------------------------------------------------- */

/**
 * Get the font-family value based in variant of the typographic element
 *
 * @param object.tokens Object with all the design tokens
 * @param object.variant heading, body, action, overline, hero... etc.
 * @return line-height value: '2rem', '2.4rem'... etc.
 */
export const getFontFamily = ({ tokens, variant = 'body' }) => {
  return tokens.alias.typographies.typo.fontFamily[variant].fontFaceName;
};

/**
 * Get the font-size value based in variant-size of the typographic element
 *
 * @param {Object} tokens Object with all the design tokens
 * @param {String} variant heading, body, action, overline, hero... etc.
 * @param {String} size h1, h2, xs, sm, md... etc.
 * @return {String} font-size value: '1rem', '2.4rem'... etc.
 */

export const getFontSize = ({ tokens, variant = 'body', size = 'md' }) => {
  return tokens.alias.typographies.typo.fontSize[variant][size];
};

/**
 * Get the font-weight value based in variant of the typographic element
 *
 * @param {Object} tokens Object with all the design tokens
 * @param {String} variant heading, body, action, overline, hero... etc.
 * @return {String} font-weight value: '300', '500', 'bold'... etc.
 */

export const getFontWeight = ({ tokens, variant = 'body' }) => {
  return tokens.alias.typographies.typo.fontWeight[variant];
};

/**
 * Get the line-height value based in variant-size of the typographic element
 *
 * @param {Object} tokens Object with all the design tokens
 * @param {String} variant heading, body, action, overline, hero... etc.
 * @param {String} size h1, h2, xs, sm, md... etc.
 * @return {String} line-height value: '2rem', '2.4rem'... etc.
 */
export const getLineHeight = ({ tokens, variant = 'body', size = 'md' }) => {
  return tokens.alias.typographies.typo.lineHeight[variant][size];
};

/**
 * Get the letter-spacing value based in variant of the typographic element
 *
 * @param {Object} tokens Object with all the design tokens
 * @param {String} variant heading, body, action, overline, hero... etc.
 * @return {String} letter-spacing value: '0.03em'... etc.
 */

export const getLetterSpacing = ({ tokens, variant = 'body' }) => {
  return tokens.alias.typographies.typo.letterSpacing[variant].em;
};

/* -------------------------------------------------------------------------- */
/*                          TYPOGRAPHY - BASE - MIXINS                        */
/* -------------------------------------------------------------------------- */

// Truncate - Typography - Mixin --------------------------------------------- /

/**
 * Get typography styles for truncated text
 *
 * @param {String} maxWidth to start to truncate
 * @param {Number} lineClamp number of lines before ellipsis (css line-clamp)
 * @return {css} typography styles
 */
export const truncateTypoMixin = (
  {
    maxWidth,
    lineClamp,
  }: {
    maxWidth?: string;
    lineClamp?: number;
  } = { maxWidth: '100%', lineClamp: 1 }
) => css`
  max-width: ${maxWidth};
  overflow: hidden;
  ${lineClamp > 1
    ? css`
        display: -webkit-box;
        -webkit-line-clamp: ${lineClamp};
        -webkit-box-orient: vertical;
      `
    : css`
        white-space: nowrap;
        word-wrap: normal;
        text-overflow: ellipsis;
      `}
`;

// Typography - Mixin ------------------------------------------------- /
// for body, overline, heading, hero, action... etc. text styles

/**
 * Get typography object based in props
 *
 * @param tokens object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @param size h1, h2, xs, sm, md... etc.
 * @return typography object
 */
export const getTypoObject = ({
  variant = 'body',
  theme: tokens,
  size = 'md',
}: {
  variant?: TypoVariant;
  theme: DefaultTheme;
  size?: TypoSize;
}): {
  'font-family': React.CSSProperties['fontFamily'];
  'font-size': React.CSSProperties['fontSize'];
  'line-height': React.CSSProperties['lineHeight'];
  'font-weight': React.CSSProperties['fontWeight'];
  'letter-spacing': React.CSSProperties['letterSpacing'];
  'text-transform': React.CSSProperties['textTransform'];
} => {
  const FF = getFontFamily({ tokens, variant });
  const FS = getFontSize({ tokens, variant, size });
  const LH = getLineHeight({ tokens, variant, size });
  const FW = getFontWeight({ tokens, variant });
  const LS = getLetterSpacing({ tokens, variant });

  return {
    'font-family': FF,
    'font-size': FS,
    'line-height': LH,
    'font-weight': FW,
    'letter-spacing': LS,
    'text-transform': variant === 'overline' ? 'uppercase' : null,
  };
};

/**
 * Get typography styles based in props
 *
 * @param tokens object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @param size h1, h2, xs, sm, md... etc.
 * @param bold It the text is bold.
 * @param textAlign The text-align for the text.
 * @return typography styles
 */
export const typoMixin = ({
  bold = false,
  variant = 'body',
  textAlign,
  theme: tokens,
  size = 'md',
}: {
  bold?: boolean;
  variant?: TypoVariant;
  textAlign?: React.CSSProperties['textAlign'];
  theme: DefaultTheme;
  size?: TypoSize;
}): FlattenSimpleInterpolation => {
  const typoObject = getTypoObject({
    variant,
    theme: tokens,
    size,
  });
  return css`
    font-family: ${typoObject['font-family']};
    font-size: ${typoObject['font-size']};
    line-height: ${typoObject['line-height']};
    font-weight: ${(bold && 'bold') || typoObject['font-weight']};
    text-align: ${textAlign};
    letter-spacing: ${typoObject['letter-spacing']};
    text-transform: ${typoObject['text-transform']};
  `;
};

/**
 * Get the UI body color value based in colorScheme of the typographic element
 *
 * @param {Object} uiTokens Object with UI design tokens
 * @param {String} uiColorScheme error, success-weak... etc.
 * @return {String} Color value
 */
const getUiTokenValueByColorScheme = (uiTokens, uiColorScheme) => {
  const hyphenPos = uiColorScheme.indexOf('-');
  const isBaseContrast = hyphenPos === -1;
  const uiType = isBaseContrast
    ? uiColorScheme
    : uiColorScheme.substring(0, hyphenPos);
  const contrast = isBaseContrast
    ? 'base'
    : uiColorScheme.substring(hyphenPos + 1, uiColorScheme.length);
  return uiTokens?.[uiType]?.[contrast];
};

/**
 * Get the color value based in variant-colorScheme of the typographic element
 *
 * @param props.theme.tokens Object with all the design tokens
 * @param props.variant Heading, body, lead... etc.
 * @param props.colorScheme Base, weak, error... etc.
 * @return Css Color
 */
export const typoColorMixin = ({
  variant = 'body',
  colorScheme = 'base',
  theme: tokens,
}: {
  variant?: TypoVariant;
  colorScheme?: TypoColorScheme;
  theme: DefaultTheme;
}) => {
  const aliasTexColoTokens = tokens.alias.color.text;
  const textColorByToken =
    aliasTexColoTokens?.[variant]?.[colorScheme] ||
    getUiTokenValueByColorScheme(aliasTexColoTokens.feedback, colorScheme);
  return css`
    color: ${isValidColor(colorScheme) ? colorScheme : textColorByToken};
  `;
};

/**
 * Get icon font common styles (normally used with pseudo-elements before and
 * after)
 *
 * @param fontFamily - it is the font-family name of the icon font
 */

export const iconFontMixin = (fontFamily = 'gi') =>
  css`
    font-family: ${fontFamily}, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `.join(' ');
