import * as React from 'react';
import { concat } from 'lodash';
import { DecoratorBar } from '../../../DecoratorBar';
import { useTheme } from 'styled-components';
import {
  GIAboutQuestionFaqHelpFilled,
  GIAttentionErrorAlertCautionFilled,
  GIErrorWarningDangerStopFilled,
  GICheckOkRoundedFilled,
  GIInfoRoundFilled,
} from '@devoinc/genesys-icons';
import type { IconType } from '@devoinc/genesys-icons';
import type {
  TActiveStatus,
  TGlobalStatus,
  IStyledOverloadCss,
} from '../../../../declarations';

const statusIconMap: { [key in TActiveStatus]: IconType } = {
  success: GICheckOkRoundedFilled,
  help: GIAboutQuestionFaqHelpFilled,
  info: GIInfoRoundFilled,
  error: GIErrorWarningDangerStopFilled,
  warning: GIAttentionErrorAlertCautionFilled,
} as const;

export interface ModalIconProps extends IStyledOverloadCss {
  /** Status of the modal **/
  status?: TGlobalStatus;
}

export const ModalIcon: React.FC<ModalIconProps> = ({ status, styles }) => {
  const tokens = useTheme();

  const IconElement = React.useMemo(() => {
    if (status && statusIconMap[status]) {
      const Icon = statusIconMap[status] as IconType;
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
          styles={concat(
            `margin-right: ${tokens.cmp.modal.headerDecoratorBar.space.marginRight}`,
            styles,
          )}
        />
      );
    }
  }, [
    status,
    styles,
    tokens.cmp.dialog.headerIcon,
    tokens.cmp.modal.headerDecoratorBar.size.height,
    tokens.cmp.modal.headerDecoratorBar.space.marginRight,
    tokens.cmp.modal.headerIcon,
  ]);

  return IconElement;
};
