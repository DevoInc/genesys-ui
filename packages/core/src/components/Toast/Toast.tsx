import * as React from 'react';
import { toast as reactToastify } from 'react-toastify';

import { ToastPanel, type ToastPanelProps } from './components/ToastPanel';

import 'react-toastify/dist/ReactToastify.css';
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
  subtitle,
  title,
  status,
  ...nativeProps
}: ToastProps): void => {
  const autoClose =
    accent || actionApply || actionReject || collapsable ? false : 5000;

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

  activeToastsUpdates[id] = activeToastsUpdates[id] + 1 || 1;
  const activeToastsLength = Object.keys(activeToastsUpdates).length;

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
        hideProgressBar: autoClose && activeToastsLength > 1,
        progressClassName: getProgressClassName,
        toastId: id,
      },
    );
  }
};
