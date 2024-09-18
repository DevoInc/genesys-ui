import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GIAboutQuestionFaqHelpFilled,
  GIAttentionErrorAlertCautionFilled,
  GIErrorWarningDangerStopFilled,
  GICheckOkRoundedFilled,
  GIInfoRoundFilled,
  type IIcon,
} from '@devoinc/genesys-icons';

import { DecoratorBar } from '../../../DecoratorBar';
import type {
  TActiveStatus,
  TGlobalStatus,
  IStyledOverloadCss,
} from '../../../../declarations';
import { mergeStyles } from '../../../../helpers';

const statusIconMap: { [key in TActiveStatus]: React.FC<IIcon> } = {
  success: GICheckOkRoundedFilled,
  help: GIAboutQuestionFaqHelpFilled,
  info: GIInfoRoundFilled,
  error: GIErrorWarningDangerStopFilled,
  warning: GIAttentionErrorAlertCautionFilled,
};

export interface ModalIconProps extends IStyledOverloadCss {
  /** Status of the modal **/
  status?: TGlobalStatus;
}

export const ModalIcon: React.FC<ModalIconProps> = ({ status, style }) => {
  const tokens = useTheme();

  const IconElement = React.useMemo(() => {
    if (status && statusIconMap[status]) {
      const Icon = statusIconMap[status] as React.FC<IIcon>;
      const modalHeaderIconTokens = tokens.cmp.modal.headerIcon;
      const dialogHeaderIconTokens = tokens.cmp.dialog.headerIcon;
      return (
        <Icon
          style={{
            marginRight: modalHeaderIconTokens.space.marginRight,
          }}
          size={dialogHeaderIconTokens.typo.fontSize}
          color={dialogHeaderIconTokens.color.background[status]}
        />
      );
    } else {
      return (
        <DecoratorBar
          size={tokens.cmp.modal.headerDecoratorBar.size.height}
          style={mergeStyles(
            `margin-right: ${tokens.cmp.modal.headerDecoratorBar.space.marginRight}`,
            style,
          )}
        />
      );
    }
  }, [
    status,
    style,
    tokens.cmp.dialog.headerIcon,
    tokens.cmp.modal.headerDecoratorBar.size.height,
    tokens.cmp.modal.headerDecoratorBar.space.marginRight,
    tokens.cmp.modal.headerIcon,
  ]);

  return IconElement;
};
