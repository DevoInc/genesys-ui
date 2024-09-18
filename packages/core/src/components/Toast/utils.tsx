import * as React from 'react';

import { STATUS_ICON_MAP } from '../../constants';
import { TUIColorScheme } from '../../declarations';
import type { IToast } from './declarations';
import { Button, type ButtonProps } from '../Button';

interface IGetFooterActions
  extends Pick<
    IToast,
    'accent' | 'actionApply' | 'actionReject' | 'closeToast' | 'status'
  > {}

export const getFooterActions = ({
  accent,
  actionApply,
  actionReject,
  closeToast,
  status,
}: IGetFooterActions): React.ReactElement<ButtonProps>[] => {
  const footerActions = [];

  if (actionReject?.label && actionReject?.action) {
    footerActions.push(
      <Button
        onClick={() => {
          actionReject.action();
          closeToast();
        }}
        colorScheme={accent ? 'blend-base' : 'quiet'}
      >
        {actionReject.label}
      </Button>,
    );
  }

  if (actionApply?.label && actionApply?.action) {
    footerActions.push(
      <Button
        onClick={() => {
          actionApply.action();
          closeToast();
        }}
        colorScheme={accent ? status : 'neutral'}
      >
        {actionApply.label}
      </Button>,
    );
  }

  return footerActions.length > 0 ? footerActions : undefined;
};

export const getToastStatusIcon = (status: TUIColorScheme) =>
  STATUS_ICON_MAP.filled[status];
