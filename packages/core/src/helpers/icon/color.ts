import { DefaultTheme } from 'styled-components';

import { isValidColor } from '../color';
import type { TAllColorScheme } from '../../declarations';

export const getIconColorSchemeMap = (theme: DefaultTheme) => ({
  base: theme.alias.color.text.body.base,
  inverse: theme.alias.color.text.body.inverse,
  strong: theme.alias.color.text.body.strong,
  stronger: theme.alias.color.text.body.stronger,
  weak: theme.alias.color.text.body.weak,
  weaker: theme.alias.color.text.body.weaker,
  weakest: theme.alias.color.text.body.weakest,
  success: theme.alias.color.text.feedback.success.base,
  'success-strong': theme.alias.color.text.feedback.success.strong,
  'success-weak': theme.alias.color.text.feedback.success.weak,
  error: theme.alias.color.text.feedback.error.base,
  'error-strong': theme.alias.color.text.feedback.error.strong,
  'error-weak': theme.alias.color.text.feedback.error.weak,
  warning: theme.alias.color.text.feedback.warning.base,
  'warning-strong': theme.alias.color.text.feedback.warning.strong,
  'warning-weak': theme.alias.color.text.feedback.warning.weak,
  help: theme.alias.color.text.feedback.help.base,
  'help-strong': theme.alias.color.text.feedback.help.strong,
  'help-weak': theme.alias.color.text.feedback.help.weak,
  info: theme.alias.color.text.feedback.info.base,
  'info-strong': theme.alias.color.text.feedback.info.strong,
  'info-weak': theme.alias.color.text.feedback.info.weak,
  primary: theme.alias.color.text.feedback.primary.strong,
  secondary: theme.alias.color.text.feedback.secondary.strong,
  'blend-base': theme.alias.color.text.feedback.blendBase.base,
  'blend-inverse': theme.alias.color.text.feedback.blendInverse.base,
  'data-blue': theme.alias.color.text.feedback.dataBlue.base,
  'data-bronze': theme.alias.color.text.feedback.dataBronze.base,
  'data-green': theme.alias.color.text.feedback.dataGreen.base,
  'data-teal': theme.alias.color.text.feedback.dataTeal.base,
  'data-sky': theme.alias.color.text.feedback.dataSky.base,
  'data-slate': theme.alias.color.text.feedback.dataSlate.base,
  'data-indigo': theme.alias.color.text.feedback.dataIndigo.base,
  'data-dusk': theme.alias.color.text.feedback.dataDusk.base,
  'data-purple': theme.alias.color.text.feedback.dataPurple.base,
  'data-magenta': theme.alias.color.text.feedback.dataMagenta.base,
  'data-red': theme.alias.color.text.feedback.dataRed.base,
});

/**
 * Get the evaluated icon color value based in the theme and its color props
 *
 * @param params Object with all the params
 * @param params.theme Object with all the design tokens
 * @param params.color The custom color defined by the user
 * @param params.colorScheme The pre-defined color defined by the user
 * @return Css Color
 */
export const getIconColor =
  (theme: DefaultTheme) =>
  ({
    color,
    colorScheme,
  }: {
    color?: string;
    colorScheme?: TAllColorScheme;
  }) => {
    if (isValidColor(color)) return color;
    if (colorScheme) return getIconColorSchemeMap(theme)[colorScheme];
    return 'inherit';
  };
