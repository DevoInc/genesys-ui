import * as React from 'react';

import { UIColorScheme } from '../../declarations';
import { STATUS_ICON_MAP } from '../../constants';
import { Button, type ButtonProps } from '../Button';
import { ToastAction, ToastStatus } from './declarations';

export const getFooterActions = ({
  accent,
  actionApply,
  actionReject,
  closeToast,
  status,
}: {
  accent: boolean;
  actionApply?: ToastAction;
  actionReject?: ToastAction;
  closeToast: () => void;
  status: ToastStatus;
}): React.ReactElement<ButtonProps>[] => {
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

export const getToastStatusIcon = (status: UIColorScheme) =>
  STATUS_ICON_MAP.filled[status];
