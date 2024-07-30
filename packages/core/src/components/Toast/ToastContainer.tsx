import * as React from 'react';

import { type StyledToastContainerProps, StyledToastContainer } from './styled';

export interface ToastContainerProps
  extends Omit<StyledToastContainerProps, 'theme' | 'containerId'> {}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  ...styledProps
}) => {
  return (
    <StyledToastContainer
      {...styledProps}
      toastClassName="toast"
      bodyClassName="body"
      closeButton={false}
      closeOnClick={false}
      draggable={false}
      icon={false}
    />
  );
};
