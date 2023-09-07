import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { TypoVariant } from './declarations';
import { TypoSize } from '../../../declarations';
import { getTypoObject } from './tokens';

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
