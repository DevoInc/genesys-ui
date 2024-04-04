import * as React from 'react';

import { StyledToastContainerProps, StyledToastContainer } from './styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
