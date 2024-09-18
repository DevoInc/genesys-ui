import * as React from 'react';
import {
  GIAboutQuestionFaqHelp,
  GIAboutQuestionFaqHelpFilled,
  GIAttentionErrorAlertCaution,
  GIAttentionErrorAlertCautionFilled,
  GICheckOkRoundedFilled,
  GICheckThick,
  GIErrorWarningDangerStop,
  GIErrorWarningDangerStopFilled,
  GIInfoRound,
  GIInfoRoundFilled,
} from '@devoinc/genesys-icons';

export const STATUS_ICON_MAP = {
  filled: {
    error: <GIErrorWarningDangerStopFilled />,
    help: <GIAboutQuestionFaqHelpFilled />,
    info: <GIInfoRoundFilled />,
    success: <GICheckOkRoundedFilled />,
    warning: <GIAttentionErrorAlertCautionFilled />,
  },
  stroke: {
    error: <GIErrorWarningDangerStop />,
    help: <GIAboutQuestionFaqHelp />,
    info: <GIInfoRound />,
    success: <GICheckThick />,
    warning: <GIAttentionErrorAlertCaution />,
  },
};
