import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IModal } from '../../declarations';
import { Overlay, type OverlayProps } from '../../../Overlay';

export interface ModalBackdropProps
  extends Omit<OverlayProps, 'children'>,
    Pick<
      IModal,
      | 'children'
      | 'disableCloseOnOverlayClick'
      | 'onRequestClose'
      | 'windowSize'
    > {}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  windowSize,
  onRequestClose,
  disableCloseOnOverlayClick,
  zIndex,
  padding,
  style,
  children,
  ...restOverlayProps
}) => {
  const theme = useTheme();
  return (
    <Overlay
      {...restOverlayProps}
      zIndex={zIndex || theme.alias.elevation.zIndex.depth.overlay}
      bgColorScheme="dark"
      fixed
      onClick={
        disableCloseOnOverlayClick ? undefined : () => onRequestClose?.()
      }
      style={style}
      padding={windowSize === 'fullscreen' ? '0' : padding}
    >
      {children}
    </Overlay>
  );
};
