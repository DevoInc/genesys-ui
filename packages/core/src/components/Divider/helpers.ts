import { DefaultTheme } from 'styled-components';

export const getDividerColorTokens = (
  aliasColorBorderTokens: DefaultTheme['alias']['color']['border'],
) => {
  const colorBorderFeedbackTokens = aliasColorBorderTokens.feedback;
  const colorBorderSeparatorTokens = aliasColorBorderTokens.separator;

  return {
    base: colorBorderSeparatorTokens.base.base,
    inverse: colorBorderSeparatorTokens.inverse.base,
    strong: colorBorderSeparatorTokens.base.strong,
    stronger: colorBorderSeparatorTokens.base.stronger,
    weak: colorBorderSeparatorTokens.base.weak,
    weaker: colorBorderSeparatorTokens.base.weaker,
    weakest: colorBorderSeparatorTokens.base.weakest,
    success: colorBorderFeedbackTokens.success.base,
    'success-weak': colorBorderFeedbackTokens.success.weak,
    'success-strong': colorBorderFeedbackTokens.success.strong,
    error: colorBorderFeedbackTokens.error.base,
    'error-weak': colorBorderFeedbackTokens.error.weak,
    'error-strong': colorBorderFeedbackTokens.error.strong,
    warning: colorBorderFeedbackTokens.warning.base,
    'warning-weak': colorBorderFeedbackTokens.warning.weak,
    'warning-strong': colorBorderFeedbackTokens.warning.strong,
    help: colorBorderFeedbackTokens.help.base,
    'help-weak': colorBorderFeedbackTokens.help.weak,
    'help-strong': colorBorderFeedbackTokens.help.strong,
    info: colorBorderFeedbackTokens.info.base,
    'info-weak': colorBorderFeedbackTokens.info.weak,
    'info-strong': colorBorderFeedbackTokens.info.strong,
    primary: colorBorderFeedbackTokens.primary.base,
    secondary: colorBorderFeedbackTokens.secondary.base,
    neutral: colorBorderFeedbackTokens.neutral.base,
    'blend-base': colorBorderFeedbackTokens.base.base,
    'blend-inverse': colorBorderFeedbackTokens.inverse.base,
    'data-blue': colorBorderFeedbackTokens.dataBlue.base,
    'data-bronze': colorBorderFeedbackTokens.dataBronze.base,
    'data-dusk': colorBorderFeedbackTokens.dataDusk.base,
    'data-green': colorBorderFeedbackTokens.dataGreen.base,
    'data-indigo': colorBorderFeedbackTokens.dataIndigo.base,
    'data-magenta': colorBorderFeedbackTokens.dataMagenta.base,
    'data-purple': colorBorderFeedbackTokens.dataPurple.base,
    'data-red': colorBorderFeedbackTokens.dataRed.base,
    'data-sky': colorBorderFeedbackTokens.dataSky.base,
    'data-slate': colorBorderFeedbackTokens.dataSlate.base,
    'data-teal': colorBorderFeedbackTokens.dataTeal.base,
  };
};
