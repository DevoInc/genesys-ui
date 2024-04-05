import { css, DefaultTheme } from 'styled-components';

import { isValidColor } from '../../../helpers';
import type { TTypoColorScheme } from '../../../components/Typography/declarations';
import type { TTypoVariant } from './declarations';

type TUITokens = DefaultTheme['alias']['color']['text']['feedback'];

/**
 * Get the UI body color value based in colorScheme of the typographic element
 *
 * @param uiTokens Object with UI design tokens
 * @param uiColorScheme error, success-weak... etc.
 * @return Color value
 */
const getUiTokenValueByColorScheme = (
  uiTokens: TUITokens,
  uiColorScheme: TTypoColorScheme,
): string => {
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
  variant?: TTypoVariant;
  colorScheme?: TTypoColorScheme;
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
