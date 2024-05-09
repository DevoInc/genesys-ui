import * as React from 'react';
import type { DefaultTheme } from 'styled-components';

import type { TTypoVariant } from './declarations';
import type { TTypoSize } from '../../../declarations';

/**
 * Get the font-family value based in variant of the typographic element
 *
 * @param tokens Object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @return line-height value: '2rem', '2.4rem'... etc.
 */
export const getFontFamily = ({ tokens, variant = 'body' }) => {
  return tokens.alias.typographies.typo.fontFamily[variant].fontFaceName;
};

/**
 * Get the font-size value based in variant-size of the typographic element
 *
 * @param tokens Object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @param size h1, h2, xs, sm, md... etc.
 * @return font-size value: '1rem', '2.4rem'... etc.
 */
export const getFontSize = ({ tokens, variant = 'body', size = 'md' }) => {
  return tokens.alias.typographies.typo.fontSize[variant][size];
};

/**
 * Get the font-weight value based in variant of the typographic element
 *
 * @param tokens Object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @return font-weight value: '300', '500', 'bold'... etc.
 */
export const getFontWeight = ({ tokens, variant = 'body' }) => {
  return tokens.alias.typographies.typo.fontWeight[variant];
};

/**
 * Get the line-height value based in variant-size of the typographic element
 *
 * @param tokens Object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @param size h1, h2, xs, sm, md... etc.
 * @return line-height value: '2rem', '2.4rem'... etc.
 */
export const getLineHeight = ({ tokens, variant = 'body', size = 'md' }) => {
  return tokens.alias.typographies.typo.lineHeight[variant][size];
};

/**
 * Get the letter-spacing value based in variant of the typographic element
 *
 * @param tokens Object with all the design tokens
 * @param variant heading, body, action, overline, hero... etc.
 * @return letter-spacing value: '0.03em'... etc.
 */
export const getLetterSpacing = ({ tokens, variant = 'body' }) => {
  return tokens.alias.typographies.typo.letterSpacing[variant].em;
};

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
  variant?: TTypoVariant;
  theme: DefaultTheme;
  size?: TTypoSize;
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
