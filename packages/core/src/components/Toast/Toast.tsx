import * as React from 'react';
import { toast as reactToastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TOAST_AUTO_CLOSE } from './constants';
import { ToastPanel, type ToastPanelProps } from './components/ToastPanel';

const activeToastsUpdates = {};

export interface ToastProps extends ToastPanelProps {
  /** Id */
  id: string;
}

export const toast = ({
  accent,
  actionApply,
  actionReject,
  closeTooltip,
  collapsable,
  id,
  maxHeight,
  content,
  showProgressBar,
  subtitle,
  title,
  status,
  ...nativeProps
}: ToastProps): void => {
  activeToastsUpdates[id] = activeToastsUpdates[id] + 1 || 1;
  const activeToastsLength = Object.keys(activeToastsUpdates).length;

  const autoClose =
    showProgressBar === true
      ? TOAST_AUTO_CLOSE
      : activeToastsLength > 1 ||
          accent ||
          actionApply ||
          actionReject ||
          collapsable
        ? false
        : TOAST_AUTO_CLOSE;

  const notificationProps = {
    accent,
    actionApply,
    actionReject,
    closeTooltip,
    collapsable,
    content,
    maxHeight,
    showProgressBar: !!autoClose,
    status,
    subtitle,
    title,
  };

  const startNextToastProgress = () => {
    const isFirstToast = Object.keys(activeToastsUpdates)[0] === id;
    const nextToast = Object.keys(activeToastsUpdates)[1];
    if (isFirstToast) reactToastify.update(nextToast, { progress: 0 });
  };

  const getProgressClassName = ({ defaultClassName }) => {
    return `${defaultClassName} progress-bar`;
  };

  if (reactToastify.isActive(id)) {
    reactToastify.update<ToastPanelProps>(id, {
      render: (
        <ToastPanel
          {...nativeProps}
          updates={activeToastsUpdates[id]}
          {...notificationProps}
        />
      ),
    });
  } else {
    reactToastify<ToastPanelProps>(
      <ToastPanel {...nativeProps} {...notificationProps} />,
      {
        autoClose,
        onClose: () => {
          startNextToastProgress();
          delete activeToastsUpdates[id];
        },
        hideProgressBar: !autoClose,
        progressClassName: getProgressClassName,
        toastId: id,
      },
    );
  }
};
