import * as React from 'react';

import { Button } from '../';
import { PanelActions } from '../Panel/declarations';
import { ToastHeader, ToastHeaderProps } from './components/ToastHeader';
import { ToastAction, ToastStatus } from './declarations';

export const getHeaderContent = ({
  closeToast,
  closeTooltip,
  collapsable,
  collapseTooltip,
  onCollapse,
  expandTooltip,
  collapsed,
  status,
  subtitle,
  title,
}: ToastHeaderProps) => {
  return (
    <ToastHeader
      closeToast={closeToast}
      closeTooltip={closeTooltip}
      collapsable={collapsable}
      collapseTooltip={collapseTooltip}
      expandTooltip={expandTooltip}
      collapsed={collapsed}
      onCollapse={onCollapse}
      status={status}
      subtitle={subtitle}
      title={title}
    />
  );
};

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
}): PanelActions => {
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
      </Button>
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
      </Button>
    );
  }

  return footerActions.length > 0 ? footerActions : undefined;
};
