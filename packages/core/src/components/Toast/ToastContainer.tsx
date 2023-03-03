import * as React from 'react';

import { StyledContainer, StyledContainerProps } from './styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastContainerProps
  extends Omit<StyledContainerProps, 'theme' | 'containerId'> {}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  ...styledProps
}) => {
  return (
    <StyledContainer
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
