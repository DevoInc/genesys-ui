import { DefaultTheme } from 'styled-components';
import { IconColorScheme } from './declarations';
import { isValidColor } from '../../styled/functions';

/**
 * Get the icon color token value based in the theme
 *
 * @param theme Object with all the design tokens
 * @return Css Color
 */
export const getIconColorSchemeToken = (theme: DefaultTheme) => {
  const aliasColorTextTokens = theme.alias.color.text;
  return {
    base: aliasColorTextTokens.body.base,
    inverse: aliasColorTextTokens.body.inverse,
    strong: aliasColorTextTokens.body.strong,
    stronger: aliasColorTextTokens.body.stronger,
    weak: aliasColorTextTokens.body.weak,
    weaker: aliasColorTextTokens.body.weaker,
    weakest: aliasColorTextTokens.body.weakest,
    success: aliasColorTextTokens.feedback.success.base,
    'success-strong': aliasColorTextTokens.feedback.success.strong,
    'success-weak': aliasColorTextTokens.feedback.success.weak,
    error: aliasColorTextTokens.feedback.error.base,
    'error-strong': aliasColorTextTokens.feedback.error.strong,
    'error-weak': aliasColorTextTokens.feedback.error.weak,
    warning: aliasColorTextTokens.feedback.warning.base,
    'warning-strong': aliasColorTextTokens.feedback.warning.strong,
    'warning-weak': aliasColorTextTokens.feedback.warning.weak,
    help: aliasColorTextTokens.feedback.help.base,
    'help-strong': aliasColorTextTokens.feedback.help.strong,
    'help-weak': aliasColorTextTokens.feedback.help.weak,
    info: aliasColorTextTokens.feedback.info.base,
    'info-strong': aliasColorTextTokens.feedback.info.strong,
    'info-weak': aliasColorTextTokens.feedback.info.weak,
    primary: aliasColorTextTokens.feedback.primary.strong,
    secondary: aliasColorTextTokens.feedback.secondary.strong,
    'blend-base': aliasColorTextTokens.feedback.blendBase.base,
    'blend-inverse': aliasColorTextTokens.feedback.blendInverse.base,
    'data-blue': aliasColorTextTokens.feedback.dataBlue.base,
    'data-bronze': aliasColorTextTokens.feedback.dataBronze.base,
    'data-green': aliasColorTextTokens.feedback.dataGreen.base,
    'data-teal': aliasColorTextTokens.feedback.dataTeal.base,
    'data-sky': aliasColorTextTokens.feedback.dataSky.base,
    'data-slate': aliasColorTextTokens.feedback.dataSlate.base,
    'data-indigo': aliasColorTextTokens.feedback.dataIndigo.base,
    'data-dusk': aliasColorTextTokens.feedback.dataDusk.base,
    'data-purple': aliasColorTextTokens.feedback.dataPurple.base,
    'data-magenta': aliasColorTextTokens.feedback.dataMagenta.base,
    'data-red': aliasColorTextTokens.feedback.dataRed.base,
  };
};

/**
 * Get the evaluated icon color value based in the theme and its color props
 *
 * @param params Object with all the params
 * @param params.theme Object with all the design tokens
 * @param params.color The custom color defined by the user
 * @param params.colorScheme The pre-defined color defined by the user
 * @return Css Color
 */
export const getColor = ({
  color,
  colorScheme,
  theme,
}: {
  color?: string;
  colorScheme?: IconColorScheme;
  theme: DefaultTheme;
}) => {
  if (isValidColor(color)) return color;
  if (colorScheme) return getIconColorSchemeToken(theme)[colorScheme];
  return 'inherit';
};
