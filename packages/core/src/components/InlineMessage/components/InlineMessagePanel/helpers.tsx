import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import {
  GIAboutQuestionFaqHelpFilled,
  GIAttentionErrorAlertCautionFilled,
  GICheckOkRoundedFilled,
  GIErrorWarningDangerStopFilled,
  GIInfoRoundFilled,
} from '@devoinc/genesys-icons';

/**
 * Get the specific icon svg and color for the InlineMessage panel header.
 *
 * @return object with the different icon components.
 */
export const getStatusIcon = (theme: DefaultTheme) => {
  return {
    error: (
      <GIErrorWarningDangerStopFilled fill={theme.cmp.icon.color.fill.error} />
    ),
    help: (
      <GIAboutQuestionFaqHelpFilled fill={theme.cmp.icon.color.fill.help} />
    ),
    info: <GIInfoRoundFilled fill={theme.cmp.icon.color.fill.info} />,
    success: (
      <GICheckOkRoundedFilled fill={theme.cmp.icon.color.fill.success} />
    ),
    warning: (
      <GIAttentionErrorAlertCautionFilled
        fill={theme.cmp.icon.color.fill.warning}
      />
    ),
  };
};
